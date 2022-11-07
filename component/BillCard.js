import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import ProgressBar from "react-native-progress/Bar";
import constants from "../constants";
import languageDonationCard from "../language/language.donationCard";
import languageMyBills from "../language/language.MyBills";

const language = "SIN";

const BillCard = ({ onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}> 
      <View style={styles.detailContainer}>
       <View style={styles.cardHeader}>
            {languageMyBills.MONTHLY_CHARGE[language]}
            <Text style={styles.subText}>{languageMyBills.RS[language]}
                <Text style={styles.space}>5000</Text>
            </Text>
        </View>
        <View style={styles.goalContainer}>
            <View>
                <Text style={styles.testColor}>
                    {languageMyBills.POINT_EARNED[language]} 
                </Text>
                <Text style={styles.subText}>153</Text>
            </View>

            <View>
                <Text style={styles.testColor}>
                    {languageMyBills.BILL_DATE[language]} 
                </Text>
                <Text style={styles.subText}>153</Text>
            </View>
        </View>
        </View>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
  },
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: 380,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: "row",
    backgroundColor: "#D8F3DC",
    height: 150,
    width: "90%",
    borderTopLeftRadius: 32,
    borderBottomRightRadius: 32,
    marginBottom: 10,
    justifyContent: 'space-between',
    marginLeft:18,
  },
  detailContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignContent: "center",
    justifyContent: "space-around",
  },
  goalContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  space:{
    marginLeft:25,
  },
  cardHeader:{
    marginLeft:10,
    color:'#2D6A4F'
  },testColor:{
    color:'#2D6A4F'
  },subText:{
    fontSize:14,
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
    alignSelf:'flex-start',
    marginLeft:100
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 2,
    marginLeft:40
  },
  CheckBoxcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomTop:{
    marginBottom:30,
    marginRight:50,
  },
  button1: {
    backgroundColor: "#40916C",
    padding: 4,
    width: "150%",
    height: 40,
    borderRadius: 8,
    textAlign:'center'
  },
  text1: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
    padding: 6,
  },
});

export default BillCard;
