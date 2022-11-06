import { StatusBar, StyleSheet, View } from "react-native";
import DonationThreads from "./screens/DonationThreads";
import DonationThreadForm from "./screens/DonationThreadForm";
import Home from "./screens/Home";
import DonationMain from "./screens/DonationMain";
import DonationForm from "./screens/DonationForm";

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
    marginTop: StatusBar.currentHeight,
  },
});
