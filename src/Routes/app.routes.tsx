import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Dashboard from "../pages/Dashboard";
import Tutoria from "../pages/Tutoria";
import MeusDados from "../pages/MeusDados";

const Drawer = createDrawerNavigator();

const AppRoutes: React.FC = () => (
  <Drawer.Navigator
    drawerContentOptions={{
      activeTintColor: "#003153",
      itemStyle: { marginVertical: 5 },
    }}
    initialRouteName="Dashboard"
  >
    <Drawer.Screen
      name="Dashboard"
      options={{ drawerLabel: "Home" }}
      component={Dashboard}
    />
    <Drawer.Screen
      name="Tutoria"
      options={{ drawerLabel: "Tutoria EaD" }}
      component={Tutoria}
    />
    <Drawer.Screen
      name="MeusDados"
      options={{ drawerLabel: "Meus Dados" }}
      component={MeusDados}
    />
  </Drawer.Navigator>
);

export default AppRoutes;
