import React from "react";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

import { useAuth } from "../hooks/Auth";
import { ActivityIndicator, View } from "react-native";

const Routes: React.FC = () => {
  const { token_type, loading } = useAuth();
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }
  return token_type ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
