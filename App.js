import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import home from './components/home'
import Statistics from './components/Statistics'
import Symptoms from './components/Symptoms'
{/*import Display from './Screens/Display'
import Update from './Screens/Update'
*/}
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={home}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Statistics" component={Statistics} />
        <Stack.Screen name="Symptoms" component={Symptoms} options={{headerShown: false}} />
        {/*<Stack.Screen name="Display" component={Display} />
        <Stack.Screen name="Update" component={Update} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack
