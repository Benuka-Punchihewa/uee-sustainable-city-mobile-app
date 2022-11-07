import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import DonationThreadForm from "./screens/DonationThreadForm";
import DonationMain from "./screens/DonationMain";
import DonationForm from "./screens/DonationForm";

const options = { headerShown: false };

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={options} />
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
    </Stack.Navigator>
  );
};

export default HomeStack;
