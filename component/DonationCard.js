import { View, StyleSheet, Image, Text } from "react-native";
import ProgressBar from "react-native-progress/Bar";
import constants from "../constants";
import languageDonationCard from "../language/language.donationCard";

const language = "SIN";

const DonationCard = ({ imageURI, title, daysLeft, collected, progress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={{
            uri: imageURI,
          }}
          style={styles.img}
        />
      </View>
      <View style={styles.detailContainer}>
        <Text numberOfLines={2} style={styles.eventTitle}>
          {title}
        </Text>
        <Text style={styles.daysLeft}>
          {language === constants.LANGUAGES.ENGLISH ? (
            <> {daysLeft} Days Left</>
          ) : (
            <>දින {daysLeft} ඉතිරිව ඇත</>
          )}
        </Text>
        <View style={styles.goalContainer}>
          <Text style={styles.daysLeft}>
            {languageDonationCard.RUPEES[language]}
            {collected.toLocaleString()}
          </Text>
          <View style={styles.progressContainer}>
            <View style={styles.progressBarContainer}>
              <ProgressBar
                progress={progress}
                width={null}
                color={"#000"}
                unfilledColor={"#fff"}
                borderWidth={0}
              />
            </View>
            <Text style={styles.progressPercentage}>{progress * 100}%</Text>
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
