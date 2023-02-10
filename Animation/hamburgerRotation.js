import { useDrawerStatus } from "@react-navigation/drawer";
import React, { useRef, useContext } from "react";
import { Animated, View, TouchableOpacity, Easing } from "react-native";
import themeContext from "../config/themeContext";

export function HamburgerRotation({ navigation }) {
  const theme = useContext(themeContext);
  const rotateTopBar = useRef(new Animated.Value(0)).current;
  const widthValue = useRef(new Animated.Value(1)).current;
  const translateYTopBarValue = useRef(new Animated.Value(0)).current;
  const translateXTopBarValue = useRef(new Animated.Value(0)).current;

  const rotateBottomBar = useRef(new Animated.Value(0)).current;
  const translateYBottomBarValue = useRef(new Animated.Value(0)).current;
  const translateXBottomBarValue = useRef(new Animated.Value(0)).current;
  const open = useDrawerStatus() === "open";

  const toBackArrow = () => {
    Animated.timing(rotateTopBar, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
    Animated.timing(widthValue, {
      toValue: 0.7,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
    Animated.timing(translateYTopBarValue, {
      toValue: 5,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
    Animated.timing(translateXTopBarValue, {
      toValue: -5,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

    Animated.timing(rotateBottomBar, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
    Animated.timing(translateYBottomBarValue, {
      toValue: -5,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
    Animated.timing(translateXBottomBarValue, {
      toValue: -5,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };
  const spinTopBar = rotateTopBar.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "-35deg"],
  });
  const spinBottomBar = rotateBottomBar.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "35deg"],
  });

  const toMenu = () => {
    Animated.timing(rotateTopBar, {
      toValue: 0,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
    Animated.timing(widthValue, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
    Animated.timing(translateYTopBarValue, {
      toValue: 0,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
    Animated.timing(translateXTopBarValue, {
      toValue: 0,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

    Animated.timing(rotateBottomBar, {
      toValue: 0,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
    Animated.timing(translateYBottomBarValue, {
      toValue: 0,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
    Animated.timing(translateXBottomBarValue, {
      toValue: 0,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };
  return (
    <TouchableOpacity
      style={{
        borderRadius: 5,
        width: 50,
        height: 50,
        justifyContent: "center",
      }}
      onPress={() => {
        open ? navigation.closeDrawer() : navigation.openDrawer();
        open ? toMenu() : toBackArrow();
      }}
    >
      {open ? toBackArrow() : toMenu()}

      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          margin: 12,
        }}
      >
        <Animated.View
          style={{ transform: [{ translateY: translateYTopBarValue }] }}
        >
          <Animated.View
            style={{ transform: [{ translateX: translateXTopBarValue }] }}
          >
            <Animated.View style={{ transform: [{ rotate: spinTopBar }] }}>
              <Animated.View style={{ transform: [{ scaleX: widthValue }] }}>
                <View
                  style={{
                    backgroundColor: theme.color,
                    height: 5,
                    width: 30,
                    borderRadius: 50,
                  }}
                />
              </Animated.View>
            </Animated.View>
          </Animated.View>
        </Animated.View>

        <View
          style={{
            backgroundColor: theme.color,
            height: 5,
            width: 30,
            borderRadius: 50,
          }}
        />
        <Animated.View
          style={{ transform: [{ translateY: translateYBottomBarValue }] }}
        >
          <Animated.View
            style={{ transform: [{ translateX: translateXBottomBarValue }] }}
          >
            <Animated.View style={{ transform: [{ rotate: spinBottomBar }] }}>
              <Animated.View style={{ transform: [{ scaleX: widthValue }] }}>
                <View
                  style={{
                    backgroundColor: theme.color,
                    height: 5,
                    width: 30,
                    borderRadius: 50,
                  }}
                />
              </Animated.View>
            </Animated.View>
          </Animated.View>
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
}
