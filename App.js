
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthScreen from './AuthScreen';
import AdminScreen from './AdminScreen';
import LoginScreen from './LoginScreen';
import firebaseApp from './firebaseConfig'; 
import SignupScreen from './SignupScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="AdminScreen" component={AdminScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="SignupScreen" component={SignupScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
