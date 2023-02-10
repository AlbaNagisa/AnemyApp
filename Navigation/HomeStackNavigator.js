import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Components/Accueil/Home";
import PersonnageDetails from "../Components/Recherche/Helpers/PersonnageDetails";
import AnimeDetails from "../Components/Recherche/Helpers/AnimeDetails";
function HomeStackNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="PersonnageDetails" component={PersonnageDetails} />
      <Stack.Screen name="AnimeDetails" component={AnimeDetails} />
    </Stack.Navigator>
  );
}

export default HomeStackNavigator;
