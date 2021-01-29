import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';

const Stack = createStackNavigator()

const Bookmark = () => {
   return (
      <View style={styles.container}>
         <Text style={styles.text}>Page Bookmark</Text>
      </View>
   )
}

const BookmarkScreen = ({ navigation }) => {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name='Bookmark'
            component={Bookmark}
            options={{
               title: 'Bookmark',
               headerStyle: {
                  elevation: 0
               },
               headerLeft: (props) => (
                  <HeaderBackButton
                     {...props}
                     onPress={() => {
                        navigation.goBack()
                     }}
                  />
               ),
               headerTintColor: '#333',
               headerTitleStyle: {
                  fontWeight: 'bold'
               },
               headerTitleAlign: 'center'
            }}

         />
      </Stack.Navigator>
   )
}

export default BookmarkScreen

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff'
   },
   text: {
      fontSize: 20,
      fontWeight: 'bold'
   }
})
