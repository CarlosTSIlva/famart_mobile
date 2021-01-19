import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-community/async-storage";
import api from "../services/api";

interface AuthState {
  access_token: string;
  token_type: any;
}

interface SignCredetials {
  usuario: string;
  senha: string;
}

interface AuthContextData {
  token_type: any;
  dados: object;
  loading: boolean;
  singIn(credentials: SignCredetials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);
  const [dados, Setdados] = useState([]);
  const [token, setToken] = useState([]);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [access_token, token_type] = await AsyncStorage.multiGet([
        "@Famart:access_token",
        "@Famart:token_type",
      ]);

      if (access_token[1] && token_type[1]) {
        api.post("refresh").then((res) =>
          setData({
            access_token: res.data.access_token,
            token_type,
          })
        );
      }

      setLoading(false);
    }
    loadStorageData();
  }, []);

  const singIn = useCallback(async ({ usuario, senha }) => {
    const response = await api.post("auth", {
      usuario,
      senha,
    });

    const { access_token, token_type } = response.data;

    api.defaults.headers["Authorization"] = `Bearer ${access_token}`;

    api.post("/me").then((res) => {
      Setdados(res.data);
    });
    await AsyncStorage.multiSet([
      ["@Famart:access_token", access_token],
      ["@Famart:token_type", JSON.stringify(token_type)],
    ]);

    setData({ access_token, token_type });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove([
      "@Famart:access_token",
      "@Famart:token_type",
    ]);

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        dados: dados,
        token_type: data.token_type,
        singIn,
        signOut,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("UseAuth must be used within an AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
