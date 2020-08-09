
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import RootStackScreen from './screens/RootStackScreen';
import MainTabScreen from './screens/MainTabScreen';

import DrawerContents from './screens/main/DrawerContents';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <RootStackScreen /> */}
      <Drawer.Navigator DrawerContent={props => <DrawerContents {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        
        
      </Drawer.Navigator>
      
    </NavigationContainer>
  );
}


