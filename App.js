import React ,{Component}from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as firebase from  'firebase';
import Screen from './screens/screen';
import Signup from './screens/signup';
class HomeScreen extends Component {
  render() {
    return (
      
      <Screen/>
    );
  }
}
class SignUpScreen extends Component {
  render() {
    return (
      <Signup navigate = {this.props.navigation}/>
      
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    signup: SignUpScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);