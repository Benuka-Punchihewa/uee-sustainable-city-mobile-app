import { StatusBar, StyleSheet, View } from "react-native";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import Home from "./screens/Home";
import ForgetPassword from "./screens/auth/ForgetPassword";
import Splash from "./screens/MainHome";

const language = "SIN";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <ForgetPassword /> */}
      <Splash />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginLeft: 20,
    marginRight: 20,
    marginTop: StatusBar.currentHeight + 20,
  },
});
