import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Text,
  StatusBar,
} from "react-native";
import Button from "../component/Button";
import DonationCard from "../component/DonationCard";
import constants from "../constants";
import languageDonationMain from "../language/language.donationMain";
import ProgressBar from "react-native-progress/Bar";
import { useDimensions } from "@react-native-community/hooks";

const language = "SIN";

const DonationMain = ({ navigation }) => {
  const handlePress = () => {};

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          ...styles.container,
          minHeight:
            useDimensions().screen.height -
            StatusBar.currentHeight -
            10,
        }}
      >
        <Image
          source={{
            uri: "http://www.greenschools.net/img/pic/Zero-Waste-School-Events-thumbnail.jpg",
          }}
          style={styles.img}
        />

        <View style={styles.donationDetailsContainer}>
          <View style={styles.donationDetails}>
            <View style={styles.raised}>
              <Text style={styles.donationAmount}>
                {languageDonationMain.RUPEES[language]}
                {(30000).toLocaleString("en-US")}
              </Text>
              <Text style={styles.donationType}>
                {languageDonationMain.RAISED[language]}
              </Text>
            </View>
            <View style={styles.raised}>
              <Text style={styles.donationAmount}>
                {languageDonationMain.RUPEES[language]}
                {(100000).toLocaleString("en-US")}
              </Text>
              <Text style={styles.donationType}>
                {languageDonationMain.GOAL[language]}
              </Text>
            </View>
          </View>
          <ProgressBar
            progress={0.9}
            width={null}
            color={"#2D6A4F"}
            unfilledColor={"#D8F3DC"}
            borderWidth={0}
          />
        </View>

        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          ultrices vel orci ut rutrum. Nam nec odio commodo, finibus urna vitae,
          placerat nunc. Suspendisse eget magna sit amet turpis tincidunt
          suscipit. Morbi vel leo est. Donec varius pulvinar sagittis. Nullam
          condimentum elementum auctor. Duis vitae arcu ante. Curabitur
          tristique tincidunt justo quis interdum. Duis rhoncus quis neque id
          tristique. Maecenas a posuere velit. Pellentesque aliquet porta
          eleifend. In dolor sem, porttitor ut justo vel, rhoncus interdum diam.
          Donec tincidunt, tortor eget placerat dapibus, ipsum orci pharetra
          risus, ut maximus orci felis ac justo.
        </Text>
        <Button
          type={constants.BUTTON_TYPES.FILLED}
          title={languageDonationMain.Make_A_DONATION[language]}
          marginTop={25}
          marginBottom={50}
          onPress={() => navigation.navigate("DonationForm")}
        />
        <Text style={styles.mostDonationsTitle}>
          {languageDonationMain.MOST_DONATIONS_TITLE[language]}
        </Text>
        <DonationCard
          donator={"Austin Russel"}
          comment={` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices vel orci ut rutrum. Nam nec odio commodo, finibus urna vitae, placerat nunc. Suspendisse eget magna sit amet turpis tincidunt suscipit. Morbivel leo est. Donec varius pulvinar sagittis.`}
          donation={5000}
          donationDate={new Date()}
        />
        <DonationCard
          donator={"Elon Musk"}
          comment={` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices vel orci ut rutrum. Nam nec odio commodo, finibus urna vitae, placerat nunc. Suspendisse eget magna sit amet turpis tincidunt suscipit. Morbivel leo est. Donec varius pulvinar sagittis.`}
          donation={25000}
          donationDate={new Date()}
        />
      </View>
    </ScrollView>
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
  donationDetailsContainer: {
    marginBottom: 20,
  },
  donationDetails: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 5,
  },
  raised: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  donationAmount: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2D6A4F",
  },
  donationType: {
    fontSize: 14,
    color: "#2D6A4F",
    fontStyle: "italic",
  },
  img: {
    width: "100%",
    height: 225,
    borderTopLeftRadius: 32,
    borderBottomRightRadius: 32,
    marginBottom: 30,
  },
  description: {
    fontSize: 14,
  },
  mostDonationsTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
export default DonationMain;
