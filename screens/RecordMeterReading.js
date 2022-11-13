import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  StatusBar,
} from "react-native";
import DropDown from "../component/DropDown";
import languageRecordMeterReading from "../language/language.RecordMeterReading";
import { useDimensions } from "@react-native-community/hooks";
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";

let data = [
  {
    id: 1,
    name: "A/425/31",
  },
  {
    id: 2,
    name: "A/325/31",
  },
  {
    id: 3,
    name: "A/225/30",
  },
];

//Register screen
const RecordMeterReading = ({ navigation }) => {
  const language = useSelector((state) => state.language.language);

  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItem2, setSelectedItem2] = useState(null);

  const onSelect = (item) => {
    setSelectedItem(item);
  };

  const onSelect1 = (item) => {
    setSelectedItem2(item);
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
        <View style={styles.wrapper}>
          <Text style={styles.PageTitle}>
            {languageRecordMeterReading.CURRENT_READING[language]}
          </Text>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
              <Icon name="ios-settings-outline" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </Text>

        <View style={styles.formInput}>
          <Text>{languageRecordMeterReading.APARTMENT[language]}</Text>
          {/* <TextInput style={styles.textInput} placeholder={languageRegister.APARTMENT[language]} /> */}
          <DropDown
            title={languageRecordMeterReading.APARTMENT[language]}
            value={selectedItem}
            data={data}
            onSelect={onSelect}
          />
        </View>

        <View style={styles.formInput}>
          <Text>{languageRecordMeterReading.HOME_ID[language]}</Text>
          {/* <TextInput style={styles.textInput} placeholder={languageRegister.HOME[language]} secureTextEntry={true}/> */}
          <DropDown
            title={languageRecordMeterReading.HOME_ID[language]}
            value={selectedItem2}
            data={data}
            onSelect={onSelect1}
          />
        </View>

        <View style={styles.pointsContainer}>
          <View style={styles.formInput}>
            <Text>{languageRecordMeterReading.CURRENT_READING[language]}</Text>
            <TextInput
              style={styles.textInput}
              placeholder={languageRecordMeterReading.CURRENT_READING[language]}
            />
          </View>

          <View style={styles.formInput}>
            <TouchableOpacity
              style={styles.defaultButton}
              onPress={() => {
                navigation.navigate("ElectricityBills");
              }}
            >
              <Text
                style={{ textAlign: "center", fontSize: 16, color: "#fff" }}
              >
                {languageRecordMeterReading.PROCEED[language]}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.formInput}>
            <View style={styles.line}></View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  wrapper: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  defaultBg: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  formInput: {
    marginTop: 10,
    padding: 5,
  },
  textInput: {
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#a7a7a7",
    borderRadius: 10,
  },
  defaultButton: {
    padding: 15,
    backgroundColor: "#40916C",
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    color: "black",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  header: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 30,
    fontWeight: "bold",
    paddingVertical: 20,
  },
  main: {
    padding: 20,
    backgroundColor: "#fff",
  },
  loginbutton: {
    textAlign: "center",
    fontSize: 16,
    color: "#fff",
  },
  PageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  line: {
    height: 1,
    backgroundColor: "#ddd",
    width: "100%",
  },
  needAccount: {
    color: "#14b53f",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RecordMeterReading;
