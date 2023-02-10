import React, { useContext } from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";
import themeContext from "../../../../config/themeContext";

export const Name = ({ title, data }) => {
  const theme = useContext(themeContext);
  const affichage = () => {
    if (typeof data === "object") {
      if (data.length === 0) return " Aucuns noms alternatifs";
      return " " + data.map((v) => v).join(", ");
    }
    return " " + data;
  };

  return (
    <View
      style={{
        flexDirection: "column",
        margin: 1,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 12,
            fontFamily: "Poppins-ExtraBold",
            color: theme.color,
          }}
        >
          {title}:
        </Text>
      </View>
      <ScrollView
        nestedScrollEnabled={true}
        style={{
          flex: 1,
          flexDirection: "column",
          maxHeight: 60,
        }}
      >
        <Text
          style={{
            fontSize: 12,

            fontFamily: "Poppins-Light",
            color: theme.color,
          }}
        >
          {affichage()}
        </Text>
      </ScrollView>
    </View>
  );
};
