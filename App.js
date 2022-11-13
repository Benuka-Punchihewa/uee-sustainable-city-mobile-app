import { StatusBar, StyleSheet, View, text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

import DonationThreads from "./screens/DonationThreads";
import Profile from "./screens/Profile";
import HomeStack from "./HomeStack";
import Events from "./screens/Events";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Tab.Navigator
          initialRouteName="HomeStack"
          screenOptions={{
            tabBarActiveTintColor: "#2D6A4F",
          }}
        >
          <Tab.Screen
            name="HomeStack"
            component={HomeStack}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <IoniconsIcon name="home" size={size} color={color} />
              ),
              headerShown: false,
              tabBarShowLabel: false,
            }}
          />

          <Tab.Screen
            name="Events"
            component={Events}
            options={{
              tabBarLabel: "Events",
              tabBarIcon: ({ color, size }) => (
                <IoniconsIcon name="earth" size={size} color={color} />
              ),
              headerShown: false,
              tabBarShowLabel: false,
            }}
          />

          <Tab.Screen
            name="DonationThreads"
            component={DonationThreads}
            options={{
              tabBarLabel: "DonationThreads",
              tabBarIcon: ({ color, size }) => (
                <IoniconsIcon name="heart" size={size} color={color} />
              ),
              headerShown: false,
              tabBarShowLabel: false,
            }}
          />

          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: "Profile",
              tabBarIcon: ({ color, size }) => (
                <IoniconsIcon name="person" size={size} color={color} />
              ),
              headerShown: false,
              tabBarShowLabel: false,
            }}
          />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
  },
});
