import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  StatusBar,
} from "react-native";
import constants from "../constants";
import languageDonationForm from "../language/language.donationForm";
import { RadioButton } from "react-native-paper";
import Button from "../component/Button";
import { useDimensions } from "@react-native-community/hooks";
import { useSelector } from "react-redux";

const DonationForm = () => {
  const language = useSelector((state) => state.language.language);

  const [checked, setChecked] = useState(constants.PAYMENT_METHODS.POINTS);

  const handleProceed = () => {};

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
          {language === constants.LANGUAGES.ENGLISH ? (
            <>Donation To #{"TeamTrees"}</>
          ) : (
            <>#{"TeamTrees"} ට පරිත්‍යාග කරන්න</>
          )}
        </Text>

        {/* Amount */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>
            {languageDonationForm.AMOUNT[language]}
          </Text>
          <View style={styles.txtInputContainer}>
            <TextInput
              style={styles.input}
              placeholder={languageDonationForm.AMOUNT_PLACEHOLDER[language]}
              selectionColor={"#000"}
              // onChangeText={(val) => setTitle(val)}
              underlineColorAndroid="transparent"
            />
          </View>
        </View>

        {/* Comment */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>
            {languageDonationForm.COMMENT[language]}
          </Text>
          <View style={styles.multiLnTxtInputContainer}>
            <TextInput
              style={styles.multiLnTxtInput}
              placeholder={languageDonationForm.COMMENT_PLACEHOLDER[language]}
              selectionColor={"#000"}
              multiline={true}
              // onChangeText={(val) => setDescription(val)}
              underlineColorAndroid="transparent"
            />
          </View>
        </View>

        {/* Donation Type */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>
            {languageDonationForm.AMOUNT[language]}
          </Text>
          <View>
            <View style={styles.optionContainer}>
              <RadioButton
                value={constants.PAYMENT_METHODS.POINTS}
                status={
                  checked === constants.PAYMENT_METHODS.POINTS
                    ? "checked"
                    : "unchecked"
                }
                color={"#2D6A4F"}
                onPress={() => setChecked(constants.PAYMENT_METHODS.POINTS)}
              />
              <Text style={styles.optionLabel}>
                {languageDonationForm.POINTS[language]}
              </Text>
            </View>
            <View style={styles.optionContainer}>
              <RadioButton
                value={constants.PAYMENT_METHODS.ONLINE}
                status={
                  checked === constants.PAYMENT_METHODS.ONLINE
                    ? "checked"
                    : "unchecked"
                }
                color={"#2D6A4F"}
                onPress={() => setChecked(constants.PAYMENT_METHODS.ONLINE)}
              />
              <Text style={styles.optionLabel}>
                {languageDonationForm.ONLINE[language]}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.proceedBtnContainer}>
          <Button
            type={constants.BUTTON_TYPES.FILLED}
            title={languageDonationForm.PROCEED[language]}
            onPress={handleProceed}
          />
        </View>
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
  PageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 25,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  txtInputContainer: {
    height: 48,
    paddingHorizontal: 20,
    backgroundColor: "#D9D9D9",
    borderRadius: 8,
  },
  input: {
    flex: 1,
    color: "#424242",
    fontSize: 14,
  },
  multiLnTxtInputContainer: {
    height: 200,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#D9D9D9",
    borderRadius: 8,
  },
  optionContainer: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
  },
  optionLabel: {
    alignSelf: "center",
  },
  proceedBtnContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginTop: 30,
    marginBottom: 10,
  },
});

export default DonationForm;
