import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen'
import { DrawerContent } from './screens/DrawerContent'
import Profile from './screens/Profile'
import Setting from './screens/Setting';
import Support from './screens/Support';
import Bookmark from './screens/Bookmark';
import RootStackScreen from './screens/RootStackScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator drawerPosition='right' drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={MainTabScreen} />
        <Drawer.Screen name="Bookmark" component={Bookmark} />
        <Drawer.Screen name="Setting" component={Setting} />
        <Drawer.Screen name="Support" component={Support} />
      </Drawer.Navigator> */}

      <RootStackScreen />
    </NavigationContainer>

  )
}





export default App;
