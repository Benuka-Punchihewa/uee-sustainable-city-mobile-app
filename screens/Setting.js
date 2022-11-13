import { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import languageSetting from "../language/language.setting";
import { useDimensions } from "@react-native-community/hooks";
import { useSelector } from "react-redux";
import DropDown from "../component/DropDown";
import constants from "../constants";
import Button from "../component/Button";

let data = [
  {
    id: 1,
    name: "English",
  },
  {
    id: 2,
    name: "සිංහල",
  },
];

const Setting = ({ navigation }) => {
  const language = useSelector((state) => state.language.language);
  const [selectedItem, setSelectedItem] = useState(null);

  const onSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <ScrollView>
      <View
        style={{
          ...styles.container,
          minHeight:
            useDimensions().screen.height - StatusBar.currentHeight - 10,
        }}
      >
        <Text style={styles.title}>{languageSetting.SETTING[language]}</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>
            {languageSetting.SELECT_LANGUAGE[language]}
          </Text>
          <DropDown value={selectedItem} data={data} onSelect={onSelect} />
        </View>
        <View style={styles.btnContainer}>
          <Button
            type={constants.BUTTON_TYPES.OUTLINED}
            title={languageSetting.LOGOUT[language]}
            // onPress={hanclePost}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingBottom: 16,
  },
  inputContainer: {
    marginBottom: 25,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  txtInputContainer: {
    height: 48,
    paddingHorizontal: 20,
    backgroundColor: "#D9D9D9",
    borderRadius: 8,
  },
  btnContainer: {
    flexDirection: "column-reverse",
    justifyContent: "flex-end",
    marginTop: 420,
    marginBottom: 10,
  },
});

export default Setting;
