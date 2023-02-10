import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import themeContext from "../../../config/themeContext";
import Section from "../../Accueil/Helpers/Section";

export default function PersonnageDetails({ route }) {
  const theme = useContext(themeContext);
  const relation = () => {
    if (item.anime) {
      return <Section title="Relations" data={item.anime} />;
    }
    return;
  };
  const item = route.params.item;
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: theme.backgroundColor,
      }}
    >
      <View
        style={{
          backgroundColor: theme.backgroundColor,
          height: 60,
          width: Dimensions.get("window").width,
          justifyContent: "center",
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: theme.header.backgroundColor,

            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 25,
              fontFamily: "Poppins-ExtraBold",
              color: theme.color,
            }}
          >
            {item.noms.prenom} {item.noms.nom}
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 200,
          backgroundColor: theme.textInput.background,

          borderRadius: 5,
          margin: 5,
          marginTop: 10,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 0.6,
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              position: "absolute",
              height: 200,
              width: 135,
              resizeMode: "stretch",
              borderRadius: 5,
            }}
            source={{ uri: item.image }}
          />
        </View>
        <ScrollView
          nestedScrollEnabled={true}
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              color: theme.color,
              margin: 5,
            }}
          >
            {item.biographie}
          </Text>
        </ScrollView>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: theme.textInput.background,
          margin: 5,
          borderRadius: 5,
        }}
      >
        {relation()}
      </View>
    </ScrollView>
  );
}
