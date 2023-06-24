import { useEffect} from "react";
import { StyleSheet, Text, View} from "react-native";

export default function Splashcreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.push("Home");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0080ff",
    justifyContent: "center",

    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 30,
  },
});
