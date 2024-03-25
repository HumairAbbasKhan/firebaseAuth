// AuthScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import firebaseConfig from './firebaseConfig';

const AuthScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const auth = getAuth();

  const handleAuthentication = async () => {
    try {
      if (email === 'admin' && password === 'admin') {
        console.log('Navigating to AdminScreen...');
        navigation.navigate('AdminScreen');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in successfully!');
        navigation.navigate('LoginScreen')
      }
    } catch (error) {
      console.error('Authentication error:', error.message);
    }
  };

  return (
    <View style={styles.authContainer}>
       <Text style={styles.title}>Sign In</Text>
       <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button title="Sign In" onPress={handleAuthentication} color="#3498db" />
      </View>
      <View style={styles.SignupBtn}>
         <Button title="Don't have account. Signup" onPress={() => navigation.navigate('SignupScreen')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#e9e9e9',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 16,
  },
});

export default AuthScreen;
