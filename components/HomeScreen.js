import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function HomeScreen(){
    return(
        <View style={globalStyles.container}>
         <Text>Good Morning</Text>
        </View>
    )
}