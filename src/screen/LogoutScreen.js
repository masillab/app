import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  View,
} from 'react-native';

export default class LogoutScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    this.props.navigation.navigate('AuthLoading');
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}