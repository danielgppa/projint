import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { IconButton } from 'react-native-paper';

// Importe seus componentes HomeScreen e SettingsScreen ou crie-os temporariamente
function HomeScreen() {
  return (   
    <>
    <View style={styles.container}>
    <View style={styles.avatarContainer}>
      <Avatar.Image size={60} source={require('./assets/avatar.png')} />
    </View>
    <IconButton icon="medal" size={30} color="#000" style={{marginTop: 50, marginRight: 300}} />
    <IconButton icon="trophy" size={30} color="#000" style={{marginTop: 50, marginRight: 300}} />
    <IconButton icon="star" size={30} color="#000" style={{marginTop: 50, marginRight: 300}} />
    <IconButton icon="snake" size={30} color="#000" style={{marginTop: 50, marginRight: 300}} />
    </View>
    <StatusBar style="dark" />
    </>
    
  )

}

function SettingsScreen() {
  return     <Text>Settings</Text>;

  // <View id='settings'>
    // </View>
  
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (


      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Perfil" component={HomeScreen} />
          <Tab.Screen name="Feed" component={SettingsScreen} />
          <Tab.Screen name="Comunidade" component={SettingsScreen} />
          <Tab.Screen name="Requerimento Web" component={SettingsScreen} />
          <Tab.Screen name="Ajuda" component={SettingsScreen} />

        </Tab.Navigator>
      </NavigationContainer>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  avatarContainer: {
    marginTop: 50,
    marginRight: 300,
  },
});
