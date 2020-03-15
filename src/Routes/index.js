import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import {HomeScreen} from './Stacks'


export default () =>
{
    const Drawer = createDrawerNavigator()

    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator>
    )
}