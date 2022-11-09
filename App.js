import { StatusBar, StyleSheet, View } from "react-native";
import Events from "./screens/Events";
import Donations from "./screens/Donations";
import DonationForm from "./screens/DonationForm";
import Home from "./screens/Home";
import EventView from "./screens/EventView";
import MyEvent from "./screens/MyEvent";
import EventForm from "./screens/EventForm";
import FeedbackForm from "./screens/FeedbackForm";
import QRscanner from "./screens/QRscanner";

export default function App() {
  return (
    <View style={styles.container}>
      <MyEvent />
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
