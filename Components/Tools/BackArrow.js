import React, { useContext } from "react";
import { View, TouchableOpacity } from "react-native";
import { NavigationContext } from "@react-navigation/native";
import themeContext from "../../config/themeContext";
export function BackArrow() {
  const navigation = useContext(NavigationContext);
  const theme = useContext(themeContext);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
      style={{
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "column",
        margin: 12,
      }}
    >
      <View
        style={{
          transform: [{ translateY: 16 }],
        }}
      >
        <View
          style={{
            transform: [{ rotate: "-35deg" }],
          }}
        >
          <View
            style={{
              transform: [{ scaleX: 0.7 }],
            }}
          >
            <View
              style={{
                backgroundColor: theme.color,
                height: 5,
                width: 30,
                borderRadius: 50,
              }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: theme.color,
          height: 5,
          width: 30,
          borderRadius: 50,
        }}
      />

      <View
        style={{
          transform: [{ translateY: -16 }],
        }}
      >
        <View
          style={{
            transform: [{ rotate: "35deg" }],
          }}
        >
          <View
            style={{
              transform: [{ scaleX: 0.7 }],
            }}
          >
            <View
              style={{
                backgroundColor: theme.color,
                height: 5,
                width: 30,
                borderRadius: 50,
              }}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
