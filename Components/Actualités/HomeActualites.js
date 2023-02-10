import React, { useContext, useState } from "react";
import { View, Text, Dimensions, FlatList } from "react-native";
import themeContext from "../../config/themeContext";
import { Actualites } from "../../api/apiRequest";
import { ActualitesCard } from "./Helpers/ActualitesCard";
import { HamburgerRotation } from "../../Animation/hamburgerRotation";

export function HomeActualites({ navigation }) {
  const theme = useContext(themeContext);
  const [data, setData] = useState();
  Actualites().then(({ data }) => setData(data.Page.Actualites));
  return (
    <View style={{ flex: 1, backgroundColor: theme.header.backgroundColor }}>
      <View
        style={{
          flexDirection: "row",
          paddingTop: 8,
          backgroundColor: theme.textInput.background,
        }}
      >
        <HamburgerRotation navigation={navigation} />

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <Text
            style={{
              color: theme.color,
              textAlign: "center",
              fontFamily: "Poppins-ExtraBold",
              fontSize: 25,
            }}
          >
            Actualités
          </Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ActualitesCard item={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
}
