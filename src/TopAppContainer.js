import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Animated, View, TouchableOpacity } from 'react-native';
import DetailsScreen from './DetailsScreen';
import HomeScreen from './HomeScreen';
import MyTabBar from './navigation/MyTabBar';
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MyTabBar} />
      <Tab.Screen name="Settings" component={DetailsScreen} />
    </Tab.Navigator>
  );
}
export default MyTabs;