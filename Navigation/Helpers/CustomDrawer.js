import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HamburgerRotation } from "../../Animation/hamburgerRotation";
import themeContext from "../../config/themeContext";

export default function CustomDrawer(props) {
  const theme = useContext(themeContext);

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        backgroundColor: theme.drawer.backgroundColor,
        flex: 1,
      }}
    >
      <View style={{ marginLeft: 10, marginTop: 8 }}>
        <HamburgerRotation navigation={props.navigation} />
      </View>
      <View style={{ flex: 1, padding: 5 }}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
}
