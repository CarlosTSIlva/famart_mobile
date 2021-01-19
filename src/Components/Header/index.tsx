import React from "react";

import { Image, Linking, TouchableOpacity } from "react-native";
import { useAuth } from "../../hooks/Auth";
import normalize from "../../utils/normalize";

import { ViewImg } from "./styles";

const Header: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <ViewImg>
      <Image
        source={{
          uri:
            "https://siead.faculdadefamart.edu.br/content/upload/empresa/c81e728d9d4c2f636f067f89cc14862c.jpg",
        }}
        style={{
          height: normalize(105),
          width: normalize(280),
        }}
      />
      <TouchableOpacity onPress={signOut}>
        <Image
          style={{
            height: normalize(25),
            width: normalize(25),
          }}
          source={require("../../assets/logout.png")}
        />
      </TouchableOpacity>
    </ViewImg>
  );
};

export default Header;
