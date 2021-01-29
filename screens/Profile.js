import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Profile = (props) => {
   return (
      <View style={styles.container}>
         {/* <StatusBar barStyle='light-content' backgroundColor='#ff1269' /> */}
         <Text style={styles.text}>Profile Screen</Text>
      </View>
   )
}

const ProfileStackScreen = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name='Profile'
            component={Profile}
            options={{
               title: 'Profile',
               headerStyle: {
                  backgroundColor: '#ff1269',
                  elevation: 0
               },
               headerTintColor: '#fff',
               headerTitleStyle: {
                  fontWeight: 'bold'
               },
               headerTitleAlign: 'center'
            }}

         />
      </Stack.Navigator>
   )
}

export default ProfileStackScreen

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff'
   },
   text: {
      fontSize: 20,
      fontWeight: '800'
   }
})