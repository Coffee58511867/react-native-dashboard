import React from "react";
import { TextInput, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function CustomInput({ placeholder, value, onChangeText, keyboardType}){
    return(
        <View>
            <TextInput style={globalStyles.input} 
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            keyboardType={keyboardType}     
            />
        </View>
    )
}