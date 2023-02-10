import React, { useContext } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { oneRequestAnime } from "../../../api/apiRequest";
import themeContext from "../../../config/themeContext";

export default function AnimeCard({ item, navigation }) {
  const theme = useContext(themeContext);
  return (
    <TouchableOpacity
      style={{
        flexDirection: "column-reverse",
        margin: 5,
        flex: 1,
        borderRadius: 5,
        width: 135,
        height: 200,
      }}
      onPress={() => {
        oneRequestAnime(item.id).then(async ({ data }) => {
          navigation.navigate("AnimeDetails", { item: await data.Anime });
        });
      }}
    >
      <Image
        style={{
          borderRadius: 5,
          position: "absolute",
          height: 200,
          width: 135,
          resizeMode: "cover",
        }}
        source={{ uri: item.images.affiche }}
      />
      <View
        style={{
          backgroundColor: theme.animeCard.background,
          borderBottomStartRadius: 5,
          borderBottomEndRadius: 5,
          minHeight: 40,
          justifyContent: "center",
        }}
      >
        <Text
          numberOfLines={2}
          style={{
            textAlign: "center",
            color: "#fff",
            fontFamily: "Poppins-Light",
          }}
        >
          {item.noms.romaji}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
