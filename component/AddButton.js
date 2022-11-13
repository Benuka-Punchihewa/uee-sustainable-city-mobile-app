import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const AddButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.btn}>
        <Icon name="ios-add" size={36} color="#fff" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 64,
    height: 64,
    fontSize: 64,
    backgroundColor: "#40916C",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AddButton;
