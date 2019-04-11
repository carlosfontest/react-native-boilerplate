// React
import React from 'react';

// React Navigation
import Router from './Router';

// Redux
import { Provider } from 'react-redux';
import configStore from './src/store/configStore';

export default class App extends React.Component {
  render() {
    const store = configStore();
    
    return (
      <Provider store={ store }>
        <Router/>
      </Provider>
    );
  }
}
