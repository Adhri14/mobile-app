import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
   Text, View, StyleSheet, StatusBar
} from 'react-native';

const DetailStack = createStackNavigator();

const DetailScreen = () => {
   return (
      <View style={styles.container}>
         {/* <StatusBar barStyle='light-content' backgroundColor='#4f92ff' /> */}
         <Text style={styles.text}>Muspita Srihandayani</Text>
      </View>
   );
};

const DetailStackScreen = () => {
   return (
      <DetailStack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
         <DetailStack.Screen
            name='DetailScreen'
            component={DetailScreen}
            options={{
               title: 'Detail',
               headerStyle: {
                  backgroundColor: '#4f92ff',
                  elevation: 0
               },
               headerTintColor: '#fff',
               headerTitleStyle: {
                  fontWeight: 'bold'
               }
            }}
         />
      </DetailStack.Navigator>
   )
}

export default DetailStackScreen

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   text: {
      fontSize: 40,
      marginBottom: 10
   }
});