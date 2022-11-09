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

const options = { headerShown: false };

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={options}
      />
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
      <Stack.Screen name="Login" component={Login} options={options} />
      <Stack.Screen name="Register" component={Register} options={options} />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={options}
      />
      <Stack.Screen
        name="RecordMeterReading"
        component={RecordMeterReading}
        options={options}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
