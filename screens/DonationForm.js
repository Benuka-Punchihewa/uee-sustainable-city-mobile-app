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
import languageDonationForm from "../language/language.donationForm";
import Icon from "react-native-vector-icons/FontAwesome";
import Button from "../component/Button";
import constants from "../constants";
import { useDimensions } from "@react-native-community/hooks";
import { useState } from "react";

const language = "SIN";

const DonationForm = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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
            useDimensions().screen.height - StatusBar.currentHeight - 30,
        }}
      >
        <Text style={styles.PageTitle}>
          {languageDonationForm.CREATE_DONATION_THREAD[language]}
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>
            {languageDonationForm.TITLE[language]}
          </Text>
          <View style={styles.txtInputContainer}>
            <TextInput
              style={styles.input}
              placeholder={
                languageDonationForm.DONATION_TITLE_PLACEHOLDER[language]
              }
              selectionColor={"#000"}
              onChangeText={(val) => setTitle(val)}
              underlineColorAndroid="transparent"
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>
            {languageDonationForm.DESCRIPTION[language]}
          </Text>
          <View style={styles.multiLnTxtInputContainer}>
            <TextInput
              style={styles.multiLnTxtInput}
              placeholder={
                languageDonationForm.DONATION_DESCRIPTION_PLACEHOLDER[language]
              }
              selectionColor={"#000"}
              multiline={true}
              onChangeText={(val) => setDescription(val)}
              underlineColorAndroid="transparent"
            />
          </View>
        </View>

        <Button
          type={constants.BUTTON_TYPES.OUTLINED}
          title={languageDonationForm.UPLOAD_IMAGE[language]}
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
});

export default DonationForm;
