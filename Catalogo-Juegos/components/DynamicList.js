import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import {games} from "../data/games"
import { styles } from "../styles/styles";

export const DynamicList = () => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={games}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
            <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.year}>Año: {item.year}</Text>
            <Text style={styles.sales}>Cantidad vendida: {item.sales}</Text>
          </View>)}
      />
    </View> 
  );
};