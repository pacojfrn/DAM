import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/styles";
import { DynamicList } from "./DynamicList";

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Catálogo de Juegos</Text>
      <View style={styles.body}>
        <DynamicList/>
      </View>
    </View>
  );
}