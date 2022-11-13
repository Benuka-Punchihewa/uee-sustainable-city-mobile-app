import { Text, View, StyleSheet, ScrollView, StatusBar } from "react-native";
import { useSelector } from "react-redux";
import AddButton from "../component/AddButton";
import EventCard from "../component/EventCard";
import Search from "../component/Search";
import languageEvents from "../language/language.events";
import { useDimensions } from "@react-native-community/hooks";

const Events = ({ navigation }) => {
  const language = useSelector((state) => state.language.language);

  const handleSearch = (value) => {
    console.log(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{languageEvents.EVENTS[language]}</Text>
      <Search
        placeholder={languageEvents.SEARCH_EVENT[language]}
        onSearch={handleSearch}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.ScrollViewContainer}
      >
        <View
          style={{
            ...styles.listContainer,
            minHeight:
              useDimensions().screen.height - StatusBar.currentHeight - 10,
          }}
        >
          <EventCard onPress={() => navigation.navigate("EventView")} />
          <EventCard onPress={() => navigation.navigate("EventView")} />
          <EventCard onPress={() => navigation.navigate("EventView")} />
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
    bottom: 60,
    right: 20,
    position: "absolute",
  },
  listContainer: {
    marginTop: 10,
  },
  ScrollViewContainer: {
    marginTop: 10,
  },
});

export default Events;
