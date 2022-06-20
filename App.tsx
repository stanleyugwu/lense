import React from "react";
import useLoadFonts from "./hooks/useLoadFonts";
import SplashScreen from 'react-native-splash-screen';
import Navigation from "./navigation";

export default function App() {
  const isFontsLoaded = useLoadFonts();
  if (!isFontsLoaded) return null; // wait till fonts are loaded before rendering
  SplashScreen.hide(); // now hide native splashscreen, after fonts are loaded

  return (
    <Navigation/>
  );
}
