import React, { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import {
  animeRequest,
  characterRequest,
  staffRequest,
} from "../../api/apiRequest";
import themeContext from "../../config/themeContext";
import PersonnageComponent from "./Helpers/PersonnageComponent";
import AnimeComponent from "./Helpers/Anime";
import StaffComponent from "./Helpers/StaffComponent";
import { HamburgerRotation } from "../../Animation/hamburgerRotation";

async function searchAnime(title, setLoading) {
  setLoading(true);
  let item = "";
  await animeRequest(title).then(async ({ data }) => {
    item = await data.Page.Animes;

    setLoading(false);
  });

  return item;
}
async function searchCharacter(name, setLoading) {
  setLoading(true);

  let item = "";
  await characterRequest(name).then(({ data }) => {
    item = data.Page.Personnages;
    setLoading(false);
  });
  return item;
}
async function searchStaff(title, setLoading) {
  setLoading(true);
  let item = "";
  await staffRequest(title).then(async ({ data }) => {
    item = await data.Page.Staffs;

    setLoading(false);
  });

  return item;
}

async function fetchData(title, setData, value, setLoading, setSearched) {
  if (value === "anime") {
    let item = await searchAnime(title, setLoading);
    await setData(item);
    if (item.length === 0) {
      setSearched(true);
    }
    return item;
  }
  if (value === "personnage") {
    let item = await searchCharacter(title, setLoading);
    await setData(item);
    if (item.length === 0) {
      setSearched(true);
    }
    return item;
  }
  if (value === "staff") {
    let item = await searchStaff(title, setLoading);
    await setData(item);
    if (item.length === 0) {
      setSearched(true);
    }
    return item;
  }
}
export default function Search({ route, navigation }) {
  const theme = useContext(themeContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("anime");
  const [searched, setSearched] = useState(false);
  const [items, setItems] = useState([
    { label: "Anime", value: "anime" },
    { label: "Personnage", value: "personnage" },
    { label: "Staff", value: "staff" },
  ]);

  const setSearchMode = (v) => {
    setValue(v);
    setData([]);
    setSearched(false);
    setTitle("");
  };
  function showLoading() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator
          color={theme.color}
          size={"large"}
          style={{ justifyContent: "center", alignSelf: "center" }}
        />
      </View>
    );
  }
  function showFlatlist() {
    if (value === "anime") {
      if (searched) {
        return (
          <View style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
            <Text style={{ color: "white" }}>Aucun résultat</Text>
          </View>
        );
      }
      return (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          style={{ flex: 1, backgroundColor: theme.backgroundColor }}
          renderItem={({ item, index }) => {
            return <AnimeComponent item={item} navigation={navigation} />;
          }}
        />
      );
    }
    if (value === "personnage") {
      if (searched) {
        return (
          <View style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
            <Text style={{ color: "white" }}>Aucun résultat</Text>
          </View>
        );
      }
      return (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          style={{ flex: 1, backgroundColor: theme.backgroundColor }}
          renderItem={({ item, index }) => {
            return <PersonnageComponent item={item} navigation={navigation} />;
          }}
        />
      );
    }
    if (value === "staff") {
      if (searched) {
        return (
          <View style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
            <Text style={{ color: "white" }}>Aucun résultat</Text>
          </View>
        );
      }
      return (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          style={{ flex: 1, backgroundColor: theme.backgroundColor }}
          renderItem={({ item, index }) => {
            return <PersonnageComponent item={item} navigation={navigation} />;
          }}
        />
      );
    }
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.backgroundColor,
        flexDirection: "column-reverse",
      }}
    >
      <View style={{ flex: 12, backgroundColor: theme.backgroundColor }}>
        {loading ? showLoading() : showFlatlist()}
      </View>
      <View style={{ margin: 5, marginHorizontal: 5, flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            paddingTop: 8,
            marginHorizontal: 5,
            backgroundColor: theme.backgroundColor,
          }}
        >
          <HamburgerRotation navigation={navigation} />
          <View style={{ flex: 1.2 }}>
            <TextInput
              style={[
                styles.textInput,
                {
                  backgroundColor: theme.textInput.background,
                  color: theme.color,
                  fontFamily: "Poppins-ExtraBold",
                },
              ]}
              placeholder="Recherche"
              placeholderTextColor={theme.placeHolderColor}
              onChangeText={(t) => {
                if (t.length === 0) {
                  setTitle("");
                } else {
                  setTitle(t);
                }
              }}
              onEndEditing={async () => {
                if (title != "") {
                  setSearched(false);
                  await fetchData(
                    title,
                    setData,
                    value,
                    setLoading,
                    setSearched
                  );
                }
              }}
            >
              {title}
            </TextInput>
          </View>
          <View style={{ flex: 1 }}>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setSearchMode}
              setItems={setItems}
              theme={theme.theme.toUpperCase()}
              disabledItemLabelStyle={{
                opacity: 0.5,
              }}
              style={{
                marginLeft: 5,
                borderColor: "rgba(0,0,0,0)",
                backgroundColor: theme.textInput.background,
              }}
              dropDownContainerStyle={{
                backgroundColor: theme.backgroundColor,
              }}
              textStyle={{
                fontFamily: "Poppins-ExtraBold",
                color: theme.color,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
var styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
  },
});
