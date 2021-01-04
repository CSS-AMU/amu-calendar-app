import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CalendarScreen from '../screens/CalendarScreen';
import AgendaScreen from '../screens/AgendaScreen';

const Stack = createStackNavigator();

const CalendarNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Calendar" component={CalendarScreen} />
    <Stack.Screen name="Agenda" component={AgendaScreen} />
  </Stack.Navigator>
);

export default CalendarNavigator;
