import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Search from "../Components/Recherche/Search";
import PersonnageDetails from "../Components/Recherche/Helpers/PersonnageDetails";
import AnimeDetails from "../Components/Recherche/Helpers/AnimeDetails";
function SearchStackNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SearchScreen" component={Search} />
      <Stack.Screen name="PersonnageDetails" component={PersonnageDetails} />
      <Stack.Screen name="AnimeDetails" component={AnimeDetails} />
    </Stack.Navigator>
  );
}

export default SearchStackNavigator;
