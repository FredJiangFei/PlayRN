import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import colors from '../config/colors';

export default function TeamDetailsScreen({ route, navigation }) {
  const team = route.params;
  return (
    <View>
      <Image style={styles.image} source={{ uri: team.imageUrl }} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{team.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },

  detailsContainer: {
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: '500',
  },

  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },

  userContainer: {
    marginVertical: 40,
  },
});
