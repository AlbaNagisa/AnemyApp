import React, { useContext } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import themeContext from "../../../config/themeContext";

export default function AnimeComponent({ item, navigation }) {
  const theme = useContext(themeContext);
  function desc(desc) {
    if (desc) {
      return desc;
    } else {
      return "Aucune biographie";
    }
  }
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        borderRadius: 10,
        margin: 10,
        padding: 10,
        flexDirection: "row",
        backgroundColor: theme.textInput.background,
      }}
      onPress={() => {
        navigation.navigate("AnimeDetails", { item: item });
      }}
    >
      <View
        style={{
          borderRadius: 10,
        }}
      >
        <Image
          style={{
            height: 200,
            borderRadius: 10,
            width: 130,
          }}
          source={{ uri: item.images?.affiche }}
        />
      </View>
      <View
        style={{
          flex: 1,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        <View>
          <Text
            style={{
              margin: 5,
              textAlign: "center",
              justifyContent: "center",
              fontFamily: "Poppins-ExtraBold",
              color: theme.color,
            }}
          >
            {item.noms.romaji}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignSelf: "center",
            marginTop: 5,
          }}
        >
          <Text
            numberOfLines={5}
            style={{
              margin: 9,
              textAlign: "justify",
              fontFamily: "Poppins-Light",
              color: theme.color,
            }}
          >
            {desc(item.description)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
