import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import languageMyBills from "../language/language.MyBills";
import BillCard from "../component/BillCard";
import { useSelector } from "react-redux";


const ElectricityBills = ({ navigation }) => {
  const language = useSelector((state) => state.language.language);

  return (
    <View style={styles.container}>
      <Text style={styles.PageTitle}>{languageMyBills.MY_BILLS[language]}</Text>

      <View style={styles.HeaderContainer}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.navigate("WaterBills")}
        >
          <Text style={styles.text1}>{languageMyBills.WATER[language]}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>
            {languageMyBills.ELECTRICITY[language]}
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.billContainer}
        showsVerticalScrollIndicator={false}
      >
        <BillCard onPress={() => navigation.navigate("RecordMeterReading")} />
        <BillCard onPress={() => navigation.navigate("RecordMeterReading")} />
        <BillCard onPress={() => navigation.navigate("RecordMeterReading")} />
        <BillCard onPress={() => navigation.navigate("RecordMeterReading")} />
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

export default ElectricityBills;
