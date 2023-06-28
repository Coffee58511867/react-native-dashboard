import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { globalStyles } from "../styles/global";
import Button from '../shared/button'

export default function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        try {
              console.log("Done");
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <View style={globalStyles.container}>
         <TextInput 
         style={globalStyles.input}
         placeholder="Username"
         keyboardType='email-address'
         value={username}
         onChangeText={value => setUsername(value)}
         />
                  <TextInput 
         style={globalStyles.input}
         placeholder="Password"
         keyboardType='visible-password'
         value={password}
         onChangeText={value => setPassword(value)}
         />
         <Button text="Login" onPress={handleLogin}/>
        </View>
    )
}