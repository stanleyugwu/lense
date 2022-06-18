import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import {
  Mulish_400Regular,
  Mulish_500Medium,
  Mulish_600SemiBold,
  Mulish_700Bold
} from "@expo-google-fonts/mulish";

export default function useLoadFonts() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          "mulish": Mulish_400Regular,
          "mulish-bold":Mulish_700Bold,
          "mulish-medium":Mulish_500Medium,
          "mulish-semibold":Mulish_600SemiBold
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
