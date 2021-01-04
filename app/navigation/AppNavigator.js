import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import CalendarNavigator from "./CalendarNavigator";
import HolidayNavigator from './HolidayNavigator';
import NoticesNavigator from './NoticesNavigator';
import NewsNavigator from './NewsNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Calendar"
      component={CalendarNavigator}
      options={{
        title:'AMU Calendar',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="calendar" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Holidays"
      component={HolidayNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="calendar" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Notices"
      component={NoticesNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="calendar-star" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="AMU News"
      component={NewsNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="newspaper" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);
export default AppNavigator;
