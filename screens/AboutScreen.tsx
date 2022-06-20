import { ScrollView, Share, TouchableOpacity, View } from "react-native";
import React from "react";
import * as App from "expo-application";
import { Ionicons as Icon } from "@expo/vector-icons";
import Text from "../components/Text";
import { StackScreenProps } from "../types";
import AppIcon from "../assets/images/vector_icon.svg";
import Colors from "../constants/Colors";
import appStyles from "../lib/appStyles";

const AboutScreen = ({
  navigation: { goBack },
}: StackScreenProps<"AboutScreen">) => {
  const shareApp = async () => {
    try {
      // TODO: embed accurate app store links to text
      await Share.share({
        message:
          "Hello dear, I use Lense mobile app to top up vouchers and scan QR codes. Try it out!",
        title: "Lense Mobile App",
        url: "",
      });
    } catch (error) {
      // fail silently
    }
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 10 }}>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
      >
        <Icon
          onPress={() => goBack()}
          name="arrow-back-sharp"
          style={{ fontSize: 30, marginRight: 10 }}
        />
        <Text type="heading">About</Text>
      </View>

      <View
        style={{
          marginTop: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AppIcon />
        <Text type="title" style={{ marginTop: 10, fontWeight: "700" }}>
          Lense
        </Text>
        <Text type="bodySemibold" style={{ marginVertical: 10 }}>
          App Version: {App.nativeApplicationVersion}
        </Text>
        <Text style={{ textAlign: "center" }}>
          Lense gives you exceptionally fast and easy experience when topping up
          via recharge/voucher cards. It adds life and senses to your camera,
          giving you easy experience when scanning QR codes or toping up.
        </Text>
        <TouchableOpacity
          style={[
            {
              backgroundColor: Colors.primary,
              borderRadius: 10,
              padding: 12,
              marginTop: 20,
              flexDirection: "row",
            },
            appStyles.boxShadow,
          ]}
          activeOpacity={0.8}
          onPress={shareApp}
        >
          <Icon
            name="share-social-outline"
            style={{ fontSize: 20, marginRight: 8 }}
          />
          <Text type="bodySemibold">Spread the word</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AboutScreen;
