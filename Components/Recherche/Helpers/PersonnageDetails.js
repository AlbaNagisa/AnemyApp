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
import { Name } from "./PersonnageDetailsHelpers/Name";

export default function PersonnageDetails({ route, navigation }) {
  const theme = useContext(themeContext);
  const relation = () => {
    if (item.anime) {
      return (
        <Section title="Relations" data={item.anime} navigation={navigation} />
      );
    }
    return;
  };
  const alternatifs = () => {
    if (item.noms.alternatifs?.length === 0) {
      return <Name title="Alternatif" data={item.noms.alternatifs} />;
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
          backgroundColor: theme.textInput.background,
          borderRadius: 10,
          margin: 10,
          padding: 10,
          flexDirection: "column",
          flex: 1,
        }}
      >
        <View style={{ flex: 1, flexDirection: "column" }}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                height: 200,
                width: 135,
                flexDirection: "column",
              }}
            >
              <Image
                style={{
                  height: 200,
                  width: 135,
                  resizeMode: "stretch",
                  borderRadius: 5,
                }}
                source={{ uri: item.image }}
              />
            </View>

            <View
              style={{
                flex: 1,
                marginLeft: 10,
              }}
            >
              <Name title={"Prénom"} data={item.noms.prenom} />
              <Name title={"Nom"} data={item.noms.nom} />
              <Name title={"Alternatifs"} data={item.noms.alternatifs} />
              <Name title={"Natif"} data={item.noms.natif} />
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <ScrollView
              nestedScrollEnabled={true}
              style={{
                flex: 1,
                marginTop: 5,
                maxHeight: 100,
              }}
            >
              <Text
                style={{
                  color: theme.color,
                }}
              >
                {item.biographie}
              </Text>
            </ScrollView>
          </View>
        </View>
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
