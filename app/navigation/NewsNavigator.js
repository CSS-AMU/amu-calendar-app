import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NewsScreen from '../screens/NewsScreen';
import NewsDetailsScreen from '../screens/NewsDetailsScreen';

const Stack = createStackNavigator();

const NewsNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="News" component={NewsScreen} />
    <Stack.Screen name="NewsDetails" component={NewsDetailsScreen} />
  </Stack.Navigator>
);

export default NewsNavigator;
