import * as React from 'react';
import {
  ScrollView, SafeAreaView, StyleSheet, View, StatusBar, TouchableOpacity, Text
} from 'react-native';

function ServicesScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <ScrollView>
        <View style={styles.container}>
            <TouchableOpacity 
              style={styles.buttonContainer}
              onPress={() => navigation.navigate('Android App Development')}
            >
              <Text style={styles.text}>Android App Development</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <TouchableOpacity 
              style={styles.buttonContainer}
              onPress={() => navigation.navigate('Web App Development')}
            >
              <Text style={styles.text}>Web App Development</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <TouchableOpacity 
              style={styles.buttonContainer}
              onPress={() => navigation.navigate('UI/UX')}
            >
              <Text style={styles.text}>UI/UX</Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default ServicesScreen;

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginVertical: '50%'
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
