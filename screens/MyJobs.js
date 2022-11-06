import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import JobCard from "../component/Jobcard";
import languageMyjobs from "../language/language.MyJobs";

const language = "SIN";

const MyJobs = () => {

  return (
    <View style={styles.container}>

      <Text style={styles.PageTitle}>
        {languageMyjobs.MY_JOBS[language]}
      </Text>

      <ScrollView
        style={styles.billContainer}
        showsVerticalScrollIndicator={false}
      >
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    flexDirection: 'row',
    justifyContent: "space-around",
  },
  buttonStyle:{
    width:50,
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
    padding:6,
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
