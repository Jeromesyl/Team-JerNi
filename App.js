import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import StartScreen from "./src/screens/StartScreen";
import Restaurant from "./src/screens/RestaurantDetails";
import SignupPage from "./src/screens/SignupPage";
import LoginPage from "./src/screens/LoginPage";
import HomeScreen from "./src/screens/HomeScreen";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Start" component={StartScreen} />
         <Stack.Screen name="Login" component={LoginPage} />
         <Stack.Screen name="Signup" component={SignupPage} /> */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
