import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import languageDonation from "../language/language.donation";
import languageMarkGabage from "../language/language.MarkGabage";

// TODO: Implement add donation threads button

const MarkGabage = ({ navigation }) => {
  const language = useSelector((state) => state.language.language);

  return (
    <View style={styles.container}>
      <Text style={styles.PageTitle}>
        {languageMarkGabage.MARKED_GARBAGE_BIN[language]}
      </Text>
     
      <ScrollView
        style={styles.donationsContainer}
        showsVerticalScrollIndicator={false}
      >
       
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
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

export default MarkGabage;
