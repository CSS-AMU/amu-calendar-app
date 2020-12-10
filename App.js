import React, { Component } from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import * as Permissions from 'expo-permissions';
import Home from '../calendar/screens/Home';
import CreateTask from './calendar/screens/CreateTask';
import TodoStore from './calendar/data/TodoStore';

const AppNavigator = createStackNavigator(
  {
    Home,
    CreateTask,
  },
  {
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  async UNSAFE_componentWillMount() {
    await this._askForCalendarPermissions();
    await this._askForReminderPermissions();
  }

  _askForCalendarPermissions = async () => {
    await Permissions.askAsync(Permissions.CALENDAR);
  };

  _askForReminderPermissions = async () => {
    if (Platform.OS === 'android') {
      return true;
    }

    await Permissions.askAsync(Permissions.REMINDERS);
  };

  render() {
    return (
      <TodoStore>
        <AppContainer />
      </TodoStore>
    );
  }
}
