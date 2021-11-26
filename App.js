import React from "react";
import StartScreen from "./src/pages/Start";
import Game from "./src/pages/Game";
import WinLose from "./src/pages/WinLose";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="WinLose" component={WinLose} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
