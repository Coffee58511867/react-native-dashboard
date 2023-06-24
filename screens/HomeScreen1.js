import React from "react";
import { Image, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";

const Home1 = () => {

	const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};
  return (
    <View style={globalStyles.container}>
      <Image style={globalStyles.img} source={require("../assets/icon.png")} />
	  <Image style={globalStyles.img} source={image} />
    </View>
  );
};

export default Home1;
