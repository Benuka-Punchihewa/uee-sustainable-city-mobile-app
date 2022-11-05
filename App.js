import { StatusBar, StyleSheet, View } from "react-native";
import Donations from "./screens/Donations";
import DonationForm from "./screens/DonationForm";
import Home from "./screens/Home";

export default function App() {
  return (
    <View style={styles.container}>
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
