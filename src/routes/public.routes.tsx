import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from '../scenes/SplashScreen';
import InitialAccess from '../scenes/InitialAccess';

const Stack = createNativeStackNavigator();

const PublicRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'SplashScreen'}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="InitialAccess" component={InitialAccess} />
    </Stack.Navigator>
  );
};

export default PublicRoutes;
