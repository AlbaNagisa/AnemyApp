import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { ActualiteDetails } from "../Components/Actualités/Helpers/ActualiteDetails";
import { HomeActualites } from "../Components/Actualités/HomeActualites";

function ActualitesStackNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ActualitesScreen" component={HomeActualites} />
      <Stack.Screen name="ActualiteDetails" component={ActualiteDetails} />
    </Stack.Navigator>
  );
}

export default ActualitesStackNavigator;
