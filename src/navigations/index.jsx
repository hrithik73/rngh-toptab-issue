import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screen/Home';
import Profile from '../screen/Profile';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Drawer = createDrawerNavigator();
const FirstTopTab = createMaterialTopTabNavigator();

const HomeNavigator = () => {
  return (
    <FirstTopTab.Navigator>
      <FirstTopTab.Screen name='Home' component={Home} />
      <FirstTopTab.Screen name='Another Tab' component={Profile} />
    </FirstTopTab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Main' component={HomeNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
