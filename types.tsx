/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}

export type StackParamList = {
  OnboardingScreen: undefined;
  HomeScreen: undefined;
  TopUpScreen: undefined;
  SettingsScreen: undefined;
  AboutScreen: undefined;
  QRScanScreen: undefined;
};

export type StackScreenProps<Screen extends keyof StackParamList> =
  NativeStackScreenProps<StackParamList, Screen>;
