import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../pages/HomeScreen";
import ResetPassword from "../pages/ResetPassword";

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: "#ffffff" },
    }}
  >
    <Auth.Screen name="Home" component={HomeScreen} />
    <Auth.Screen name="Reset" component={ResetPassword} />
  </Auth.Navigator>
);

export default AuthRoutes;
