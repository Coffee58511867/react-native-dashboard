import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../styles/global";
import Card from '../shared/card'

export default function HomeScreen(){
    return(
        <View style={globalStyles.container}>
            <Card>
            <Text>Good Morning</Text>
            </Card>
       
        </View>
    )
}