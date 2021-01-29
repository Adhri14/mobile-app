import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Notification = (props) => {
   return (
      <View style={styles.container}>
         {/* <StatusBar barStyle='light-content' backgroundColor='#911cff' /> */}
         <Text style={styles.text}>Notification Screen</Text>
      </View>
   )
}

const NotificationStackScreen = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name='Notification'
            component={Notification}
            options={{
               title: 'Notification',
               headerStyle: {
                  backgroundColor: '#911cff',
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

export default NotificationStackScreen

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
