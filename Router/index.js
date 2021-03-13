import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Profile from '../Pages/Profile/Profile';
import Home from '../Pages/Home';

const Routes = () => {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  const Tab = createDrawerNavigator();

  const myDrawer = () =>{
    return(
      <Drawer.Navigator>
        <Drawer.Screen />
      </Drawer.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}></Stack.Screen>
        <Stack.Screen name="Register" component={Register}></Stack.Screen>
        <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerLeft: null,
            headerTitle: (
              <Image source={require('../assets/drawable/LOGO.png')} />
            ),
          }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
