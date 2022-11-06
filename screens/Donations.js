import { View, Text, StyleSheet, ScrollView } from "react-native";
import DonationCard from "../component/DonationCard";
import Search from "../component/Search";
import languageDonation from "../language/language.donation";

const language = "SIN";

const Donations = () => {
  const handleSearch = (value) => {
    console.log(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.PageTitle}>
        {languageDonation.DONATION_THREADS[language]}
      </Text>
      <Search
        placeholder={languageDonation.SEARCH_DONATION_THREADS[language]}
        onSearch={handleSearch}
      />
      <ScrollView
        style={styles.donationsContainer}
        showsVerticalScrollIndicator={false}
      >
        <DonationCard
          imageURI={
            "http://www.greenschools.net/img/pic/Zero-Waste-School-Events-thumbnail.jpg"
          }
          title={"Let's Get Together And Clean Unawatuna"}
          daysLeft={20}
          collected={2000000}
          progress={0.87}
        />
        <DonationCard
          imageURI={
            "http://www.greenschools.net/img/pic/Zero-Waste-School-Events-thumbnail.jpg"
          }
          title={"Let's Get Together And Clean Unawatuna"}
          daysLeft={20}
          collected={2000000}
          progress={0.87}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  PageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  donationsContainer: {
    marginTop: 20,
  },
});

export default Donations;
