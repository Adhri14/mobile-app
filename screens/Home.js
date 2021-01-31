import React, { createContext, useState } from 'react';
import {
   View,
   Text,
   StatusBar,
   Button,
   TouchableOpacity,
   StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack'

const HomeStack = createStackNavigator();


const Home = ({ navigation }) => {

   return (
      <View style={styles.container}>
         {/* <StatusBar barStyle='light-content' backgroundColor='#009387' /> */}
         <Text style={styles.text}>Daemon</Text>
         <Button title='Move to Detail Screen' onPress={() => navigation.navigate('DetailScreen')} />
      </View>
   );
};

const HomeStackScreen = ({ navigation }) => {
   return (
      <HomeStack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
         <HomeStack.Screen
            name='Home'
            component={Home}
            options={{
               title: 'Beranda',
               headerStyle: {
                  backgroundColor: '#009387',
                  elevation: 0
               },
               headerTintColor: '#fff',
               headerTitleStyle: {
                  fontWeight: 'bold'
               },
               headerRight: () => (
                  <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginRight: 20, }}>
                     <Icon name='ios-menu' size={30} color='#fff' />
                  </TouchableOpacity>
               )
            }}
         />
      </HomeStack.Navigator>
   )
}

export default HomeStackScreen

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