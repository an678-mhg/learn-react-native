import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunity from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Home from "../screens/Home";
import BookMark from "../screens/BookMark";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import { TabParamList } from "../types/index.types";

const Tab = createBottomTabNavigator<TabParamList>();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunity
              color={focused ? "#1D1B52" : "#bdc3c7"}
              name="movie-roll"
              size={30}
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
              size={30}
            />
          ),
          title: "",
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={BookMark}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunity
              color={focused ? "#1D1B52" : "#bdc3c7"}
              name="bookmark"
              size={30}
            />
          ),
          title: "",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              color={focused ? "#1D1B52" : "#bdc3c7"}
              name="user"
              size={30}
            />
          ),
          title: "",
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
