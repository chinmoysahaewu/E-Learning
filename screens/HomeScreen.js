import React from 'react';
import {
  StyleSheet, View, Image,
} from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/icons/home.jpg')}
        resizeMode="center"
        style={{
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
