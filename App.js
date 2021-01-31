import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  ActivityIndicator, View
} from 'react-native';
import { AuthContext } from './components/context';
import Bookmark from './screens/Bookmark';
import { DrawerContent } from './screens/DrawerContent';
import MainTabScreen from './screens/MainTabScreen';
import RootStackScreen from './screens/RootStackScreen';
import Setting from './screens/Setting';
import Support from './screens/Support';
// import AsyncStorage from '@react-native-async-storage/async-storage';


const Drawer = createDrawerNavigator();

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true)
  // const [userToken, setUserToken] = React.useState(null)

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null
  }

  const loginReducer = (prev, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prev,
          userToken: action.token,
          isLoading: false
        }
      case 'LOGIN':
        return {
          ...prev,
          userName: action.id,
          userToken: action.token,
          isLoading: false
        }
      case 'LOGOUT':
        return {
          ...prev,
          userName: null,
          userToken: null,
          isLoading: false
        }
      case 'REGISTER':
        return {
          ...prev,
          userName: action.id,
          userToken: action.token,
          isLoading: false
        }
    }
  }

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState)

  const authContext = React.useMemo(() => ({
    signIn: async (email, password) => {
      // setUserToken('adh')
      // setIsLoading(false)
      let userToken
      userToken = null
      if (email === 'user' && password === '123') {
        // try {
        userToken = 'adh'
        // await AsyncStorage.setItem('userToken', userToken)
        // } catch (e) {
        //   console.log(e)
        // }
      }
      dispatch({ type: 'LOGIN', id: email, token: userToken })
    },
    signOut: async () => {
      // setUserToken(null)
      // setIsLoading(false)
      // try {
      // await AsyncStorage.removeItem('userToken')
      // } catch (e) {
      //   console.log(e)
      // }
      dispatch({ type: 'LOGOUT' })
    },
    signUp: () => {
      setUserToken('adh')
      setIsLoading(false)
    }
  }))

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false)
      let userToken;
      userToken = null
      // try {
      //   userToken = await AsyncStorage.getItem('userToken')
      // } catch (e) {
      //   console.log(e)
      // }
      dispatch({ type: 'RETRIEVE_TOKEN', token: 'adh' })
    }, 3000)
  }, [])

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='red' />
      </View>
    )
  }



  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <Drawer.Navigator drawerPosition='right' drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={MainTabScreen} />
            <Drawer.Screen name="Bookmark" component={Bookmark} />
            <Drawer.Screen name="Setting" component={Setting} />
            <Drawer.Screen name="Support" component={Support} />
          </Drawer.Navigator>
        )
          :
          < RootStackScreen />

        }

      </NavigationContainer>
    </AuthContext.Provider >

  )
}





export default App;
