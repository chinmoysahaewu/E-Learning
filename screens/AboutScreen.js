import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, Image } from 'react-native';


function AboutScreen() {
  return (
    <SafeAreaView style={styles.viewContainer}>
      <View style={{padding: 10}}>
        <Text style={styles.title}>
          Meet the Dragonware Team
        </Text>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require('../assets/icons/CEO.png')}
            resizeMode="center"
            style={{
              width: 100,
              height: 100,
            }}
          />
        </View>
        <Text style={{ textAlign: 'center' }}>
          JOHN(CEO), Dragonware
        </Text>
        <View style={styles.container}>
          <Image
            source={require('../assets/icons/CTO.png')}
            resizeMode="center"
            style={{
              width: 100,
              height: 100,
            }}
          />
        </View>
        <Text style={{ textAlign: 'center' }}>
          PETER(CTO), Dragonware
        </Text>
        <View style={styles.container}>
          <Image
            source={require('../assets/icons/ME.jpg')}
            resizeMode="center"
            style={{
              width: 100,
              height: 100,
            }}
          />
        </View>
        <Text style={{ textAlign: 'center' }}>
          Chinmoy Saha(Project Manager), Dragonware
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AboutScreen;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
    padding: 40,
  },
});
