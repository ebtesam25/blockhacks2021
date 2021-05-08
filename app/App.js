import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from 'react-redux';
import store from './src/store/store';

import Home from './src/screens/home';
import Trade from './src/screens/trade';
import Wallet from './src/screens/wallet';
import Discover from './src/screens/discover';
import Nft from './src/screens/nft';
import Purchase from './src/screens/purchase';
import Purchased from './src/screens/purchased';
import Splash from './src/screens/splash';
import Create from './src/screens/create';
import Published from './src/screens/published';
import Sell from './src/screens/sell';
import Login from './src/screens/login';

const Stack = createStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
    >
      <Stack.Screen 
        name="Splash" 
        component={Splash} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false}} 
      />
  
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
      <Stack.Screen 
        name="Nft" 
        component={Nft} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Purchase" 
        component={Purchase} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Purchased" 
        component={Purchased} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Create" 
        component={Create} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Published" 
        component={Published} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Sell" 
        component={Sell} 
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