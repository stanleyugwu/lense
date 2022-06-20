import React from "react";
import Text from "../components/Text";
// @ts-ignore
import PaperOnboarding from "react-native-paper-onboarding";
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons as Icon } from "@expo/vector-icons";
import Colors from "../constants/Colors";

// screens icons
import Screen1Icon from "../assets/images/onboardingScreen/screen1icon.svg";
import Screen2Icon from "../assets/images/onboardingScreen/screen2icon.svg";
import Screen3Icon from "../assets/images/onboardingScreen/screen3icon.svg";
import { useNavigation } from "@react-navigation/native";

const GetStartedButton = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 30,
        backgroundColor: Colors.primary,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <Text type="bodySemibold" style={{ padding: 18 }}>
        Get Started
      </Text>
      <Icon name="chevron-forward-sharp" style={{ fontSize: 20 }} />
    </TouchableOpacity>
  );
};

const Screen1 = () => {
  return (
    <ScrollView contentContainerStyle={styles.screenContainer}>
      <StatusBar backgroundColor={"#698FB8"} animated />
      <Screen1Icon />
      <Text type="heading" style={styles.screenTitle}>
        Recharge the new way
      </Text>
      <Text style={styles.screenBodyText}>
        Recharge your voucher/recharge card by scan not press. No need to
        manually key in the pins.
      </Text>
    </ScrollView>
  );
};
// Setting this static backgroundColor property is required by the onboarding library
Screen1.backgroundColor = "#698FB8";

const Screen2 = () => (
  <ScrollView contentContainerStyle={styles.screenContainer}>
    <StatusBar backgroundColor={"#6CB2B8"} animated />
    <Screen2Icon />
    <Text type="heading" style={styles.screenTitle}>
      Auto detection
    </Text>
    <Text style={styles.screenBodyText}>
      Lense detects the voucher details automatically, just point your camera
      and it will take care of the rest.
    </Text>
  </ScrollView>
);
Screen2.backgroundColor = "#6CB2B8";

const Screen3 = () => (
  <ScrollView contentContainerStyle={styles.screenContainer}>
    <StatusBar backgroundColor={"#D183D2"} animated />
    <Screen3Icon />
    <Text type="heading" style={styles.screenTitle}>
      Recharge in just one step
    </Text>
    <Text style={styles.screenBodyText}>
      No sign-up, no sign-in, no long talks, no strings, just open Lense and
      point it to your voucher/recharge card.
    </Text>
  </ScrollView>
);
Screen3.backgroundColor = "#D183D2";

// onboarding screens
const screens = [Screen1, Screen2, Screen3];
const OnboardingScreen = () => {
  return (
    <>
      <PaperOnboarding screens={screens} />
      <GetStartedButton />
    </>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    padding: 10,
  },
  screenTitle: { marginTop: 30, color: "white" },
  screenBodyText: { color: "white", textAlign: "center", marginTop: 9 },
});

export default OnboardingScreen;
