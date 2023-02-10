import React, { useContext, useState } from "react";
import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import themeContext from "../../../config/themeContext";

export function ActualitesCard({ item, navigation }) {
  const theme = useContext(themeContext);

  return (
    <TouchableOpacity
      style={{
        flex: 1,
        borderRadius: 10,
        margin: 5,
      }}
      onPress={() => {
        navigation.navigate("ActualiteDetails", { item });
      }}
    >
      <View style={{ flex: 1, padding: 10 }}>
        <Image
          source={{ uri: item.images.image }}
          style={{
            height: Dimensions.get("window").height / 5,
            resizeMode: "cover",
            borderRadius: 10,
          }}
        />
      </View>
      <View
        style={{
          justifyContent: "flex-end",
          marginTop: -9,
        }}
      >
        <View
          style={{
            position: "absolute",
            marginLeft: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            width: Dimensions.get("window").width / 1.08,
            backgroundColor: theme.animeCard.background,
          }}
        >
          <Text
            style={{
              margin: 5,
              color: theme.color,
              fontFamily: "Poppins-Light",
            }}
          >
            {item.titre}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
