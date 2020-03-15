import React from 'react'
import {Menu} from './styled'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/HomePage'
import IconFeather from 'react-native-vector-icons/Feather'

IconFeather.loadFont()

const Stack = createStackNavigator()
const headerOptions = ({navigation}) =>
{ 
    return (
        {
            headerStyle: {
                backgroundColor: '#0B3861',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                width: 220,
                textAlign: 'center'
                
            },
            headerLeft: () => (
                <Menu title='menu' onPress={() => navigation.toggleDrawer()}>
                    <IconFeather name="align-justify" size={34} color='#fff' />
                </Menu>
            ),
        }
    )
}

export const HomeScreen = ({navigation}) =>
{
    return(
        <Stack.Navigator initialRouteName="MyGames">
            <Stack.Screen name="MyGames" component={Home} options={headerOptions} />
        </Stack.Navigator>
    )
}
