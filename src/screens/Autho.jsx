import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';

function App() {
  useEffect(() => {
    // 1. Immediate Check (Yeh foren khud call ho kar status bata dega)
    const user = auth().currentUser;
    if (user) {
      console.log("Immediate Check: User is logged in as: ", user.email);
    } else {
      console.log("Immediate Check: No user logged in yet.");
    }

    // 2. Real-time Listener (Jo background mein login/logout detect karega)
    const subscriber = auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("Listener: Firebase Connected! User is: ", user.email);
      } else {
        console.log("Listener: Firebase Connected! No user logged in yet.");
      }
    });

    return subscriber; // Component unmount hone par memory leak se bachanay ke liye
  }, []);

  // Return mein empty tags (<></>) ya View dena zaroori hota hai
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Firebase Auth Check Running... Check your Console!</Text>
    </View>
  );
}

export default App;