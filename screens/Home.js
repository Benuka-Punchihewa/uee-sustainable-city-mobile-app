import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import DonationThreadCard from "../component/DonationThreadCard";
import languageHome from "../language/language.home";
import { useDimensions } from "@react-native-community/hooks";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";

const Home = ({ navigation }) => {
  const language = useSelector((state) => state.language.language);

  const bottomNavigationHeight = useBottomTabBarHeight();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          ...styles.container,
          minHeight:
            useDimensions().screen.height -
            StatusBar.currentHeight -
            bottomNavigationHeight -
            10,
        }}
      >
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

        <Text style={styles.title}>Trending Events</Text>

        <Text style={styles.title}>Trending Donations</Text>
        <DonationThreadCard
          imageURI={
            "http://www.greenschools.net/img/pic/Zero-Waste-School-Events-thumbnail.jpg"
          }
          title={"Let's Get Together And Clean Unawatuna"}
          daysLeft={20}
          collected={2000000}
          progress={0.87}
          onPress={() => navigation.navigate("DonationMain")}
        />
        <DonationThreadCard
          imageURI={
            "http://www.greenschools.net/img/pic/Zero-Waste-School-Events-thumbnail.jpg"
          }
          title={"Let's Get Together And Clean Unawatuna"}
          daysLeft={20}
          collected={2000000}
          progress={0.87}
          onPress={() => navigation.navigate("DonationMain")}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 20,
    paddingRight: 20,
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
  title: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Home;
