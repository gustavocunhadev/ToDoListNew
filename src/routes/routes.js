import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';


import { Home } from '../pages/Home';
import { Options } from '../pages/Options';
import { Lightness } from '../pages/Lightness';
import { Profile } from '../pages/Profile';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



function Tabs() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Options" component={Options} options={{ headerShown: false }} />
            <Stack.Screen name="Lightness" component={Lightness} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}



export function AppRoutes() {

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            size={size}
                            color={color}
                            name="home"
                        />
                    ))
                }}
            />

            <Tab.Screen
                name="Options"
                component={Tabs}
                options={{
                    headerShown: false,
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            size={size}
                            color={color}
                            name="settings"
                        />
                    ))
                }}
            />
        </Tab.Navigator>
    )
}

