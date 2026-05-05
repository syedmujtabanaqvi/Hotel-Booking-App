import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserProfile from './src/screens/UserProfile'
import Booking from './src/screens/Booking'
import Booknow from './src/screens/Booknow'
import Login from './src/screens/Login'
import Savecard from './src/screens/Savecard'
import Search from './src/screens/Search'
import Signup from './src/screens/Signup'
import Searchandfilter from './src/screens/Searchandfilter'
const Bottom = createBottomTabNavigator()
const Stack = createNativeStackNavigator();

function Mytab() {
  return (
    
    <Bottom.Navigator screenOptions={{ tabBarStyle: { backgroundColor: '#111425' } }}>
   
    <Bottom.Screen options={{ headerShown: false ,tabBarIcon: () => (<Image source={require('./assets/image/home.png')} style={{ width: 30, height: 30, tintColor: 'white' }}></Image>)}} name='Booknow' component={Booknow} />

      <Bottom.Screen options={{ headerShown: false, tabBarIcon: () => (<Image source={require('./assets/image/save.png')} style={{ width: 30, height: 30, tintColor: 'white' }}></Image>) }} name='Save'  component={Savecard} />
  
      <Bottom.Screen options={{ headerShown: false, tabBarIcon: () => (<Image source={require('./assets/image/search.png')} style={{ width: 30, height: 30, tintColor: 'white' }}></Image>) }} name='Search' component={Search} />

      <Bottom.Screen options={{ headerShown: false, tabBarIcon: () => (<Image source={require('./assets/image/login.png')} style={{ width: 30, height: 30, tintColor: 'white' }}></Image>) }} name='Login' component={Login} />
   
   <Bottom.Screen options={{ headerShown: false, tabBarItemStyle: { display: 'none' } }} name='Booking' component={Booking} />
<Bottom.Screen options={{ headerShown: false, tabBarItemStyle: { display: 'none' } }} name='Searchandfilter' component={Searchandfilter} />

     </Bottom.Navigator>



  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        
        <Stack.Screen name="Home" component={Mytab} />
<Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})