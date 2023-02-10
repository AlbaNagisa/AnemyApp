import React, { useContext } from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import themeContext from "../../../config/themeContext";
import FlatListAnime from "./FlatListAnime";

export default function Section({ title, data, navigation, anime = true }) {
  const theme = useContext(themeContext);
  function showFlatlist() {
    if (data === null || data === undefined || data?.length === 0) {
      return (
        <Text style={{ fontFamily: "Poppins-ExtraBold", color: theme.color }}>
          Aucune information
        </Text>
      );
    }
    return (
      <FlatListAnime
        data={data}
        horizontal={true}
        navigation={navigation}
        anime={anime}
      />
    );
  }
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text
          style={[
            styles.title,
            {
              color: theme.color,
            },
          ]}
        >
          {title}
        </Text>
      </View>
      <View style={{ marginBottom: 10, marginLeft: 5 }}>{showFlatlist()}</View>
    </View>
  );
}
const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 20,
    marginLeft: 10,
  },
  title: {
    fontSize: 25,
    fontFamily: "Poppins-ExtraBold",
  },
});
