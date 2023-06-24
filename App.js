import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./components/HomeScreen";
import SplashScreen from "./components/SplashScreen";
import DashboardScreen from "./components/DashboardScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#0080ff",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Splash"
          options={{
            headerShown: false,
          }}
          component={SplashScreen}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
