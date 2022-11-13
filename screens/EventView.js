import {
  Text,
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import constants from "../constants";

const EventView = ({ navigation }) => {
  const language = useSelector((state) => state.language.language);

  return (
    <View style={styles.container}>
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
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnborder}>
          <Text style={styles.btnSecText}>
            {language === constants.LANGUAGES.ENGLISH ? (
              <>Make a Donation</>
            ) : (
              <>පරිත්‍යාගයක් කරන්න</>
            )}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>
            {language === constants.LANGUAGES.ENGLISH ? (
              <>participate</>
            ) : (
              <>සහභාගිවන්න</>
            )}
          </Text>
        </TouchableOpacity>
      </View>
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
  btnContainer: {
    flex: 1,
    top: 100,
  },
  btn: {
    height: 60,
    marginTop: 10,
    backgroundColor: "#40916C",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 20,
  },
  btnborder: {
    height: 60,
    marginTop: 10,
    borderColor: "#40916C",
    borderWidth: 5,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  btnSecText: {
    color: "#40916C",
    fontSize: 20,
  },
});

export default EventView;
