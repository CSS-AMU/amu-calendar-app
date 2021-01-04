import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NoticesScreen from '../screens/NoticesScreen';
import NoticesDetailsScreen from '../screens/NoticesDetailsScreen';

const Stack = createStackNavigator();

const NoticesNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Notices" component={NoticesScreen} />
    <Stack.Screen name="NoticesDetails" component={NoticesDetailsScreen} />
  </Stack.Navigator>
);

export default NoticesNavigator;
