import React, { useState , Component} from "react";
import { TextInput, View } from "react-native";
import { globalStyles } from "../styles/global";
import Button from '../shared/button'
import { SelectList } from "react-native-dropdown-select-list";

export default class App extends React.Component {
  
  render() {
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [district, setDistrict] = useState([
      {name : "Select your district"},
      {name : "Berea"},
      {name : "Botha-Buthe"},
      {name : "Maseru"},
      {name : "Mokhotlong"},
      {name : "Leribe"},
      {name : "Mafeteng"},
      {name : "Mohale's Hoek"},
    ]);
    const data = [
      {key:'Canada', value:'Canada'},
      {key:'England', value:'England'},
      {key:'Pakistan', value:'Pakistan'},
      {key:'India', value:'India'},
      {key:'NewZealand', value:'NewZealand'},
    ]
    const [password, setPassword] = useState("");
    const [selected, setSelected] = React.useState("");
    const handleLogin = () => {
        try {
              console.log("Done");
              console.log(selected);
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
      value={username}
      onChangeText={value => setUsername(value)}

      />
      <SelectList setSelected={setSelected} data={data}  />
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
}

