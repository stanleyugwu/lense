import * as React from "react";
import { Theme } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import Colors from "../constants/Colors";

// Screens
import OnboardingScreen from "../screens/OnboardingScreen";
import HomeScreen from "../screens/HomeScreen";

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<StackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  const defaultTheme: Theme = {
    dark: false,
    colors: {
      primary: Colors.primary,
      background: Colors.background,
      card: Colors.secondary,
      text: Colors.text,
      border: "#00000099",
      notification: "#ff453a",
    },
  };

  return (
    <NavigationContainer linking={LinkingConfiguration} theme={defaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}
