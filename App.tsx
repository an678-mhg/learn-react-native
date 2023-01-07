import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunity from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Home from "./screens/Home";
import Details from "./screens/Details";
import BookMark from "./screens/BookMark";
import Profile from "./screens/Profile";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Search from "./screens/Search";

const queryClientOptions = {
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
};

const queryClient = new QueryClient(queryClientOptions);

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="App"
            component={MyTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
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
          headerShown: false,
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
          headerShown: false,
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
          headerShown: false,
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
