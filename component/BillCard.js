import { View, StyleSheet, Image, Text } from "react-native";
import ProgressBar from "react-native-progress/Bar";
import constants from "../constants";
import languageDonationCard from "../language/language.donationCard";
import languageMyBills from "../language/language.MyBills";

const language = "SIN";

const BillCard = ({ imageURI, title, daysLeft, progress,collected }) => {
  return (
    <View style={styles.container}>
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
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#D8F3DC",
    height: 150,
    width: "100%",
    borderTopLeftRadius: 32,
    borderBottomRightRadius: 32,
    marginBottom: 10,
  },
  detailContainer: {
    flex: 3,
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
    marginLeft:5,
    fontSize:18,
  },
  cardHeader:{
    marginLeft:10,
    color:'#2D6A4F'
  },testColor:{
    color:'#2D6A4F'
  },subText:{
    fontSize:14,
  }
});

export default BillCard;
