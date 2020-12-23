import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HolidaysScreen from '../screens/HolidaysScreen';
import HolidaysDetailsScreen from '../screens/HolidaysDetailsScreen';

const Stack = createStackNavigator();

const HolidayNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Holidays" component={HolidaysScreen} />
    <Stack.Screen name="HolidaysScreen" component={HolidaysDetailsScreen} />
  </Stack.Navigator>
);

export default HolidayNavigator;
