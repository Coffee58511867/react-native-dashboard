import React, { useState } from "react";
import { TextInput, View , Text, Image} from "react-native";
import { globalStyles } from "../styles/global";
import Button from "../shared/button";
import { SelectList } from "react-native-dropdown-select-list";
import { Ionicons } from "@expo/vector-icons";
import CustomInput from "../shared/CustomInput";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const data = [
    { key: "Canada", value: "Canada" },
    { key: "England", value: "England" },
    { key: "Pakistan", value: "Pakistan" },
    { key: "India", value: "India" },
    { key: "NewZealand", value: "NewZealand" },
  ];
  const [gender, setGender] = useState([
    { key: "Male", value: "Male" },
    { key: "Female", value: "Female" },
    { key: "Other", value: "Other" },
  ]);
  const [selected, setSelected] = React.useState("");

  const handleLogin = () => {
    try {
      console.log("Done");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={globalStyles.container}>
        <Ionicons
            name="md-person-circle-outline"
            size={120}
            color="blue"
          />
        <Text style={{fontSize: 30, padding: 20}}> Welcome Back</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="Username"
        keyboardType="email-address"
        value={username}
        onChangeText={(value) => setUsername(value)}
      />
      <View style={{ width: 310, padding: 5 }}>
        <SelectList setSelected={setSelected} data={data} />
      </View>
      <View style={{ width: 310, padding: 5 }}>
      </View>
      <TextInput
        style={globalStyles.input}
        placeholder="Password"
        keyboardType="visible-password"
        value={password}
        onChangeText={(value) => setPassword(value)}
      />
      <CustomInput
        placeholder="Phone Number"
        keyboardType="visible-password" 
        value={gender}
        onChangeText={value => setPhone(value)}
        />
      <Button text="Login" onPress={handleLogin} />
    </View>
  );
}
