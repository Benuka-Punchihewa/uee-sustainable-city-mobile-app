import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import AddButton from "../component/AddButton";
import EventCard from "../component/EventCard";
import Search from "../component/Search";
import languageEvents from "../language/language.events";

const Events = ({ navigation }) => {
  const language = useSelector((state) => state.language.language);

  const handleSearch = (value) => {
    console.log(value);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>{languageEvents.EVENTS[language]}</Text>
        <Search
          placeholder={languageEvents.SEARCH_EVENT[language]}
          onSearch={handleSearch}
        />
        <View style={styles.listContainer}>
          <EventCard onPress={() => navigation.navigate("EventView")} />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </View>
      </ScrollView>
      <View style={styles.btncontainer}>
        <AddButton onPress={() => navigation.navigate("EventForm")} />
      </View>
    </View>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingBottom: 16,
  },
  btncontainer: {
    bottom: 40,
    right: 10,
    position: "absolute",
  },
  listContainer: {
    marginTop: 10,
  },
});

export default Events;
