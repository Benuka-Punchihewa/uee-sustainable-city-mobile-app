import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import languageMainHome from "../language/language.MainHome";
import Button from "../component/Button";
import constants from "../constants";
import { useDimensions } from "@react-native-community/hooks";
import { useSelector } from "react-redux";

//Splash screen
const GetStarted = ({ navigation }) => {
  const language = useSelector((state) => state.language.language);

  return (
    <ScrollView>
      <View
        style={{
          ...styles.container,
          minHeight:
            useDimensions().screen.height - StatusBar.currentHeight - 10,
        }}
      >
        <View style={styles.pointsContainer}>
          <View style={styles.ImgContainer}>
            <Image
              style={{ width: 275, height: 300 }}
              source={require("../assets/images/home.png")}
            />
          </View>

          <Text style={styles.header}>
            {languageMainHome.WELCOME[language]}
          </Text>

          <Button
            type={constants.BUTTON_TYPES.FILLED}
            title={languageMainHome.SIGN_IN[language]}
            onPress={() => navigation.navigate("Login")}
          />

          <View style={styles.formInput}>
            <Text style={styles.needAccount}>
              {languageMainHome.NEED_ACCOUNT[language]}
            </Text>
          </View>

          <View style={styles.formInput}>
            <View style={styles.line}></View>
          </View>

          <Button
            type={constants.BUTTON_TYPES.OUTLINED}
            title={languageMainHome.SIGN_UP[language]}
            onPress={() => navigation.navigate("Register")}
          />
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
  formInput: {
    marginTop: 5,
    padding: 5,
  },
  defaultButton: {
    padding: 15,
    backgroundColor: "#40916C",
    borderRadius: 10,
  },
  header: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 40,
    fontWeight: "bold",
    paddingVertical: 20,
  },
  loginbutton: {
    textAlign: "center",
    fontSize: 16,
    color: "#fff",
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
  ImgContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  SignUpButton: {
    padding: 15,
    backgroundColor: "#95D5B2",
    borderRadius: 10,
  },
  SignUpText: {
    textAlign: "center",
    fontSize: 16,
    color: "black",
  },
});

export default GetStarted;
