import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";

const AddButton = () => {
  return <View style={styles.btn}></View>;
};

const styles = StyleSheet.create({
  btn: {
    width: 64,
    height: 64,
    fontSize: 64,
    backgroundColor: "#565656",
    borderRadius: 100,
  },
});

export default AddButton;
