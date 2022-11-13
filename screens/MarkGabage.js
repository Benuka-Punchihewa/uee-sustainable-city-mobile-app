import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import languageDonation from "../language/language.donation";
import languageMarkGabage from "../language/language.MarkGabage";
import { RadioButton } from "react-native-paper";
import languageMyJobs from "../language/language.MyJobs";


const MarkGabage = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
  const language = useSelector((state) => state.language.language);

  const [checked, setChecked] = useState(languageMarkGabage.CATEGORY.POINTS);

  return (
    <View style={styles.container}>
      <Text style={styles.PageTitle}>
        {languageMarkGabage.MARKED_GARBAGE_BIN[language]}
      </Text>
     
      <ScrollView
        style={styles.donationsContainer}
        showsVerticalScrollIndicator={false}
      >
       
       <Text style={styles.Paragraph}>
        {languageMarkGabage.MARKED_GARBAGE_BIN_PARA[language]}
      </Text>

       <View style={styles.checkboxContainer1}>
                    <RadioButton
                      value={languageMyJobs.CATEGORY.POINTS}
                      status={
                        checked === languageMarkGabage.CATEGORY.POINTS
                          ? "checked"
                          : "unchecked"
                      }
                      color={"#2D6A4F"}
                      onPress={() => setChecked(languageMarkGabage.CATEGORY.POINTS)}
                    />
                    <Text style={styles.label}>
                      {languageMarkGabage.GARBAGE_BIN_SELECTION_FILLED[language]}
                    </Text>
                  </View>

                  <View style={styles.checkboxContainer2}>
                    <RadioButton
                      value={languageMarkGabage.CATEGORY.ONLINE}
                      status={
                        checked === languageMarkGabage.CATEGORY.ONLINE
                          ? "checked"
                          : "unchecked"
                      }
                      color={"#2D6A4F"}
                      onPress={() => setChecked(languageMarkGabage.CATEGORY.ONLINE)}
                    />
                    <Text style={styles.label}>
                      {languageMarkGabage.GARBAGE_BIN_SELECTION_NOTFILLED[language]}
                    </Text>
                  </View>

                  <View style={styles.formInput}>
            <TouchableOpacity
              style={styles.defaultButton}
              onPress={() => {
                navigation.navigate("Profile");
              }}
            >
              <Text
                style={{ textAlign: "center", fontSize: 16, color: "#fff" }}
              >
                {languageMarkGabage.NOTIFICATION[language]}
              </Text>
            </TouchableOpacity>

            <Text style={styles.subText}>
                {languageMarkGabage.SEND_NOTIFICATION[language]}
              </Text>
          </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  PageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  donationsContainer: {
    marginTop: 20,
  },
  Paragraph:{
    textAlign:'center',
    fontSize:16,
  },checkboxContainer1: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginLeft: 100,
    marginTop:50,
  },label: {
    margin: 4,
    marginLeft: 40,
  },
  checkboxContainer2: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginLeft: 100,
    marginTop:20,
  },defaultButton: {
    padding: 15,
    backgroundColor: "#40916C",
    borderRadius: 10,
    marginTop:35,
  },
  subText:{
    textAlign: "center", 
    fontSize: 12, 
    color: "#000",
    padding:10,
  }
});

export default MarkGabage;
