// AdminScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AdminScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Screen</Text>
      <Text>Welcome, Admin!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9e9e9',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default AdminScreen;
