import React from "react";
import { FlatList } from "react-native";
import AnimeCard from "./AnimeCard";
import PersonnageCard from "./PersonnageCard";
export default function FlatListAnime({ data, horizontal, navigation, anime }) {
  if (anime) {
    return (
      <FlatList
        data={data}
        horizontal={horizontal}
        renderItem={({ item }) => (
          <AnimeCard item={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
      />
    );
  }
  return (
    <FlatList
      data={data}
      horizontal={horizontal}
      renderItem={({ item }) => (
        <PersonnageCard item={item} navigation={navigation} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
}
