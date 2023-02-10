import React, { useContext } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import themeContext from "../../../config/themeContext";

export default function PersonnageComponent({ navigation, item }) {
  const theme = useContext(themeContext);
  function description(desc) {
    if (desc) {
      return desc;
    } else {
      return "Aucune biographie";
    }
  }
  return (
    <TouchableOpacity
      style={{
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: theme.textInput.background,
        flex: 1,
        flexDirection: "row",
      }}
      onPress={() => {
        navigation.navigate("PersonnageDetails", { item: item });
      }}
    >
      <View
        style={{
          flexDirection: "column-reverse",

          borderRadius: 10,
          width: 135,
          height: 200,
        }}
      >
        <Image
          style={{
            position: "absolute",
            height: 200,
            width: 135,
            resizeMode: "cover",
            borderRadius: 5,
          }}
          source={{ uri: item.image }}
        />
      </View>
      <View
        style={{
          marginLeft: 5,
          flex: 1,
          flexDirection: "column",
        }}
      >
        <View
          style={{
            alignSelf: "center",
          }}
        >
          <Text
            numberOfLines={1}
            style={{
              color: theme.color,
              fontFamily: "Poppins-ExtraBold",
              margin: 10,
            }}
          >
            {item.noms.prenom} {item.noms.nom}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            marginLeft: 5,
            alignSelf: "center",
          }}
        >
          <Text
            numberOfLines={8}
            style={{
              color: theme.color,
              fontFamily: "Poppins-Light",
              fontStyle: "italic",
              margin: 5,
            }}
          >
            {description(item.biographie)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
