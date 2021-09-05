import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from './Screens/HomeScreen'
import AppHeader from './components/AppHeader'
import FinalScreen from './Screens/FinalScreen'
import {createSwitchNavigator,createAppContainer} from 'react-navigation'

export default class App extends React.Component {
  render() {
    return (
      <View style={{backgroundColor:'#FF6FEA'}}>
      <AppHeader/>
     <AppContainer/>
      </View>
    );
  }
}

const SwNavigator = createSwitchNavigator({
  Screen1: HomeScreen,
  Screen2: FinalScreen,
})

const AppContainer = createAppContainer(SwNavigator)
