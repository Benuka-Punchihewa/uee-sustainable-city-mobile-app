import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import DonationThreadForm from "./screens/DonationThreadForm";
import DonationMain from "./screens/DonationMain";
import DonationForm from "./screens/DonationForm";
import WaterBills from "./screens/WaterBills";
import ElectricityBills from "./screens/ElectricityBills";
import MyJobs from "./screens/MyJobs";
import GetStarted from "./screens/GetStarted";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import ForgetPassword from "./screens/auth/ForgetPassword";
import RecordMeterReading from "./screens/RecordMeterReading";
import MyEventParticipated from "./screens/MyEventParticipated";
import MyEvent from "./screens/MyEvent";
import MyEventOrganized from "./screens/MyEventOrganized";
import EventForm from "./screens/EventForm";
import Events from "./screens/Events";
import EventView from "./screens/EventView";
import PendingEventView from "./screens/PendingEventView";
import QRscanner from "./screens/QRscanner";
import ParticipatedEventView from "./screens/ParticipatedEventView";
import FeedbackForm from "./screens/FeedbackForm";
import DonationThreads from "./screens/DonationThreads";
import Profile from "./screens/Profile";

const options = { headerShown: false };

const Stack = createStackNavigator();

import { StatusBar, StyleSheet, View, text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="GetStarted"
            component={GetStarted}
            options={options}
          />
          <Stack.Screen name="Login" component={Login} options={options} />
          <Stack.Screen
            name="Register"
            component={Register}
            options={options}
          />
          <Stack.Screen
            name="ForgetPassword"
            component={ForgetPassword}
            options={options}
          />
          <Stack.Screen
            name="Home"
            component={NavigatorStack}
            options={options}
          />
          <Stack.Screen
            name="DonationThreadForm"
            component={DonationThreadForm}
            options={options}
          />
          <Stack.Screen
            name="DonationMain"
            component={DonationMain}
            options={options}
          />
          <Stack.Screen
            name="DonationForm"
            component={DonationForm}
            options={options}
          />
          <Stack.Screen
            name="WaterBills"
            component={WaterBills}
            options={options}
          />
          <Stack.Screen
            name="ElectricityBills"
            component={ElectricityBills}
            options={options}
          />
          <Stack.Screen name="MyJobs" component={MyJobs} options={options} />
          <Stack.Screen
            name="RecordMeterReading"
            component={RecordMeterReading}
            options={options}
          />
          <Stack.Screen name="Events" component={Events} options={options} />
          <Stack.Screen
            name="MyEventParticipated"
            component={MyEventParticipated}
            options={options}
          />
          <Stack.Screen name="MyEvent" component={MyEvent} options={options} />
          <Stack.Screen
            name="MyEventOrganized"
            component={MyEventOrganized}
            options={options}
          />
          <Stack.Screen
            name="EventView"
            component={EventView}
            options={options}
          />
          <Stack.Screen
            name="EventForm"
            component={EventForm}
            options={options}
          />

          <Stack.Screen
            name="PendingEventView"
            component={PendingEventView}
            options={options}
          />
          <Stack.Screen
            name="ParticipatedEventView"
            component={ParticipatedEventView}
            options={options}
          />
          <Stack.Screen
            name="FeedbackForm"
            component={FeedbackForm}
            options={options}
          />
          <Stack.Screen
            name="QRscanner"
            component={QRscanner}
            options={options}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
  },
});

const NavigatorStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#2D6A4F",
      }}
    >
      <Tab.Screen
        // TODO: change this
        name="HomeS"
        component={Home}
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
  );
};

export default HomeStack;
