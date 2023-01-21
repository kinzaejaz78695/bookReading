import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from './app/src/views/screens/SignIn/SignIn'
import Forget_password from './app/src/views/screens/Forget_password/Forget_password'
import Verification from './app/src/views/screens/Verification/Verification'

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Forget_password"
          component={Forget_password}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainNavigator;