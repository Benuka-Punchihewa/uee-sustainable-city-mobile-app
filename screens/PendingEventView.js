import {
  Text,
  View,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import constants from "../constants";
import languagePendingEventView from "../language/language.pendingEventView";
import Button from "../component/Button";
import { useSelector } from "react-redux";
import { useDimensions } from "@react-native-community/hooks";

const PendingEventView = ({ navigation }) => {
  const language = useSelector((state) => state.language.language);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          ...styles.container,
          minHeight:
            useDimensions().screen.height - StatusBar.currentHeight - 10,
        }}
      >
        <View>
          <Image
            source={{
              uri: "http://www.greenschools.net/img/pic/Zero-Waste-School-Events-thumbnail.jpg",
            }}
            style={styles.img}
          />
          <View>
            <Text style={styles.title}>Lets Clan Unawatuna Beach</Text>
            <Text style={styles.subtitle}>
              {language === constants.LANGUAGES.ENGLISH ? (
                <>On 12th Oct 2022</>
              ) : (
                <>2022 ඔක්‌තෝබර් 12 වැනිදා</>
              )}
            </Text>
            <Text style={styles.subtitle}>
              {language === constants.LANGUAGES.ENGLISH ? (
                <>At Viharamahadewi Park</>
              ) : (
                <>ස්ථානය Viharamahadewi Park</>
              )}
            </Text>
            <Text style={styles.participate}>
              {language === constants.LANGUAGES.ENGLISH ? (
                <>20 People Participating</>
              ) : (
                <>20 දෙනෙකු සහභාගී වේ</>
              )}
            </Text>
            <Text style={styles.description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </Text>
          </View>
        </View>
        <Button
          type={constants.BUTTON_TYPES.OUTLINED}
          title={languagePendingEventView.MAKE_A_DONATION[language]}
          marginTop={100}
          onPress={() => navigation.navigate("DonationForm")}
        />
        <Button
          type={constants.BUTTON_TYPES.FILLED}
          title={languagePendingEventView.ATTEND[language]}
          marginTop={4}
          marginBottom={10}
          onPress={() => navigation.navigate("QRscanner")}
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
  title: {
    fontSize: 28,
    fontWeight: "bold",
    paddingBottom: 16,
  },
  img: {
    height: 300,
    width: "100%",
    borderTopLeftRadius: 32,
    borderBottomRightRadius: 32,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  participate: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  description: {
    fontSize: 18,
  },
});

export default PendingEventView;
