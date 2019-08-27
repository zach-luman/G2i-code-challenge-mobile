import { createStackNavigator } from 'react-navigation';

import Home from '../screens/home';
import Quiz from '../screens/quiz';
import Results from '../screens/results';

const MainStackNavigation = createStackNavigator({
  Home: { screen: Home },
  Quiz: { screen: Quiz },
  Results: { screen: Results },
}, {
  initialRouteName: 'Home',
  headerMode: 'none',
});

export default MainStackNavigation;
