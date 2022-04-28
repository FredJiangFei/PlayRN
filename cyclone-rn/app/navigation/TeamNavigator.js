import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import routes from './routes'
import TeamDetailsScreen from '../screens/TeamDetailsScreen'
import TeamListScreen from '../screens/TeamListScreen'


const Stack = createNativeStackNavigator()

const TeamNavigator = () => (
    <Stack.Navigator mode="modal">
        <Stack.Screen name={routes.TeamList} component={TeamListScreen}/>
        <Stack.Screen name={routes.TeamDetails} component={TeamDetailsScreen} />
    </Stack.Navigator>
)

export default TeamNavigator