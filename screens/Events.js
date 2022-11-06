import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import AddButton from "../component/AddButton";
import EventCard from "../component/EventCard";

const Events = () => {
  return (
    <View>
      <ScrollView>
        <Text style={styles.title}>Upcomming Events</Text>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </ScrollView>
      <View style={styles.container}>
        <AddButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: "bold",
    paddingBottom: 16,
  },
  container: {
    bottom: 100,
    right: 0,
    position: "absolute",
  },
});

export default Events;
