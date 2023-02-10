import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import themeContext from "../../config/themeContext";
import LinearGradient from "react-native-linear-gradient";
import Section from "./Helpers/Section";
import {
  animeRequest,
  searchSeason,
  seasonAnimeRequest,
  tendanceRequest,
} from "../../api/apiRequest";

import { HamburgerRotation } from "../../Animation/hamburgerRotation";
let charged = false;

const Home = ({ navigation }) => {
  const theme = useContext(themeContext);
  const [saison, setSaison] = useState([]);
  const [latest, setLatest] = useState([]);
  const [tendanceAnime, setTendanceAnime] = useState([]);
  useEffect(() => {
    if (!charged) {
      charged = true;
      init();
    }
  });

  function init() {
    const randomise = random();
    seasonAnimeRequest(searchSeason()).then(({ data }) => {
      setSaison(data.Page.Animes);
    });
    animeRequest(randomise).then(({ data }) => {
      setLatest(data.Page.Animes);
    });
  }
  tendanceRequest().then(({ data }) => {
    setTendanceAnime(data.Page.Animes);
  });
  function random() {
    const num = Math.floor(Math.random() * 26);
    const num2 = Math.floor(Math.random() * 26);
    const letter = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    return letter[num] + letter[num2];
  }
  return (
    <View style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
      <ScrollView>
        <Image
          style={{
            width: Dimensions.get("screen").width,
            height: 250,
            resizeMode: "cover",
          }}
          source={{ uri: "https://wallpaperaccess.com/full/21593.jpg" }}
        />
        <LinearGradient colors={theme.gradient} style={styles.linearGradient} />

        <View style={{ flex: 1, flexDirection: "column" }}>
          <View style={{ flex: 1 }}>
            <Section
              title="Cette saison"
              data={saison}
              navigation={navigation}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Section
              title="Animé aléatoire"
              data={latest}
              navigation={navigation}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Section
              title="Top 10"
              data={tendanceAnime}
              navigation={navigation}
            />
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          flexDirection: "row",
          marginTop: 10,
          marginLeft: 10,
        }}
      >
        <HamburgerRotation navigation={navigation} />
      </View>
    </View>
  );
};

var styles = StyleSheet.create({
  linearGradient: {
    position: "absolute",
    width: Dimensions.get("screen").width,
    paddingTop: 250,
  },
  textInput: {
    width: 250,
    paddingTop: 15,
    borderRadius: 5,
  },
});

export default Home;
