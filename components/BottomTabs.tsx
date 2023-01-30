import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Home from "../screens/Home";
import Search from "../screens/Search";
import { TabParamList } from "../types/index.types";

const Tab = createBottomTabNavigator<TabParamList>();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: 50, paddingTop: 10 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              color={focused ? "#1D1B52" : "#bdc3c7"}
              name="home"
              size={25}
            />
          ),
          title: "",
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              color={focused ? "#1D1B52" : "#bdc3c7"}
              name="search1"
              size={25}
            />
          ),
          title: "",
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
