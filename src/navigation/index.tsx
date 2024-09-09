/*************************************************
 * CommonSetup
 * @exports
 * index.tsx
 * Created by Abdul on 06/07/2023
 * Copyright © 2023 CommonSetup. All rights reserved.
 *************************************************/

//imports
import React from 'react';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';

export const navigationRef = createNavigationContainerRef();

export type RootStackParamList = {
  splash: undefined;
  welcome: undefined;
  auth: undefined;
  home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={'splash'}
        screenOptions={{headerShown: false}}>
        {/*Define our routes*/}
        <Stack.Screen name="splash" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
