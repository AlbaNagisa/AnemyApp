import React from "react";
import { View, Text } from "react-native";

function Genre({ genre }) {
  function color() {
    switch (genre) {
      case "Action":
        return "#7b7163";

      case "Aventure":
        return "#8cc152";

      case "Biographie":
        return "#ff9800";

      case "Comédie":
        return "#e8ce4d";

      case "Drame":
        return "#3c3b3d";

      case "Ecchi":
        return "#ec87c0";

      case "Erotique":
        return "#ff9800";

      case "École":
        return "#7b7163";

      case "Hentai":
        return "#ff9800";

      case "Enfant":
        return "#37bc9b";

      case "Fantastique":
        return "#2aba66";

      case "Harem":
        return "#d76fad";

      case "Historique":
        return "#aa8e69";

      case "Horreur":
        return "#434a54";

      case "Josei":
        return "#48cfad";

      case "Magique":
        return "#e9573f";

      case "Mecha":
        return "#aab2bd";

      case "Millitaire":
        return "#baa286";

      case "Mystère":
        return "#b37f79";

      case "Musique":
        return "#a0cecb";

      case "Policier":
        return "#4a89dc";

      case "Psychologique":
        return "#6a50a7";

      case "Romance":
        return "#bf263c";

      case "Science-Fiction":
        return "#3bafda";

      case "Seinen":
        return "#8e8271";

      case "Shôjo":
        return "#ec87c0";

      case "Shôjo Ai":
        return "#d770ad";

      case "Shônen":
        return "#4a89dc";

      case "Sport":
        return "#7db1b1";

      case "Super Pouvoir":
        return "#ed5565";

      case "Thriller":
        return "#5d9cec";

      case "Tranche de vie":
        return "#2ecc71";

      case "Yaoi":
        return "#e0c341";

      case "Yuri":
        return "#fc6e51";

      case "Surnaturel":
        return "#ff9800";

      default:
        return "black";
    }
  }

  return (
    <View
      style={{
        backgroundColor: color(),
        margin: 5,
        padding: 5,
        borderRadius: 5,
      }}
    >
      <Text style={{ color: "white" }}>{genre}</Text>
    </View>
  );
}

export default Genre;
