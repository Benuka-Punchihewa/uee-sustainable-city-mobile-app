import { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import languageMyevents from "../language/language.myevents";
import EventCard from "../component/EventCard";

const language = "SIN";

const MyEventOrganized = ({ navigation }) => {
  const [value, setValue] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.PageTitle}>
        {languageMyevents.MY_EVENTS[language]}
      </Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btnborder}
          onPress={() => navigation.navigate("MyEvent")}
        >
          <Text style={styles.btnSecText}>
            {languageMyevents.PENDING[language]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnborder}
          onPress={() => navigation.navigate("MyEventParticipated")}
        >
          <Text style={styles.btnSecText}>
            {languageMyevents.COMPLETED[language]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>
            {languageMyevents.ORGANIZED[language]}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  PageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btn: {
    height: 54,
    backgroundColor: "#40916C",
    borderRadius: 12,
    width: "32%",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    padding: 0,
  },
  btnText: {
    color: "#fff",
    fontSize: 14,
  },
  btnborder: {
    height: 54,
    width: "32%",
    borderColor: "#40916C",
    borderWidth: 2,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
  btnSecText: {
    color: "#40916C",
    fontSize: 14,
  },
  listContainer: {
    marginTop: 20,
  },
});
export default MyEventOrganized;
