import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import JobCard from "../component/JobCard";
import languageMyjobs from "../language/language.MyJobs";
import Icon from "react-native-vector-icons/Ionicons";

const MyJobs = ({ navigation }) => {
  const language = useSelector((state) => state.language.language);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.PageTitle}>{languageMyjobs.MY_JOBS[language]}</Text>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
            <Icon name="ios-settings-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={styles.billContainer}
        showsVerticalScrollIndicator={false}
      >
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </ScrollView>
    </View>
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
  wrapper: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  PageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  billContainer: {
    marginTop: 20,
  },
  HeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonStyle: {
    width: 50,
  },
  button: {
    backgroundColor: "#40916C",
    padding: 8,
    width: "46%",
    height: 40,
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
  button1: {
    backgroundColor: "#ffff",
    padding: 6,
    width: "46%",
    height: 40,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: "#40916C",
  },
  text1: {
    fontSize: 18,
    color: "#40916C",
    textAlign: "center",
  },
});

export default MyJobs;
