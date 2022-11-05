import { View, Text, StyleSheet, ScrollView } from "react-native";
import DonationCard from "../component/DonationCard";
import Search from "../component/Search";

const Donations = () => {
  const handleSearch = (value) => {
    console.log(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.PageTitle}>Donation Threads</Text>
      <Search onSearch={handleSearch} />
      <ScrollView
        style={styles.donationsContainer}
        showsVerticalScrollIndicator={false}
      >
        <DonationCard />
        <DonationCard />
        <DonationCard />
        <DonationCard />
        <DonationCard />
        <DonationCard />
        <DonationCard />
        <DonationCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  PageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  donationsContainer: {
    marginTop: 20,
  },
});

export default Donations;
