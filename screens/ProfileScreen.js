import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const User = () => {
return (
	<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
	<Ionicons name="md-person-circle-outline" size={100} color="#006600" />
	</View>
);
};

export default User;
