/* 
Colors: {
 primary: '#1292B4',
 white: '#FFF',
 lighter: '#F3F3F3',
 light: '#DAE1E7',
 dark: '#444',
 darker: '#222',
 black: '#000',
}
*/

import React, { useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import themeContext from "./config/themeContext";
import theme from "./config/theme.js";
import { EventRegister } from "react-native-event-listeners";
import { StatusBar } from "react-native";
import MyDrawer from "./Navigation/DrawerNavigator";

const App = () => {
  const [mode, setMode] = useState("dark");
  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      "changeTheme",
      (data) => {
        setMode(data);
      }
    );
    return () => {
      EventRegister.removeAllListeners(eventListener);
    };
  });
  return (
    <themeContext.Provider value={theme[mode]}>
      <NavigationContainer theme={theme[mode]}>
        <StatusBar hidden={true} />
        <MyDrawer theme={theme[mode]} />
      </NavigationContainer>
    </themeContext.Provider>
  );
};

export default App;
