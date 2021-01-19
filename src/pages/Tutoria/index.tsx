import React from "react";
import { Text, StatusBar } from "react-native";
import { WebView } from "react-native-webview";
import Header from "../../Components/Header";
import normalize from "../../utils/normalize";
import { Container } from "./styles";

const Tutoria: React.FC = () => {
  return (
    <Container>
      <StatusBar barStyle="default" />
      <Header />
      <Text
        style={{
          fontSize: normalize(25),
          textAlign: "center",
          marginTop: normalize(5),
        }}
      >
        Tutoria EaD
      </Text>
      <WebView
        style={{ width: "auto" }}
        source={{
          uri:
            "https://chat.movidesk.com/ChatWidgetNew/WidgetGroup/41D1DA126C674B819E1B92591FA55A13",
        }}
      />
    </Container>
  );
};

export default Tutoria;
