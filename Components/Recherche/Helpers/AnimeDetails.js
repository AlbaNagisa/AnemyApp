import React, { useContext, useState, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import themeContext from "../../../config/themeContext";
import Section from "../../Accueil/Helpers/Section";
import Youtube from "react-native-youtube";
import { regex } from "../../../api/apiRequest";
import { licence } from "../Helpers/AnimeDetailsHelper/function.js";
import Info from "./AnimeDetailsHelper/Info";
import { BackArrow } from "../../Tools/BackArrow";
export default function AnimeDetails({ route, navigation }) {
  const theme = useContext(themeContext);
  const item = route.params.item;
  const [youtubeObject, setYoutubeObject] = useState({
    isReady: false,
    status: null,
    quality: null,
    error: null,
    isPlaying: false,
    isLooping: true,
    duration: 0,
    currentTime: 0,
    clicked: false,
    fullscreen: false,
    height: 200,
    playerWidth: Dimensions.get("window").width,
  });
  const banner = () => {
    if (item.images?.banniere) {
      return (
        <Image
          source={{ uri: item.images.banniere }}
          style={{
            height: Dimensions.get("screen").height / 8,
            resizeMode: "cover",
            borderRadius: 10,
            margin: 10,
          }}
          resizeMethod={"auto"}
        />
      );
    }
  };
  const showYoutube = () => {
    if (youtubeObject.clicked) {
      return (
        <Youtube
          apiKey="AIzaSyDJF2NBd8b3ZH4aUfmyCaNOF0rjJzlN89E"
          videoId={item.trailer.youtube_id}
          play={youtubeObject.isPlaying}
          onReady={() =>
            setYoutubeObject({
              fullscreen: true,
              isPlaying: true,
              clicked: true,
            })
          }
          fullscreen={youtubeObject.fullscreen}
          onError={(e) => {
            if (e.error === "UNAUTHORIZED_OVERLAY") {
              setYoutubeObject({
                fullscreen: false,
                isPlaying: false,
                clicked: false,
              });
            } else {
              Linking.openURL(
                "https://youtube.com/watch?v=" + item.trailer.youtube_id
              );
              setYoutubeObject({
                fullscreen: false,
                isPlaying: false,
                clicked: false,
              });
            }
          }}
          style={[
            {
              height: 200,
            },
            styles.player,
          ]}
        />
      );
    }
  };

  const description = () => {
    if (item?.description) {
      return (
        <View
          style={{
            marginTop: 10,
            maxHeight: Dimensions.get("screen").height / 6,
          }}
        >
          <ScrollView
            nestedScrollEnabled={true}
            style={{
              paddingLeft: 10,
              maxHeight: Dimensions.get("screen").height / 6,
            }}
          >
            <Text style={{ color: theme.color, fontFamily: "Poppins-Light" }}>
              {regex(item.description)}
            </Text>
          </ScrollView>
        </View>
      );
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          maxHeight: Dimensions.get("screen").height / 16,
          flex: 1,
          backgroundColor: theme.textInput.background,
        }}
      >
        <View
          style={{
            alignSelf: "center",
            maxWidth: Dimensions.get("screen").width / 1.1,
            flex: 1,
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 0.1 }}>
            <BackArrow />
          </View>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text
              style={{
                fontFamily: "Poppins-ExtraBold",
                color: theme.color,
                textAlign: "center",
                fontSize: 18,
              }}
            >
              {item.noms.romaji}
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
          {banner()}
          <View
            style={[
              styles.container,
              {
                backgroundColor: theme.textInput.background,
                flexDirection: "column",
              },
            ]}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={{ height: 200, width: 135, borderRadius: 10 }}>
                <Image
                  source={{ uri: item.images.affiche }}
                  resizeMode={"stretch"}
                  resizeMethod={"auto"}
                  style={{ height: 200, width: 135, borderRadius: 10 }}
                />
              </View>
              {licence(item.licence)}
            </View>
            {description()}
          </View>
          <View
            style={[
              styles.container,
              {
                backgroundColor: theme.textInput.background,
              },
            ]}
          >
            <View
              style={{
                justifyContent: "space-between",
                flex: 1,
                flexDirection: "column",
              }}
            >
              <Info
                info1={{ title: "Romaji", data: item.noms.romaji }}
                info2={{ title: "Anglais", data: item.noms.anglais }}
                info3={{ title: "Natif", data: item.noms.natif }}
              />
              <Info
                info1={{ title: "Format", data: item.format }}
                info2={{ title: "Statut", data: item.statut }}
                info3={{ title: "Episodes", data: item.episodes }}
              />
              <Info
                info1={{
                  title: "Date de sortie",
                  data: `${item.date_debut.jour} ${item.date_debut.mois} ${item.date_debut.annee}`,
                }}
                info2={{ title: "Durée", data: item.duree }}
                info3={{
                  title: "Date de fin",
                  data: `${item.date_fin.jour} ${item.date_fin.mois} ${item.date_fin.annee}`,
                }}
              />
              <Info
                info1={{
                  title: "Studio",
                  data: item.studios.map((v) => v.nom).join(", "),
                }}
                info2={{ title: "Pays", data: item.pays }}
                info3={{ title: "Saison", data: item.saison.saison }}
              />
              <Info
                info1={{
                  title: "Statut",
                  data: item.statut,
                }}
                info2={{ title: "Hashtag", data: item.hashtag }}
                info3={{ title: "Hentai", data: item.hentai ? "Oui" : "Non" }}
              />
              <Info flatlistData={{ title: "Genres", data: item.genres }} />
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setYoutubeObject({
                    clicked: true,
                  });
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Icon name="youtube" color={theme.color} size={50} />
                  <Text
                    style={{
                      color: theme.color,
                      fontFamily: "Poppins-Light,",
                      fontSize: 50,
                    }}
                  >
                    Trailer
                  </Text>
                </View>
              </TouchableOpacity>
              {showYoutube()}
            </View>
          </View>
          <View
            style={[
              styles.container,
              {
                backgroundColor: theme.textInput.background,
                flexDirection: "column",
              },
            ]}
          >
            <Section
              title={"Personnages"}
              data={item.personnages}
              navigation={navigation}
              anime={false}
            />
            <Section
              title={"Staffs"}
              data={null}
              navigation={navigation}
              anime={false}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  player: {
    alignSelf: "stretch",
    marginVertical: 10,
  },
});
