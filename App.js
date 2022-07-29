import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tabs from './navigation/tabDesign';

import ServicesScreen1 from './screens/ServicesScreen1';
import ServicesScreen2 from './screens/ServicesScreen2';
import ServicesScreen3 from './screens/ServicesScreen3';
import TechnologyScreen1 from './screens/TechnologyScreen1';
import TechnologyScreen2 from './screens/TechnologyScreen2';
import TechnologyScreen3 from './screens/TechnologyScreen3';
import TechnologyScreen4 from './screens/TechnologyScreen4';

const Stack = createNativeStackNavigator();

function Run() {
  return (
    <Tabs />
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Run">
        <Stack.Screen name="HomePage" component={Run} options={{ headerShown: false }} />
        <Stack.Screen name="Android App Development" component={ServicesScreen1} />
        <Stack.Screen name="Web App Development" component={ServicesScreen2} />
        <Stack.Screen name="UI/UX" component={ServicesScreen3} />
        <Stack.Screen name="Frontend Development" component={TechnologyScreen1} />
        <Stack.Screen name="Backend Development" component={TechnologyScreen2} />
        <Stack.Screen name="Database" component={TechnologyScreen3} />
        <Stack.Screen name="Mobile App Development" component={TechnologyScreen4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
