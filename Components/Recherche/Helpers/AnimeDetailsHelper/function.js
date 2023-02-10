import React, { useContext } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import themeContext from "../../../../config/themeContext";

export function licence(licence) {
  const theme = useContext(themeContext);
  if (licence === "Non Renseigné") {
    return (
      <View style={{ flex: 1.5, marginLeft: 5 }}>
        <Text
          style={{
            textAlign: "center",
            fontFamily: "Poppins-Light",
            color: theme.color,
          }}
        >
          Non licencié en France
        </Text>
      </View>
    );
  } else if (licence === "Crunchyroll") {
    return (
      <View style={{ flex: 1.5, marginLeft: 5 }}>
        <Text
          style={{
            textAlign: "center",
            fontFamily: "Poppins-Light",
            color: theme.color,
          }}
        >
          Licencié chez {licence} en France
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Image
            style={style.crunchyroll}
            source={{
              uri: "https://logos-world.net/wp-content/uploads/2021/02/Crunchyroll-Emblem.png",
            }}
          />
        </View>
      </View>
    );
  } else if (licence === "Netflix") {
    return (
      <View style={{ flex: 1.5, marginLeft: 5 }}>
        <Text
          style={{
            textAlign: "center",
            fontFamily: "Poppins-Light",
            color: theme.color,
          }}
        >
          Licencié chez {licence} en France
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Image
            style={style.image1}
            source={{
              uri: "https://cdn.anemy.fr/licence/netflix.png",
            }}
          />
        </View>
      </View>
    );
  } else if (licence === "ADN") {
    return (
      <View style={{ flex: 1.5, marginLeft: 5 }}>
        <Text
          style={{
            textAlign: "center",
            fontFamily: "Poppins-Light",
            color: theme.color,
          }}
        >
          Licencié chez {licence} en France
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Image
            style={style.adn}
            source={{
              uri: "https://www.spliiit.com/img/subscription/adn.png",
            }}
          />
        </View>
      </View>
    );
  } else if (licence === "Wakanim") {
    return (
      <View style={{ flex: 1.5, marginLeft: 5, maxHeight: 200 }}>
        <Text
          style={{
            textAlign: "center",
            fontFamily: "Poppins-Light",
            color: theme.color,
          }}
        >
          Licencié chez {licence} en France
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Image
            resizeMethod="scale"
            style={style.wakanim}
            source={{
              uri: "https://cdn.anemy.fr/licence/wakanim.png",
            }}
          />
        </View>
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1.5, marginLeft: 5 }}>
        <Text
          style={{
            textAlign: "center",
            fontFamily: "Poppins-Light",
            color: theme.color,
          }}
        >
          Licencié chez {licence} en France
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <ActivityIndicator
            style={{ flex: 1, justifyContent: "center" }}
            size="large"
            color="#0d1b2b"
          />
          {console.log("Chercher image compatible pour : " + licence)}
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  wakanim: {
    marginTop: 5,
    borderRadius: 5,
    height: Dimensions.get("screen").height / 15,
    resizeMode: "stretch",
  },
  image1: {
    marginTop: 5,
    borderRadius: 5,
    height: 125,
    resizeMode: "stretch",
  },
  crunchyroll: {
    height: Dimensions.get("screen").height / 6,
    resizeMode: "stretch",
  },
  adn: {
    marginTop: 5,
    height: Dimensions.get("screen").height / 8,
    resizeMode: "stretch",
  },
});
