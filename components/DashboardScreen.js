import React, { useState } from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";

export default function DashboardScreen() {
  const [movies, setMovies] = useState([
    { key: "1", name: "Fast and Furious 2020", year: "2023", pub: "John" },
    { key: "2", name: "Fast and Furious 2020", year: "2023", pub: "John" },
    { key: "3", name: "Fast and Furious 2020", year: "2023", pub: "John" },
    { key: "4", name: "Fast and Furious 2020", year: "2023", pub: "John" },
    { key: "5", name: "Fast and Furious 2020", year: "2023", pub: "John" },
  ]);

  return (
    <View style={globalStyles.container}>
    
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <Card>
            <TouchableOpacity>
              <Text>{item.name}</Text>
              <Text>{item.year}</Text>
              <Text>{item.pub}</Text>
            </TouchableOpacity>
          </Card>
        )}
      />
    </View>
  );
}
