import React from 'react';
import {
  StyleSheet, View, SafeAreaView, Text,
} from 'react-native';

function TechnologyScreen2({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome to Backend Development Course by Dragonware
      </Text>
    </View>
  );
}
export default TechnologyScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
