import React from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {
   Avatar,
   Title,
   Caption,
   Paragraph,
   Drawer,
   Text,
   TouchableRipple,
   Switch
} from 'react-native-paper';
import {
   DrawerContentScrollView,
   DrawerItem
} from '@react-navigation/drawer';
import { AuthContext } from '../components/context'


export const DrawerContent = (props) => {
   const { signOut } = React.useContext(AuthContext)
   const [isDarkTheme, setIsDarkTheme] = React.useState(false)
   const toggleTheme = () => {
      setIsDarkTheme(!isDarkTheme);
   }

   return (
      <View style={{ flex: 1 }}>
         <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
               <View style={styles.userInfoSection}>
                  <View style={{ flexDirection: 'row', marginTop: 15 }}>
                     <Avatar.Image
                        source={{ uri: 'https://webprogrammingunpas.com/assets/images/logo-wpu/logo-putih-polos.png' }}
                        size={50}
                        style={{ marginRight: 10 }}
                     />
                     <View >
                        <Title style={styles.title}>Adhri</Title>
                        <Caption style={styles.caption}>@daemon_adr</Caption>
                     </View>
                  </View>
                  <View style={styles.row}>
                     <View style={styles.section}>
                        <Paragraph style={[styles.paragraph, styles.caption]}>776</Paragraph>
                        <Caption style={styles.caption}>Followers</Caption>
                     </View>
                     <View style={styles.section}>
                        <Paragraph style={[styles.paragraph, styles.caption]}>376</Paragraph>
                        <Caption style={styles.caption}>Following</Caption>
                     </View>
                  </View>
               </View>

               <Drawer.Section style={styles.drawerSection}>
                  <DrawerItem
                     icon={({ color, size }) => (
                        <Icon name='home-outline' size={size} color={color} />
                     )}
                     label='Home'
                     onPress={({ navigation }) => { props.navigation.navigate('Home') }}
                  />
                  <DrawerItem
                     icon={({ color, size }) => (
                        <Icon name='account-outline' size={size} color={color} />
                     )}
                     label='Profile'
                     onPress={({ navigation }) => { props.navigation.navigate('Profile') }}
                  />
                  <DrawerItem
                     icon={({ color, size }) => (
                        <Icon name='bookmark-outline' size={size} color={color} />
                     )}
                     label='Bookmarks'
                     onPress={({ navigation }) => { props.navigation.navigate('Bookmark') }}
                  />
                  <DrawerItem
                     icon={({ color, size }) => (
                        <Icon name='cog-outline' size={size} color={color} />
                     )}
                     label='Setting'
                     onPress={({ navigation }) => { props.navigation.navigate('Setting') }}
                  />
                  <DrawerItem
                     icon={({ color, size }) => (
                        <Icon name='account-check-outline' size={size} color={color} />
                     )}
                     label='Support'
                     onPress={({ navigation }) => { props.navigation.navigate('Support') }}
                  />
               </Drawer.Section>
               <Drawer.Section title='Preferences'>
                  <TouchableRipple onPress={() => { toggleTheme() }}>
                     <View style={styles.preference}>
                        <Text>Dark Theme</Text>
                        <View pointerEvents='none'>
                           <Switch value={isDarkTheme} />
                        </View>
                     </View>
                  </TouchableRipple>
               </Drawer.Section>
            </View>
         </DrawerContentScrollView>
         <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem
               icon={({ color, size }) => (
                  <Icon name='logout-variant' size={size} color={color} />
               )}
               label='Sign Out'
               onPress={() => { signOut() }}
            />
         </Drawer.Section>
      </View>
   )
}

const styles = StyleSheet.create({
   drawerContent: {
      flex: 1,
   },
   userInfoSection: {
      paddingLeft: 20
   },
   title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold'
   },
   caption: {
      fontSize: 14,
      lineHeight: 14,
   },
   row: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
   },
   section: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginRight: 15
   },
   paragraph: {
      fontWeight: 'bold',
      marginRight: 3
   },
   drawerSection: {
      marginTop: 15
   },
   bottomDrawerSection: {
      marginBottom: 15,
      borderTopColor: '#f4f4f4',
      borderBottomColor: '#fff',
      borderRightColor: '#fff',
      borderLeftColor: '#fff',
      borderWidth: 1
   },
   preference: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16
   }
})