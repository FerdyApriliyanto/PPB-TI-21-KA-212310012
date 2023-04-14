import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Home from './src/Home';
import Friend from './src/Friend';
import Login from './src/Login';


export default function App() {

  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  const PageStack = () => {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }} >
        <Tab.Screen options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome5 name={"home"} color={focused ? 'black' : 'grey'} size={22} />
              </View>
            )
          },
          tabBarLabel: ({ focused }) => {
            return (
              <Text style={{ fontSize: 12, color: focused ? 'black' : 'grey' }}>Home</Text>
            )
          }
        }} name='Home' component={Home}></Tab.Screen>
        <Tab.Screen options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome5 name={"users"} color={focused ? 'black' : 'grey'} size={22} />
              </View>
            )
          },
          tabBarLabel: ({ focused }) => {
            return (
              <Text style={{ fontSize: 12, color: focused ? 'black' : 'grey' }}>Friend</Text>
            )
          }
        }} name='Friend' component={Friend}></Tab.Screen>
      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginPage" component={Login} options={{ title: "Login" }} ></Stack.Screen>
        <Stack.Screen name="HomePage" component={PageStack} options={{ title: "Back" }} ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
