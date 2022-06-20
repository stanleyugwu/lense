import React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import Text from "../components/Text";
import appStyles from "../lib/appStyles";

// Images
import HandIcon from "../assets/images/wavingHand.svg";
import ScanIcon from "../assets/images/onboardingScreen/screen1icon.svg";
import SettingsIcon from "../assets/images/homescreen/settings.svg";
import AboutIcon from "../assets/images/homescreen/about.svg";
import QrIcon from "../assets/images/homescreen/qrcode.svg";
import Colors from "../constants/Colors";
import { StackScreenProps } from "../types";

export type FeatureButtonProps = {
  label: string;
  icon: React.ReactNode;
  backgroundColor?: string;
} & TouchableOpacityProps;

export const FeatureButton = ({
  label = "Lense",
  icon,
  onPress,
  style,
  backgroundColor = Colors.primary,
  ...otherProps
}: FeatureButtonProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      {
        borderRadius: 8,
        backgroundColor,
        padding: 15,
        width: "45%",
        maxWidth: 300,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      },
      appStyles.boxShadow,
      style,
    ]}
    activeOpacity={0.8}
    {...otherProps}
  >
    {icon}
    <Text type="bodySemibold" style={{ color: "white", marginTop: 10 }}>
      {label}
    </Text>
  </TouchableOpacity>
);
const HomeScreen = ({
  navigation: { navigate },
}: StackScreenProps<"HomeScreen">) => {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <StatusBar barStyle={"dark-content"} />
      <View style={{ marginTop: 30 }}>
        <HandIcon />
        <Text type="heading" style={{ marginVertical: 10 }}>
          Hello, Welcome.{"\n"}What do you want to do today?
        </Text>
      </View>

      <View style={{ marginHorizontal: "auto", marginTop: 30 }}>
        <View style={styles.Row}>
          <FeatureButton
            label="Recharge"
            icon={<ScanIcon width="80" height="80" />}
            backgroundColor={"#698FB8"}
            style={{ borderTopStartRadius: 30 }}
            onPress={() => navigate("TopUpScreen")}
          />
          <FeatureButton
            label="Settings"
            icon={<SettingsIcon width="70" height="70" />}
            backgroundColor={"#D183D2"}
            onPress={() => navigate("SettingsScreen")}
          />
        </View>
        <View style={styles.Row}>
          <FeatureButton
            label="About"
            icon={<AboutIcon width="60" height="60" />}
            backgroundColor={"#9B6EBE"}
            onPress={() => navigate("AboutScreen")}
          />
          <FeatureButton
            label="Scan QR Code"
            icon={<QrIcon width="70" height="70" />}
            backgroundColor={"#6CB2B8"}
            style={{ borderBottomEndRadius: 30 }}
            onPress={() => navigate("QRScanScreen")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Row: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
    flex: 0.5,
  },
});

export default HomeScreen;
