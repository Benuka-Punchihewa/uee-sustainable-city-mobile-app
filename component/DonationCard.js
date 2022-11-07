import { View, StyleSheet, Text } from "react-native";
import languageDonationMain from "../language/language.donationMain";

const language = "SIN";

const DonationCard = ({ donator, comment, donation, donationDate }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.donator}>{donator}l</Text>
      <Text style={styles.comment}>{comment}</Text>
      <View style={styles.detailContainer}>
        <View style={styles.donationAmount}>
          <Text style={styles.donationAmountTxt}>
            {languageDonationMain.RUPEES[language]}
            {donation.toLocaleString("en-US")}
          </Text>
        </View>
        <Text style={styles.donationDate}>{donationDate.toDateString()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  donator: {
    fontSize: 16,
    fontWeight: "bold",
  },
  comment: {
    fontSize: 14,
  },
  detailContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  donationAmount: {
    backgroundColor: "#40916C",
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 8,
  },
  donationAmountTxt: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  donationDate: {
    fontSize: 12,
  },
});

export default DonationCard;
