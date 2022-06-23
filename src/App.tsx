import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Routes, {navigationRef} from './routes';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
          <Routes/>
    </NavigationContainer>
  );
};

export default () => (
    <App />
);
