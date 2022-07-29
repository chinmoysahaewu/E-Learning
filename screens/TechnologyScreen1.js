import React from 'react';
import {
  StyleSheet, View, SafeAreaView, Text,
} from 'react-native';


function TechnologyScreen1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome to Frontend Development Course by Dragonware
      </Text>
    </View>
  );
}
export default TechnologyScreen1;

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
