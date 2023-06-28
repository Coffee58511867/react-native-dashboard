import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../styles/global";
import CustomButton from "../shared/button";

export default function HomeScreen({ navigation }) {
  const handleDashboard = () => {
    try {
      navigation.push("Dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  const handleDashboard2 = () => {
    try {
      navigation.push("HomePage");
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogin = () => {
    try {
      navigation.push("Login");
    } catch (error) {
      console.log(error);
    }
  };
  const handleRegister = () => {
    try {
      navigation.push("Register");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Good Morning</Text>
      <CustomButton text="Go to Dashboard" onPress={handleDashboard} />
      <CustomButton text="Login" onPress={handleLogin} />
      <CustomButton text="Create an Account" onPress={handleRegister} />
      <CustomButton text="Go to Dashboard2" onPress={handleDashboard2} />
    </View>
  );
}
