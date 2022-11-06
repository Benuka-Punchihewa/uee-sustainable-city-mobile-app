import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const AddButton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.btn}>
        <Icon name="plus" size={36} color="#fff" />
      </View>
    </View>
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
