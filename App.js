import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import FoodScreen from './screens/FoodScreen';
import DormScreen from './screens/DormScreen';
import DetailScreen from './screens/DetailScreen';
import AboutScreen from './screens/AboutScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function FoodStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FoodList" component={FoodScreen} options={{ title: 'ร้านอาหาร' }} />
      <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'รายละเอียด' }} />
    </Stack.Navigator>
  );
}

function DormStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DormList" component={DormScreen} options={{ title: 'หอพัก' }} />
      <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'รายละเอียด' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'หน้าแรก' }} />
        <Tab.Screen name="FoodTab" component={FoodStack} options={{ title: 'ร้านอร่อย' }} />
        <Tab.Screen name="DormTab" component={DormStack} options={{ title: 'หอพัก' }} />
        <Tab.Screen name="About" component={AboutScreen} options={{ title: 'ผู้จัดทำ', headerShown: true }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}