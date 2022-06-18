import React from "react";
import { Text, View } from "react-native";
import useLoadFonts from "./hooks/useLoadFonts";
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  const isFontsLoaded = useLoadFonts();
  if (!isFontsLoaded) return null; // wait till fonts are loaded before rendering
  SplashScreen.hide(); // now hide native splashscreen, after fonts are loaded

  return (
    <View>
      <Text>HELLO</Text>
    </View>
  );
}
