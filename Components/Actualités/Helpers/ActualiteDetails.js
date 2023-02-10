import React, { useContext } from "react";
import {
  View,
  Dimensions,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import themeContext from "../../../config/themeContext";
import { BackArrow } from "../../Tools/BackArrow";

export const ActualiteDetails = ({ route }) => {
  const theme = useContext(themeContext);
  const item = route.params.item;
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
              {item.titre}
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
          <View
            style={[
              styles.container,
              {
                backgroundColor: theme.textInput.background,
                flexDirection: "column",
              },
            ]}
          >
            <Image
              style={{ resizeMode: "contain", height: 300, width: 300 }}
              source={{ uri: item.images.image }}
            />
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
            ></View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

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
