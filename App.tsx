import React from "react";
import Routes from "./src/Routes";
import AppProvider from "./src/hooks";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <AppProvider>
        <Routes />
      </AppProvider>
    </NavigationContainer>
  );
}
