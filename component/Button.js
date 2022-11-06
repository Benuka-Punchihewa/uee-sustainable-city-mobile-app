import { StyleSheet, Text, TouchableOpacity } from "react-native";
import constants from "../constants";

const Button = ({ type, title, marginTop, marginBottom, onPress }) => {
  return (
    <TouchableOpacity
      uppercase={false}
      onPress={onPress}
      style={
        type === constants.BUTTON_TYPES.OUTLINED
          ? {
              ...styles.outlinedButton,
              marginTop: marginTop || 10,
              marginBottom: marginBottom || 10,
            }
          : {
              ...styles.filledButton,
              marginTop: marginTop || 10,
              marginBottom: marginBottom || 10,
            }
      }
    >
      <Text
        style={
          type === constants.BUTTON_TYPES.OUTLINED
            ? styles.outlinedButtonTxt
            : styles.filledButtonTxt
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  outlinedButton: {
    borderWidth: 3,
    borderColor: "#40916C",
    borderRadius: 8,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  outlinedButtonTxt: {
    color: "#40916C",
    fontSize: 20,
    fontWeight: "bold",
  },
  filledButton: {
    borderWidth: 3,
    borderColor: "#40916C",
    backgroundColor: "#40916C",
    borderRadius: 8,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  filledButtonTxt: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Button;
