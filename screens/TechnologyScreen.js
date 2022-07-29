import * as React from 'react';
import {
  ScrollView, SafeAreaView, StyleSheet, View, StatusBar, TouchableOpacity, Text
} from 'react-native';

function TechnologyScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <ScrollView>
        <View style={styles.container}>
            <TouchableOpacity 
              style={styles.buttonContainer}
              onPress={() => navigation.navigate('Frontend Development')}
            >
              <Text style={styles.text}>Frontend Development</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <TouchableOpacity 
              style={styles.buttonContainer}
              onPress={() => navigation.navigate('Backend Development')}
            >
              <Text style={styles.text}>Backend Development</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <TouchableOpacity 
              style={styles.buttonContainer}
              onPress={() => navigation.navigate('Database')}
            >
              <Text style={styles.text}>Database</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <TouchableOpacity 
              style={styles.buttonContainer}
              onPress={() => navigation.navigate('Mobile App Development')}
            >
              <Text style={styles.text}>Mobile App Development</Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default TechnologyScreen;

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginVertical: '40%'
  },
  container: {
    padding: 20,
    justifyContent: 'center',
    alignContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#158484",
    padding: 15,
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: 'grey',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
