// REACT NAVIGATOR
import { createStackNavigator, createDrawerNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

// SCREENS
import { HomeScreen } from './navigation/home';
import { LoginScreen } from './navigation/login';
import { RegisterScreen } from './navigation/register';
import { JoinGameScreen } from './navigation/joinGame';
import { CreateGameScreen } from './navigation/createGame';

// TOOLS
import utils from './lib/utils';

// NAVIGATION (SIDE MENU)
const MainNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Register: { screen: RegisterScreen },
    CreateGame: { screen: CreateGameScreen },
    JoinGame: { screen: JoinGameScreen }
  },
  {
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);
// APP
const App = createAppContainer(MainNavigator);
export default App;