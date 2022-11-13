import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import DocumentPicker from "react-native-document-picker";
import languageDonationThreadForm from "../language/language.donationThreadForm";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomButton from "../component/Button";
import constants from "../constants";
import { useDimensions } from "@react-native-community/hooks";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

const language = "SIN";

const DonationThreadForm = () => {

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [targetDate, setTargetDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState("");

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setTargetDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const getFormattedDate = (dateObj) => {
    return moment(dateObj).format("YYYY-MM-DD");
  };

  const handleImagePickerButtonPress = async () => {
    try {
      const pickerResult = await DocumentPicker.pickSingle({
        presentationStyle: "fullScreen",
        copyTo: "cachesDirectory",
        type: ["image/jpeg", "image/png"],
      });
      setImage(pickerResult);
    } catch (err) {
      console.log(err);
    }
  };

  const handleImageRemove = () => {};

  const handleProceed = () => {};

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
        <Text style={styles.PageTitle}>
          {languageDonationThreadForm.CREATE_DONATION_THREAD[language]}
        </Text>

        {/* Donation Title */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>
            {languageDonationThreadForm.TITLE[language]}
          </Text>
          <View style={styles.txtInputContainer}>
            <TextInput
              style={styles.input}
              placeholder={
                languageDonationThreadForm.DONATION_TITLE_PLACEHOLDER[language]
              }
              selectionColor={"#000"}
              onChangeText={(val) => setTitle(val)}
              underlineColorAndroid="transparent"
            />
          </View>
        </View>

        {/* Target*/}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>
            {languageDonationThreadForm.GOAL[language]}
          </Text>
          <View style={styles.txtInputContainer}>
            <TextInput
              style={styles.input}
              placeholder={
                languageDonationThreadForm.DONATION_GOAL_PLACEHOLDER[language]
              }
              keyboardType="numeric"
              selectionColor={"#000"}
              onChangeText={(val) => setTarget(val)}
              underlineColorAndroid="transparent"
            />
          </View>
        </View>

        {/* Goal Date */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>
            {languageDonationThreadForm.GOAL_DATE[language]}
          </Text>
          <CustomButton
            type={constants.BUTTON_TYPES.OUTLINED}
            title={languageDonationThreadForm.GOAL_DATE_BTN_TEXT[language]}
            onPress={showDatepicker}
          />
          <Text style={styles.dateTxt}>
            {languageDonationThreadForm.SELECTED_DATE[language]}:&nbsp;
            {getFormattedDate(targetDate)}
          </Text>
          {show && (
            <DateTimePicker
              value={targetDate}
              mode={"date"}
              onChange={onDateChange}
            />
          )}
        </View>

        {/* Donation Thread Description */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>
            {languageDonationThreadForm.DESCRIPTION[language]}
          </Text>
          <View style={styles.multiLnTxtInputContainer}>
            <TextInput
              style={styles.multiLnTxtInput}
              placeholder={
                languageDonationThreadForm.DONATION_DESCRIPTION_PLACEHOLDER[
                  language
                ]
              }
              selectionColor={"#000"}
              multiline={true}
              onChangeText={(val) => setDescription(val)}
              underlineColorAndroid="transparent"
            />
          </View>
        </View>

        {/* Select Image For Donation Thread */}
        <CustomButton
          type={constants.BUTTON_TYPES.OUTLINED}
          title={languageDonationThreadForm.SELECT_IMAGE[language]}
          onPress={handleImagePickerButtonPress}
        />
        <View style={styles.thumbnailContainer}>
          <Image
            source={{
              uri: "http://www.greenschools.net/img/pic/Zero-Waste-School-Events-thumbnail.jpg",
            }}
            style={styles.thumbnail}
          />
          <View style={styles.imgMetaData}>
            <Text style={styles.metaDataTxt}>Image.jpg</Text>
            <Text style={styles.metaDataTxt}>5.6MB</Text>
          </View>
          <View style={styles.Thumbnailoptions}>
            <Icon
              name="close"
              size={22}
              color="#40916C"
              onPress={handleImageRemove}
            />
          </View>
        </View>

        <View style={styles.proceedBtnContainer}>
          <CustomButton
            type={constants.BUTTON_TYPES.FILLED}
            title={languageDonationThreadForm.PROCEED[language]}
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
  multiLnTxtInput: {
    flex: 1,
    color: "#424242",
    fontSize: 14,
    textAlignVertical: "top",
  },
  thumbnailContainer: {
    flexDirection: "row",
    backgroundColor: "#D8F3DC",
    borderRadius: 8,
    height: 100,
  },
  thumbnail: {
    borderRadius: 8,
    height: 100,
    width: 100,
  },
  imgMetaData: {
    flex: 2,
    justifyContent: "center",
    marginHorizontal: 10,
  },
  metaDataTxt: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#40916C",
  },
  Thumbnailoptions: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  proceedBtnContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginTop: 30,
    marginBottom: 10,
  },
  dateTxt: {
    fontSize: 14,
  },
});

export default DonationThreadForm;
