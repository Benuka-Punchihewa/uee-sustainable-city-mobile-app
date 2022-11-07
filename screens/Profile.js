import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import languageProfile from "../language/language.profile";

const language = "SIN";

const Profile = ({ navigation }) => {
  const onEditPress = () => {};

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.profileDetails}>
          <Image
            source={{
              uri: "http://www.greenschools.net/img/pic/Zero-Waste-School-Events-thumbnail.jpg",
            }}
            style={styles.img}
          />
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.address}>No 987/1, Apple Rd., Pineapple</Text>
          <TouchableOpacity
            uppercase={false}
            onPress={onEditPress}
            style={styles.profileEditBtn}
          >
            <Text style={styles.profileEditBtnTxt}>
              <FontAwesomeIcon name="pencil" size={14} color="#000" />{" "}
              {languageProfile.EDIT[language]}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.pointsContainer}>
          <View style={styles.coinsImgContainer}>
            <Image
              style={{ width: 143, height: 100 }}
              source={require("../assets/coins.png")}
            />
          </View>
          <View style={styles.detailContainer}>
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
              {languageProfile.POINTS[language]}
            </Text>
          </View>
        </View>

        <Text style={styles.optionTitle}>Options</Text>
        <View style={styles.optionsContainer}>
          {/* Event */}
          <TouchableOpacity style={{ ...styles.option, marginRight: 5 }}>
            <IoniconsIcon name="earth" size={30} color="#000" />
            <Text style={styles.optionLabel}>
              {languageProfile.EVENT[language]}
            </Text>
          </TouchableOpacity>

          {/* Donation */}
          <TouchableOpacity
            style={{ ...styles.option, marginLeft: 5 }}
            onPress={() => navigation.navigate("DonationThreads")}
          >
            <IoniconsIcon name="heart" size={30} color="#000" />
            <Text style={styles.optionLabel}>
              {languageProfile.DONATION[language]}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.optionsContainer}>
          {/* Bills */}
          <TouchableOpacity style={{ ...styles.option, marginRight: 5 }}
            onPress={() => navigation.navigate("WaterBills")}>
            <IoniconsIcon name="md-receipt" size={30} color="#000" />
            <Text style={styles.optionLabel}>
              {languageProfile.BILLS[language]}
            </Text>
          </TouchableOpacity>

          {/* Garbage */}
          <TouchableOpacity style={{ ...styles.option, marginLeft: 5 }}
            onPress={() => navigation.navigate("MyJobs")}>
            <IoniconsIcon name="trash-bin" size={30} color="#000" />
            <Text style={styles.optionLabel}>
              {languageProfile.GARBAGE[language]}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  profileDetails: {
    flex: 1,
  },
  img: {
    height: 150,
    width: 150,
    alignSelf: "center",
    marginBottom: 15,
    borderRadius: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
  },
  address: {
    fontSize: 14,
    alignSelf: "center",
    marginBottom: 5,
  },
  profileEditBtn: {
    alignSelf: "center",
    backgroundColor: "#52B788",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 12,
  },
  profileEditBtnTxt: {
    fontSize: 14,
  },
  pointsContainer: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#9DE0A8",
    borderRadius: 32,
    paddingHorizontal: 25,
    paddingVertical: 5,
    marginTop: 30,
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
  optionTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 10,
  },
  optionsContainer: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 10,
  },
  option: {
    flex: 1,
    backgroundColor: "#9DE0A8",
    height: 100,
    borderRadius: 12,
    padding: 15,
    justifyContent: "center",
  },
  optionLabel: {
    fontSize: 20,
  },
});

export default Profile;
