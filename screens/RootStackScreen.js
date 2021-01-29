import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import SignUp from '../screens/SignUpScreen'
import Splash from '../screens/SplashScreen'
import Login from '../screens/LoginScreen';

const RootStact = createStackNavigator()

const RootStackScreen = () => {
   return (
      <RootStact.Navigator headerMode='none'>
         <RootStact.Screen name='Splash' component={Splash} />
         <RootStact.Screen name='Login' component={Login} />
         <RootStact.Screen name='SignUp' component={SignUp} />
      </RootStact.Navigator>
   )
}

export default RootStackScreen

const styles = StyleSheet.create({})
