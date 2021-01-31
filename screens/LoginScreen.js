import React from 'react'
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import * as Animatable from 'react-native-animatable'
import { AuthContext } from '../components/context'
import Users from '../models/user'

const LoginScreen = ({ navigation }) => {
   const [data, setData] = React.useState({
      username: '',
      password: '',
      check_textInputChange: false,
      secureTextEntry: true,
      isValidUsername: true,
      isValidPassword: true
   })

   const { signIn } = React.useContext(AuthContext)

   const textInputChange = (val) => {
      if (val.length >= 4) {
         setData({
            ...data,
            username: val,
            check_textInputChange: true,
            isValidUsername: true
         })
      } else {
         setData({
            ...data,
            username: val,
            check_textInputChange: false,
            isValidUsername: false
         })
      }
   }

   const handlePasswordChange = (val) => {
      if (val.trim().length >= 8) {
         setData({
            ...data,
            password: val,
            isValidPassword: true
         })
      } else {
         setData({
            ...data,
            password: val,
            isValidPassword: false
         })
      }
   }

   const updateSecureTextInput = () => {
      setData({
         ...data,
         secureTextEntry: !data.secureTextEntry
      })
   }

   const loginHandle = (userName, password) => {
      const foundUser = Users.filter((item) => {
         return userName === item.username && password === item.password
      })

      if (data.username.length === 0 || data.password.length === 0) {
         Alert.alert('Wrong Input', 'User & Password field can not be empty!', [
            { text: 'Okey' }
         ])
         return
      }

      if (foundUser.length === 0) {
         Alert.alert('Invalid User', 'User & Password is incorrect!', [
            { text: 'Okey' }
         ])
         return
      }


      signIn(foundUser)
   }

   const handleValidUser = (val) => {
      if (val.trim().length >= 4) {
         setData({
            ...data,
            isValidUsername: true
         })
      } else {
         setData({
            ...data,
            isValidUsername: false
         })
      }
   }

   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <Animatable.Text animation='fadeInLeft' duration={1500} style={styles.title}>Welcome!</Animatable.Text>
         </View>
         <Animatable.View animation='fadeInUpBig' duration={2000} style={styles.footer}>
            <View>
               <Text style={styles.text}>Username</Text>
               <View style={styles.row}>
                  <FontAwesome
                     name='user-o'
                     size={22}
                     color='#009387'
                     style={{ marginRight: 8 }}
                  />
                  <TextInput
                     placeholder='Enter Your username'
                     style={styles.textInput}
                     onChangeText={(val) => textInputChange(val)}
                     autoCapitalize='none'
                     onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                  />
                  {data.check_textInputChange ?
                     <Animatable.View animation='bounceIn'>
                        <Feather name='check-circle' size={22} color='#009387' />
                     </Animatable.View>
                     : null}
               </View>
               {data.isValidUsername ? null :
                  <Animatable.View animation='fadeInLeft' duration={500}>
                     <Text style={{ color: 'red', marginTop: 3 }}>Username the must be 4 characters long.</Text>
                  </Animatable.View>
               }
            </View>
            <View style={{ marginTop: 10, marginBottom: 20 }}>
               <Text style={styles.text}>Password</Text>
               <View style={[styles.row, styles.pass]}>
                  <Feather
                     name='lock'
                     size={22}
                     color='#009387'
                     style={{ marginRight: 8 }} />
                  <TextInput
                     placeholder='Password'
                     secureTextEntry={data.secureTextEntry ? true : false}
                     autoCapitalize='none'
                     style={styles.textInput}
                     onChangeText={(val) => handlePasswordChange(val)}
                  />
                  <TouchableOpacity onPress={updateSecureTextInput}>
                     {data.secureTextEntry ?
                        <Feather
                           name='eye-off'
                           size={22}
                           color='#777'
                           style={{ justifyContent: 'flex-end' }}
                        />
                        :
                        <Feather
                           name='eye'
                           size={22}
                           color='#009387'
                           style={{ justifyContent: 'flex-end' }}
                        />}
                  </TouchableOpacity>
               </View>
               {data.isValidPassword ? null :
                  <Animatable.View animation='fadeInLeft' duration={500}>
                     <Text style={{ color: 'red', marginTop: 3 }}>Password must be 8 characters long.</Text>
                  </Animatable.View>
               }
            </View>
            <Text style={[styles.text, styles.textForgot]}>Forgot Password?</Text>
            <View style={styles.button}>
               <TouchableOpacity onPress={() => { loginHandle(data.username, data.password) }}>
                  <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.btn}>
                     <Text style={styles.textBtn}>Login</Text>
                  </LinearGradient>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={[styles.btn, styles.btnOutline]}>
                  <Text style={[styles.textBtn, styles.textBtnOutline]}>Sign Up</Text>
               </TouchableOpacity>
            </View>
         </Animatable.View>
      </View>
   )
}

export default LoginScreen

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#009387'
   },
   header: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 30
   },
   footer: {
      flex: 2,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30,
      marginTop: -50
   },
   title: {
      color: '#fff',
      fontSize: 40,
      marginTop: 5
   },
   row: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomColor: '#f4f4f4',
      borderBottomWidth: 1
   },
   textInput: {
      flex: 1,
      fontSize: 18
   },
   text: {
      color: '#009387',
      marginTop: 5,
      fontSize: 18
   },
   textForgot: {
      marginTop: 0,
      marginBottom: 20
   },
   button: {
      marginTop: 20
   },
   btn: {
      width: '100%',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
   },
   textBtn: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16
   },
   btnOutline: {
      borderWidth: 1,
      borderColor: '#009387',
      marginTop: 10
   },
   textBtnOutline: {
      color: '#009387',
   }
})
