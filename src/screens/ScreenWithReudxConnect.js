// React & ReactNative
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

// Redux
import { connect } from 'react-redux';
import { addSomething, deleteSomething } from '../store/actions/index';

class ScreenWithReduxConnect extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.text }>This screen have Redux!</Text>
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
  text: {
    fontSize: 50,
    textAlign: 'center'
  }
});

// Connect the screen to the Store (Redux) and map the state and dispatch to the props
const mapStateToProps = (state) => {
  return {
    arrayOfSomething: state.reducer1.arrayOfSomething
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSomethingAdd: (name) => dispatch(addSomething(name)),
    onSomethingDelete: (id) => dispatch(deleteSomething(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScreenWithReduxConnect);