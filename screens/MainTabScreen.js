import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Notification from './Notification';
import Profile from './Profile';
import Home from './Home';
import Detail from './Detail'

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
   return (
      <Tab.Navigator
         initialRouteName="Home"
         activeColor="#fff"
         style={{ backgroundColor: 'tomato' }}
      >
         <Tab.Screen
            name="Home"
            component={Home}
            options={{
               tabBarLabel: 'Home',
               tabBarColor: '#009387',
               tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
               ),
            }}
         />
         <Tab.Screen
            name="Detail"
            component={Detail}
            options={{
               tabBarLabel: 'Detail',
               tabBarColor: '#4f92ff',
               tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="layers" color={color} size={26} />
               ),
            }}
         />
         <Tab.Screen
            name="Notification"
            component={Notification}
            options={{
               tabBarLabel: 'Notification',
               tabBarColor: '#911cff',
               tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="bell" color={color} size={26} />
               ),
            }}
         />
         <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
               tabBarLabel: 'Profile',
               tabBarColor: '#ff1269',
               tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="account" color={color} size={26} />
               ),
            }}
         />

      </Tab.Navigator>
   )
}

export default MainTabScreen