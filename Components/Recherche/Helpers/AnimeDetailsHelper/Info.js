import React, { useContext } from "react";
import { View, Text, Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import themeContext from "../../../../config/themeContext";
import Genre from "./GenreButton";

export default function Info({ info1, info2, info3, flatlistData }) {
  const theme = useContext(themeContext);
  const showInfo1 = () => {
    if (info1) {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
          }}
        >
          <View
            style={{ flex: 1, width: Dimensions.get("window").width / 3.5 }}
          >
            <Text
              style={{ fontFamily: "Poppins-ExtraBold", color: theme.color }}
            >
              {info1.title}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              maxWidth: Dimensions.get("window").width / 3.5,
              marginRight: 5,
            }}
          >
            <Text style={{ fontFamily: "Poppins-Light", color: theme.color }}>
              {info1.data
                ? info1.data != "null null null"
                  ? info1.data
                  : "Aucune information"
                : "Aucune information"}
            </Text>
          </View>
        </View>
      );
    }
  };
  const showInfo2 = () => {
    if (info2) {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
          }}
        >
          <View
            style={{ flex: 1, width: Dimensions.get("window").width / 3.5 }}
          >
            <Text
              style={{ fontFamily: "Poppins-ExtraBold", color: theme.color }}
            >
              {info2.title}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              maxWidth: Dimensions.get("window").width / 3.5,

              marginRight: 5,
            }}
          >
            <Text style={{ fontFamily: "Poppins-Light", color: theme.color }}>
              {info2.data ? info2.data : "Aucune information"}
            </Text>
          </View>
        </View>
      );
    }
  };
  const showInfo3 = () => {
    if (info3) {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
          }}
        >
          <View
            style={{ flex: 1, width: Dimensions.get("window").width / 3.5 }}
          >
            <Text
              style={{ fontFamily: "Poppins-ExtraBold", color: theme.color }}
            >
              {info3.title}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              maxWidth: Dimensions.get("window").width / 3.5,
              marginRight: 5,
            }}
          >
            <Text style={{ fontFamily: "Poppins-Light", color: theme.color }}>
              {info3.data
                ? info3.data != "null null null"
                  ? info3.data
                  : "Aucune information"
                : "Aucune information"}
            </Text>
          </View>
        </View>
      );
    }
  };

  const showInfoFlatlist = () => {
    if (flatlistData) {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
          }}
        >
          <View
            style={{ flex: 1, width: Dimensions.get("window").width / 3.5 }}
          >
            <Text
              style={{ fontFamily: "Poppins-ExtraBold", color: theme.color }}
            >
              {flatlistData.title}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <FlatList
              style={{ flex: 1 }}
              horizontal={true}
              nestedScrollEnabled={true}
              keyExtractor={(item, index) => index}
              data={flatlistData.data}
              renderItem={({ item }) => {
                return <Genre genre={item} />;
              }}
            />
          </View>
        </View>
      );
    }
  };
  const showInfo = () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        <View style={{ marginVertical: 5 }}>{showInfo1()}</View>
        <View style={{ marginVertical: 5 }}>{showInfo2()}</View>
        <View style={{ marginVertical: 5 }}>{showInfo3()}</View>
        <View>{showInfoFlatlist()}</View>
      </View>
    );
  };
  return showInfo();
}
