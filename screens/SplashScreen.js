import React from 'react'
import { TouchableOpacity, Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable'

const SplashScreen = ({ navigation }) => {
   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <Animatable.Image
               style={styles.logo}
               resizeMode='stretch'
               source={require('../assets/profile.jpg')}
               animation='bounceIn'
               duration={2500}
            />
         </View>
         <Animatable.View animation='fadeInUpBig' duration={1500} style={styles.footer}>
            <Text style={styles.title}>Stay connected with everyone!</Text>
            <Text style={styles.text}>Sign in with account</Text>
            <View style={styles.button}>
               <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                  <LinearGradient
                     colors={['#08d4c4', '#01ab9d']}
                     style={styles.signIn}
                  >
                     <Text style={styles.textSign}>Get Started</Text>
                     <Icon name='navigate-next' size={20} color='#fff' />
                  </LinearGradient>
               </TouchableOpacity>
            </View>
         </Animatable.View>
      </View>
   )
}

export default SplashScreen

const { height } = Dimensions.get('screen')
const height_logo = height * 0.28

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#009387'
   },
   header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
   },
   footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
   },
   logo: {
      width: height_logo,
      height: height_logo,
      borderRadius: 10000
   },
   title: {
      color: '#333',
      fontWeight: 'bold',
      fontSize: 40,
      marginTop: 5
   },
   text: {
      color: 'grey',
      marginTop: 5,
      fontSize: 16
   },
   button: {
      alignItems: 'flex-end',
      marginTop: 30
   },
   signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
   },
   textSign: {
      color: 'white',
      fontWeight: 'bold'
   }
})
