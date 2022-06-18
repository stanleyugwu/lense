/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { StackParamList } from "../types";

const linking: LinkingOptions<StackParamList> = {
  prefixes: [Linking.createURL("",{scheme:"lense"})],
  config: {
    screens: {
      OnboardingScreen: "onboarding",
      HomeScreen: "home",
      AboutScreen: "about",
      QRScanScreen: "qrscan",
      SettingsScreen: "settings",
      TopUpScreen: "topup",
    },
  },
};

export default linking;
