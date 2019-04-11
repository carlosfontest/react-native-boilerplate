// React & ReactNative
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class Home extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <TouchableOpacity onPress={ () => { this.props.navigation.navigate( 'ScreenWithReudxConnect' ) } } style={ styles.link }>
          <Text>Go to Screen with Redux ➡</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  link: {
    width: '85%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#447070',
  }
});
