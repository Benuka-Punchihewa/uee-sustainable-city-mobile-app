import React from "react";
import { Text, View, StyleSheet } from "react-native";
import AddButton from "../component/AddButton";
import EventCard from "../component/EventCard";

const Events = () => {
  return (
    <View>
      <Text style={styles.title}>Upcomming Events</Text>
      <EventCard />
      <EventCard />
      <EventCard />
      <AddButton />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: "bold",
    paddingBottom: 16,
  },
});

export default Events;
