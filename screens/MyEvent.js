import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import languageMyevents from "../language/language.myevents";
import EventCard from "../component/EventCard";
import ButtonToggleGroup from "react-native-button-toggle-group";

const language = "SIN";

const MyEvent = () => {
  const [value, setValue] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.PageTitle}>
        {languageMyevents.MY_EVENTS[language]}
      </Text>
      {/* <ButtonToggleGroup
        style={styles.btnText}
        highlightBackgroundColor={"#40916C"}
        highlightTextColor={"white"}
        inactiveBackgroundColor={"transparent"}
        inactiveTextColor={"#40916C"}
        values={["Auto", "Light", "Dark"]}
        value={value}
        onSelect={(val) => setValue(val)}
      /> */}
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>
            {languageMyevents.PENDING[language]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnborder}>
          <Text style={styles.btnSecText}>
            {languageMyevents.COMPLETED[language]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnborder}>
          <Text style={styles.btnSecText}>
            {languageMyevents.ORGANIZED[language]}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <EventCard />
        <EventCard />
        <EventCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    padding: 12,
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
    padding: 12,
  },
  btnSecText: {
    color: "#40916C",
    fontSize: 14,
  },
  listContainer: {
    marginTop: 20,
  },
});
export default MyEvent;
