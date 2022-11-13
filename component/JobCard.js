import React, { useState } from "react";

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  CheckBox,
} from "react-native";

import { BottomSheet } from "react-native-btr";
import languageMyjobs from "../language/language.MyJobs";
import { RadioButton } from "react-native-paper";
import constants from "../constants";
import { useSelector } from "react-redux";

const Jobcard = ({ navigation }) => {
  const [visible, setVisible] = useState(false);

  const language = useSelector((state) => state.language.language);

  const [isSelectedPlastic, setisSelectedPlastic] = useState(false);
  const [isSelectedFoodWaste, setisSelectedFoodWaste] = useState(false);
  const [isSelectedPapers, setisSelectedPapers] = useState(false);
  const [isSelectedGlasses, setisSelectedGlasses] = useState(false);

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };

  const [checked, setChecked] = useState(languageMyjobs.CATEGORY.POINTS);

  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <View style={styles.cardHeader}>
          <Text>{languageMyjobs.NAME[language]}</Text>
          <Text style={styles.subText}>John Doe</Text>
        </View>

        <View style={styles.goalContainer}>
          <View>
            <Text style={styles.testColor}>
              {languageMyjobs.HOUSE_NUMBER[language]}
            </Text>
            <Text style={styles.subText}>43/B-153</Text>
          </View>

          <View style={styles.space}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleBottomNavigationView}
            >
              <Text style={styles.text}>
                {languageMyjobs.COLLECT[language]}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <BottomSheet
          visible={visible}
          //setting the visibility state of the bottom shee
          onBackButtonPress={toggleBottomNavigationView}
          //Toggling the visibility state
          onBackdropPress={toggleBottomNavigationView}
          //Toggling the visibility state
        >
          {/*Bottom Sheet inner View*/}
          <View style={styles.bottomNavigationView}>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  padding: 20,
                  fontSize: 20,
                }}
              >
                {languageMyjobs.COLLECT[language]}
              </Text>

              <Text
                style={{
                  textAlign: "center",
                  padding: 5,
                  fontSize: 12,
                }}
              >
                {languageMyjobs.SELECT_MENU[language]}
              </Text>

              <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
                <View style={styles.CheckBoxcontainer}>
                  {/* <View style={styles.checkboxContainer}>
                  <RadioButton
                      value={languageMyjobs.CATEGORY.ONLINE}
                      // status={checked === languageMyjobs.CATEGORY.ONLINE ? "checked" : "unchecked"}
                      color={"#2D6A4F"}
                      onPress={() =>
                        setChecked(languageMyjobs.CATEGORY.POINTS)
                      }
                    />
                    <Text style={styles.label}>
                      {languageMyjobs.PLASTIC[language]}
                    </Text>
                  </View> */}

                  <View style={styles.checkboxContainer}>
                    <RadioButton
                      value={languageMyjobs.CATEGORY.POINTS}
                      status={
                        checked === languageMyjobs.CATEGORY.POINTS
                          ? "checked"
                          : "unchecked"
                      }
                      color={"#2D6A4F"}
                      onPress={() => setChecked(languageMyjobs.CATEGORY.POINTS)}
                    />
                    <Text style={styles.label}>
                      {languageMyjobs.FOOD_WASTE[language]}
                    </Text>
                  </View>

                  {/* <View style={styles.checkboxContainer}>
                  <RadioButton
                       value={languageMyjobs.CATEGORY.ONLINE}
                      status={checked === languageMyjobs.CATEGORY.ONLINE ? "checked" : "unchecked"}
                      color={"#2D6A4F"}
                      onPress={() =>
                        setChecked(languageMyjobs.CATEGORY.ONLINE)
                      }
                    />
                    <Text style={styles.label}>
                      {languageMyjobs.PAPERS[language]}
                    </Text>
                  </View> */}

                  <View style={styles.checkboxContainer}>
                    <RadioButton
                      value={languageMyjobs.CATEGORY.ONLINE}
                      status={
                        checked === languageMyjobs.CATEGORY.ONLINE
                          ? "checked"
                          : "unchecked"
                      }
                      color={"#2D6A4F"}
                      onPress={() => setChecked(languageMyjobs.CATEGORY.ONLINE)}
                    />
                    <Text style={styles.label}>
                      {languageMyjobs.OTHERS[language]}
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.bottomTop}>
              <TouchableOpacity
                style={styles.button1}
                onPress={toggleBottomNavigationView}
              >
                <Text style={styles.text1}>
                  {languageMyjobs.PROCEED[language]}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheet>
      </View>
    </View>
  );
};

export default Jobcard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0F7FA",
  },
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: 380,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    backgroundColor: "#D8F3DC",
    height: 150,
    width: "90%",
    borderTopLeftRadius: 32,
    borderBottomRightRadius: 32,
    marginBottom: 10,
    justifyContent: "space-between",
    marginLeft: 18,
  },
  detailContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignContent: "center",
    justifyContent: "space-evenly",
  },
  goalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  space: {
    marginLeft: 25,
  },
  cardHeader: {
    marginLeft: 10,
    color: "#2D6A4F",
  },
  testColor: {
    color: "#2D6A4F",
  },
  subText: {
    fontSize: 14,
  },
  button: {
    backgroundColor: "#40916C",
    padding: 4,
    width: "100%",
    height: 40,
    borderRadius: 8,
  },
  text: {
    fontSize: 12,
    color: "white",
    textAlign: "center",
    padding: 6,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignSelf: "flex-start",
    marginLeft: 100,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 2,
    marginLeft: 40,
  },
  CheckBoxcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomTop: {
    marginBottom: 30,
    marginRight: 50,
  },
  button1: {
    backgroundColor: "#40916C",
    padding: 4,
    width: "150%",
    height: 40,
    borderRadius: 8,
    textAlign: "center",
  },
  text1: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
    padding: 6,
  },
});
