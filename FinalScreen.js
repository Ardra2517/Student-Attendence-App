import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import db from '../Config';

export default class FinalScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Absent: {this.props.navigation.getParam('absentKids')}</Text>
        <Text>Present: {this.props.navigation.getParam('presentKids')}</Text>
      </View>
    );
  }
}
