import { View, Text, StyleSheet, Image } from "react-native";
import languageHome from "../language/language.home";

const language = "SIN";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.pointsContainer}>
        <View style={styles.coinsImgContainer}>
          <Image
            style={{ width: 143, height: 100 }}
            source={require("../assets/coins.png")}
          />
        </View>
        <View style={styles.detailContainer}>
          <Text style={{ fontSize: 15, color: "#fff", textAlign: "right" }}>
            {languageHome.YOU_HAVE_COLLECTED[language]}
          </Text>
          <Text
            style={{
              fontSize: 48,
              fontWeight: "bold",
              color: "#fff",
              textAlign: "right",
            }}
          >
            100
          </Text>
          <Text style={{ fontSize: 15, color: "#fff", textAlign: "right" }}>
            {languageHome.POINTS[language]}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
  pointsContainer: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#7EE4B1",
    borderRadius: 32,
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  coinsImgContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  detailContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default Home;
