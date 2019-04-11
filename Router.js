// ReactNavigation
import { createStackNavigator, createAppContainer } from 'react-navigation';

// Screens of App
import Home from './src/screens/Home';
import ScreenWithReudxConnect from './src/screens/ScreenWithReudxConnect';

// Declare stack Navigation
const MainStack = createStackNavigator(
  {
    Home: {screen: Home},
    ScreenWithReudxConnect: {screen: ScreenWithReudxConnect}
  },
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(MainStack);
