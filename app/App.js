import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from 'react-redux';
import store from './src/store/store';

import Home from './src/screens/home';
import Trade from './src/screens/trade';
import Wallet from './src/screens/wallet';
import Discover from './src/screens/discover';

const Stack = createStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
    >
  
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Trade" 
        component={Trade} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Wallet" 
        component={Wallet} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Discover" 
        component={Discover} 
        options={{ headerShown: false}} 
      />
      
      
      
    </Stack.Navigator>
    
  );
}

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    </Provider>
  );
}