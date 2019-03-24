// REACT NAVIGATOR
import {createDrawerNavigator, createBottomTabNavigator, createAppContainer, createSwitchNavigator, TabNavigator } from 'react-navigation';

// SCREENS
import { HomeScreen } from './navigation/home';
import { LoginScreen } from './navigation/login';
import { RegisterScreen } from './navigation/register';
import { JoinGameScreen } from './navigation/joinGame';
import { CreateGameScreen } from './navigation/createGame';

// TOOLS
import utils from './lib/utils';


// LOGIN (Pre Auth)
const loginNavigator = createDrawerNavigator({
    Home: HomeScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
  });
// MAIN (After Auth)
const mainNavigator = createDrawerNavigator(
  {
    CreateGame: CreateGameScreen,
    JoinGame: JoinGameScreen,
    Logout: loginNavigator 
  }
);
// Separate Navigations
const RootNavigation = createSwitchNavigator({
  LoginScreen: { screen: loginNavigator },
  Application: { screen: mainNavigator },
});

// APP
const App = createAppContainer(RootNavigation);
export default App;