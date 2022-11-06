import { StatusBar, StyleSheet, View } from "react-native";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import Donations from "./screens/Donations";
import DonationForm from "./screens/DonationForm";
import Home from "./screens/Home";
import ForgetPassword from "./screens/auth/ForgetPassword";
import MainView from "./screens/MainView";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <ForgetPassword /> */}
      {/* <MainView /> */}
      <Donations />
      <DonationForm />
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
