import { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Search = ({ placeholder, onSearch }) => {
  const [value, setValue] = useState("");

  return (
    <View style={styles.searchSection}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        selectionColor={"#000"}
        onSubmitEditing={() => onSearch(value)}
        onChangeText={(val) => setValue(val)}
        underlineColorAndroid="transparent"
      />
      <Icon name="search" size={30} color="#9E9D9D" />
    </View>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    height: 55,
    borderRadius: 8,
    paddingHorizontal: 20,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "#D9D9D9",
    color: "#424242",
    fontSize: 14,
  },
});

export default Search;
