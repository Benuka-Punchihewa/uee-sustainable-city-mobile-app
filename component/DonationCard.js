import { View, StyleSheet, Image, Text } from "react-native";
import ProgressBar from "react-native-progress/Bar";
import constants from "../constants";
import languageDonationCard from "../language/language.donationCard";

const language = "SIN";

const DonationCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={{
            uri: "http://www.greenschools.net/img/pic/Zero-Waste-School-Events-thumbnail.jpg",
          }}
          style={styles.img}
        />
      </View>
      <View style={styles.detailContainer}>
        <Text numberOfLines={2} style={styles.eventTitle}>
          Let's Get Together And Clean Unawatuna Let's Get Together And Clean
          Unawatuna
        </Text>
        <Text style={styles.daysLeft}>
          {language === constants.LANGUAGES.ENGLISH ? (
            <> 2 Days Left</>
          ) : (
            <>දින 2 ඉතිරිව ඇත</>
          )}
        </Text>
        <View style={styles.goalContainer}>
          <Text style={styles.daysLeft}>
            {languageDonationCard.RUPEES[language]}
            {(2000000).toLocaleString()}
          </Text>
          <View style={styles.progressContainer}>
            <View style={styles.progressBarContainer}>
              <ProgressBar
                progress={0.5}
                width={null}
                color={"#000"}
                unfilledColor={"#fff"}
                borderWidth={0}
              />
            </View>
            <Text style={styles.progressPercentage}>87%</Text>
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
  imgContainer: {
    flex: 2,
  },
  img: {
    height: 145,
    width: "100%",
    borderTopLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  detailContainer: {
    flex: 3,
    padding: 8,
    justifyContent: "center",
    alignContent: "center",
    justifyContent: "space-around",
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  daysLeft: {
    fontSize: 14,
  },
  goalContainer: {},
  progressContainer: {
    flexDirection: "row",
  },
  progressBarContainer: {
    flex: 8,
    justifyContent: "center",
  },
  progressPercentage: {
    flex: 2,
    justifyContent: "center",
    alignContent: "center",
    fontSize: 11,
    paddingLeft: 5,
  },
});

export default DonationCard;
