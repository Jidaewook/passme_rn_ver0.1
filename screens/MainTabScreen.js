import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from '@expo/vector-icons/Ionicons';

import HomeScreen from './main/HomeScreen';
import MypageScreen from './main/MypageScreen';
import PostScreen from './main/PostScreen';
import SearchScreen from './main/SearchScreen';
import { TabActions } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
    >
        <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarColor: '#009387',
                tabBarIcon: ({color}) => (
                    <Icon name="ios-home" color={color} size={26} />
                )
            }}
        />

        <Tab.Screen
            name="Post"
            component={PostScreen}
            options={{
                tabBarLabel: 'Post',
                tabBarColor: '#009387',
                tabBarIcon: ({color}) => (
                    <Icon name="ios-add" color={color} size={26} />
                )
            }}
        />

        <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{
                tabBarLabel: 'Search',
                tabBarColor: '#009387',
                tabBarIcon: ({color}) => (
                    <Icon name="ios-search" color={color} size={26} />
                )
            }}
        />
        
        <Tab.Screen
            name="Mypage"
            component={MypageScreen}
            options={{
                tabBarLabel: 'MyPage',
                tabBarColor: '#009387',
                tabBarIcon: ({color}) => (
                    <Icon name="ios-person" color={color} size={26} />
                )
            }}
        />

    </Tab.Navigator>
);

export default MainTabScreen;