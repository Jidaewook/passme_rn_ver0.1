
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';


import RootStackScreen from './screens/RootStackScreen';
import MainTabScreen from './screens/MainTabScreen';



export default function App() {
  return (
    <NavigationContainer>
      {/* <RootStackScreen /> */}
      <MainTabScreen />
    </NavigationContainer>
  );
}


