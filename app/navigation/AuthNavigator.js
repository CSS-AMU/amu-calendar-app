import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from "../screens/WelcomeScreen";
import AppNavigator from './AppNavigator';
import colors from "../config/colors";
import ActionBarImage from '../components/ActionBarImage';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="AppNavigator" component={AppNavigator} 
    options={{title:'AMU CALENDAR',
    headerLeft: () => <ActionBarImage />,
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {fontWeight: 'bold', },}}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
