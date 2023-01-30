import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "./screens/Details";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import BottomTabs from "./components/BottomTabs";
import { StackParamList } from "./types/index.types";
import Results from "./screens/Results";
import Cast from "./screens/Cast";
import { StatusBar } from "react-native";

const queryClientOptions = {
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
};

const queryClient = new QueryClient(queryClientOptions);

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="App" component={BottomTabs} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Results" component={Results} />
          <Stack.Screen name="Cast" component={Cast} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar backgroundColor="#333" />
    </QueryClientProvider>
  );
}
