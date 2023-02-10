import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../Components/Accueil/Home";
import React, { useContext } from "react";
import Settings from "../Components/Settings/Settings";
import CustomDrawer from "./Helpers/CustomDrawer";
import themeContext from "../config/themeContext";
import SearchStackNavigator from "./StackNavigator";
import HomeStackNavigator from "./HomeStackNavigator";
import { HomeActualites } from "../Components/Actualités/HomeActualites";
import ActualitesStackNavigator from "./ActualiteStackNavigator";
const Drawer = createDrawerNavigator();

function MyDrawer() {
  const theme = useContext(themeContext);
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
        drawerActiveBackgroundColor: theme.drawer.activeBackgroundColor,
        drawerInactiveBackgroundColor: theme.drawer.background,
        drawerLabelStyle: {
          fontFamily: "Poppins-ExtraBold",
          color: theme.color,
        },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{ title: "Accueil" }}
      />

      <Drawer.Screen
        name="Search"
        component={SearchStackNavigator}
        options={{ title: "Recherche" }}
      />
      {/*  <Drawer.Screen
        name="HomeActualites"
        component={ActualitesStackNavigator}
        options={{ title: "Actualités" }}
      /> */}
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{ title: "Paramètres" }}
      />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
