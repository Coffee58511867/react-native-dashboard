import React from "react";
import { TextInput, View } from "react-native";
import { globalStyles } from "../styles/global";
import Button from '../shared/button'

export default function Login(){

    const handleLogin = () => {
        try {
              console.log("Done");
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <View style={{flex: 1, padding: 20}}>
         <TextInput 
         style={globalStyles.input}
         placeholder="Username"
         keyboardType='email-address'
         />
                  <TextInput 
         style={globalStyles.input}
         placeholder="Password"
         keyboardType='visible-password'
         />
         <Button text="Login" onPress={handleLogin}/>
        </View>
    )
}