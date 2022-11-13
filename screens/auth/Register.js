import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import DropDown from "../../component/DropDown";
import languageRegister from "../../language/language.register";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { useDimensions } from "@react-native-community/hooks";

const language = "SIN";

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
const Register = ({ navigation }) => {

  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItem2, setSelectedItem2] = useState(null);

  const onSelect = (item) => {
    setSelectedItem(item);
  };

  const onSelect1 = (item) => {
    setSelectedItem2(item);
  };

  const [targetDate, setTargetDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setTargetDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const getFormattedDate = (dateObj) => {
    return moment(dateObj).format("YYYY-MM-DD");
  };

  return (
    <ScrollView>
      <View
        style={{
          ...styles.container,
          minHeight:
            useDimensions().screen.height -
            StatusBar.currentHeight -
            10,
        }}
      >
        <Text style={styles.header}>{languageRegister.SIGN_UP[language]}</Text>
        <View style={styles.pointsContainer}>
          <View style={styles.formInput}>
            <Text style={styles.text}>{languageRegister.NAME[language]}</Text>
            <TextInput
              style={styles.textInput}
              placeholder={languageRegister.NAME[language]}
            />
          </View>

          <View style={styles.formInput}>
            <Text style={styles.text}>
              {languageRegister.APARTMENT[language]}
            </Text>
            {/* <TextInput style={styles.textInput} placeholder={languageRegister.APARTMENT[language]} /> */}
            <DropDown
              title={languageRegister.APARTMENT[language]}
              value={selectedItem}
              data={data}
              onSelect={onSelect}
            />
          </View>

          <View style={styles.formInput}>
            <Text style={styles.text}>{languageRegister.HOME[language]}</Text>
            {/* <TextInput style={styles.textInput} placeholder={languageRegister.HOME[language]} secureTextEntry={true}/> */}
            <DropDown
              title={languageRegister.HOME[language]}
              value={selectedItem2}
              data={data}
              onSelect={onSelect1}
            />
          </View>

          <View style={styles.formInput} onPress={showDatepicker}>
            <Text style={styles.text}>
              {languageRegister.BIRTHDAY[language]}
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder={languageRegister.BIRTHDAY[language]}
              secureTextEntry={true}
            />
            {show && (
              <DateTimePicker
                value={targetDate}
                mode={"date"}
                onChange={onDateChange}
              />
            )}
          </View>
          <View style={styles.formInput}>
            <Text style={styles.text}>
              {languageRegister.PASSWORD[language]}
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder={languageRegister.PASSWORD[language]}
              secureTextEntry={true}
            />
          </View>

          <View style={styles.formInput}>
            <Text style={styles.text}>
              {languageRegister.CONFIRM_PASSWORD[language]}
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder={languageRegister.CONFIRM_PASSWORD[language]}
              secureTextEntry={true}
            />
          </View>

          <View style={styles.formInput}>
            <TouchableOpacity
              style={styles.defaultButton}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text
                style={{ textAlign: "center", fontSize: 16, color: "#fff" }}
              >
                {languageRegister.SIGN_UP[language]}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.formInput}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={styles.needAccount}>
                {languageRegister.NEED_ACCOUNT[language]}
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
    paddingTop: 20,
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 20,
    paddingRight: 20,
  },
  defaultBg: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  formInput: {
    marginTop: 5,
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
    padding: 5,
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
  forgetpassword: {
    color: "#db2218",
    textAlign: "right",
    fontSize: 16,
    fontWeight: "bold",
  },
  line: {
    height: 1,
    backgroundColor: "#ddd",
    width: "100%",
  },
  needAccount: {
    color: "#40916C",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Register;
