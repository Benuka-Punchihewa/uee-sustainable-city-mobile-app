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
import languageLogin from "../../language/language.login";
import { useDimensions } from "@react-native-community/hooks";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../service/auth.service";
import { authActions } from "../../store/authSlice";

//login screen
const Login = ({ navigation }) => {
  const dispatch = useDispatch();

  const language = useSelector((state) => state.language.language);

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async () => {
    const data = {
      username: username,
      password: password,
    };

    const response = await login(data);

    if (response.success) {
      // dispatch login action
      dispatch(
        authActions.login({
          token: response.data.token,
          userId: response.data.user._id,
          userName: response.data.user.name,
          userRole: response.data.user.role,
        })
      );
    } else {
      //display the error message
      response?.data?.message && alert(response?.data?.message);
    }
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
        <Text style={styles.header}>{languageLogin.SIGN_IN[language]}</Text>
        <View style={styles.pointsContainer}>
          <View style={styles.formInput}>
            <Text style={styles.text}>{languageLogin.USER_NAME[language]}</Text>
            <TextInput
              style={styles.textInput}
              placeholder={languageLogin.USER_NAME[language]}
              onChangeText={(value) => setUserName(value)}
              defaultValue={username}
            />
          </View>

          <View style={styles.formInput}>
            <Text style={styles.text}>{languageLogin.PASSWORD[language]}</Text>
            <TextInput
              style={styles.textInput}
              placeholder={languageLogin.PASSWORD[language]}
              secureTextEntry={true}
              onChangeText={(value) => setPassword(value)}
              defaultValue={password}
            />
          </View>

          <View style={styles.formInput}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ForgetPassword");
              }}
            >
              <Text style={styles.forgetpassword}>
                {languageLogin.FORGET_PASSWORD[language]}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.formInput}>
            <TouchableOpacity
              style={styles.defaultButton}
              onPress={handleSubmit}
            >
              <Text style={styles.loginbutton}>
                {languageLogin.LOGIN[language]}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.formInput}>
            <View style={styles.line}></View>
          </View>

          {/* navigate to the register page */}
          <View style={styles.formInput}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <Text style={styles.needAccount}>
                {languageLogin.NEED_ACCOUNT[language]}
              </Text>
            </TouchableOpacity>
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
    marginTop: 80,
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

export default Login;
