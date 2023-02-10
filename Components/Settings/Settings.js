import React, { useState, useContext } from "react";
import { View, Switch } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "../../config/themeContext";

const Settings = ({ navigation }) => {
  const theme = useContext(themeContext);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(theme.theme);
  const [items, setItems] = useState([
    { label: "Light", value: "light" },
    { label: "Dark", value: "dark" },
    { label: "Xmas", value: "xmas", disabled: true },
  ]);
  const setTheme = (v) => {
    setValue(v);
    navigation.navigate("Home");
    return EventRegister.emit("changeTheme", v);
  };
  return (
    <View>
      <View style={{ margin: 50, backgroundColor: theme.backgroundColor }}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setTheme}
          setItems={setItems}
          theme={
            theme.theme.toUpperCase() != ("DARK" || "LIGHT")
              ? "LIGHT"
              : theme.theme.toUpperCase()
          }
          disabledItemLabelStyle={{
            opacity: 0.5,
          }}
          dropDownContainerStyle={{
            backgroundColor: theme.backgroundColor,
          }}
          textStyle={{
            color:
              theme.theme.toUpperCase() != ("DARK" || "LIGHT")
                ? "#000"
                : theme.color,
          }}
        />
      </View>
    </View>
  );

  /* const theme = useContext(themeContext);
  const [mode, setMode] = useState(theme.theme === "dark");
  return (
    <View style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
      <Switch
        style={{ alignSelf: "center" }}
        value={mode}
        onValueChange={(value) => {
          setMode(value);
          EventRegister.emit("changeTheme", value);
        }}
      />
    </View>
  ); */
};

export default Settings;
