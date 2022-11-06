import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import ProgressBar from "react-native-progress/Bar";
import constants from "../constants";
import languageDonationCard from "../language/language.donationCard";
import languageMyBills from "../language/language.MyBills";
import languageMyjobs from "../language/language.MyJobs";

const language = "SIN";

const JobCard = ({ imageURI, title, daysLeft, progress,collected }) => {
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
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>{languageMyjobs.COLLECT[language]}</Text>
            </TouchableOpacity> 
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
});

export default JobCard;
