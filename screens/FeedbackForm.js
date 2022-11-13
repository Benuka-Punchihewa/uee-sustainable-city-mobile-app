import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  StatusBar,
} from "react-native";
import languageFeedbackForm from "../language/language.feedbackForm";
import constants from "../constants";
import Button from "../component/Button";
import { Rating } from "react-native-rating-element";
import { useSelector } from "react-redux";
import { useDimensions } from "@react-native-community/hooks";

const language = "SIN";

const FeedbackForm = () => {
  const language = useSelector((state) => state.language.language);

  const hanclePost = () => {};
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          ...styles.container,
          minHeight:
            useDimensions().screen.height - StatusBar.currentHeight - 10,
        }}
      >
        <Text style={styles.PageTitle}>
          {languageFeedbackForm.WRITE_SOMTHING_ABOUT[language]}
        </Text>
        <Text style={styles.subTitle}>
          #Let's Get Together And Clean Unawatuna Let's Get Together And Clean
          Unawatuna
        </Text>
        <View style={styles.starContainer}>
          <Rating
            rated={3}
            totalCount={5}
            ratingColor="#f1c644"
            ratingBackgroundColor="#d4d4d4"
            size={24}
            readonly // by default is false
            icon="ios-star"
            direction="row" // anyOf["row" (default), "row-reverse", "column", "column-reverse"]
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>
            {languageFeedbackForm.REVIEW[language]}
          </Text>
          <View style={styles.multiLnTxtInputContainer}>
            <TextInput
              style={styles.multiLnTxtInput}
              placeholder={languageFeedbackForm.REVIEW_PLACEHOLDER[language]}
              selectionColor={"#000"}
              multiline={true}
              onChangeText={(val) => setDescription(val)}
              underlineColorAndroid="transparent"
            />
          </View>
        </View>

        <View style={styles.btnContainer}>
          <Button
            type={constants.BUTTON_TYPES.FILLED}
            title={languageFeedbackForm.POST[language]}
            onPress={hanclePost}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  PageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#2D6A4F",
  },
  inputContainer: {
    marginBottom: 25,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  multiLnTxtInputContainer: {
    height: 200,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#D9D9D9",
    borderRadius: 8,
  },
  multiLnTxtInput: {
    flex: 1,
    color: "#424242",
    fontSize: 14,
    textAlignVertical: "top",
  },
  btnContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginTop: 30,
    marginBottom: 10,
  },
  starContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FeedbackForm;
