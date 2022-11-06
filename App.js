import { StatusBar, StyleSheet, View } from "react-native";
import Events from "./screens/Events";
import Donations from "./screens/Donations";
import Home from "./screens/Home";
import EventView from "./screens/EventView";

const language = "SIN";

export default function App() {
  return (
    <View style={styles.container}>
      <EventView />
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
