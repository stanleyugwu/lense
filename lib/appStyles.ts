import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  boxShadow:
    Platform.OS == "ios"
      ? {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
        }
      : {
          elevation: 2,
        },
});

// The sizes of fonts in UI appear way bigger than in real devices so we scale down
// The sizes relative to the UI spec.
export const textStyles = StyleSheet.create({
  heading: {
    fontFamily: "mulish-bold",
    fontSize: 22,
    lineHeight: 26,
    letterSpacing: 0.25,
  },
  heading2: {
    fontFamily: "mulish-bold",
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.1,
  },
  title: {
    fontFamily: "mulish-semibold",
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: 0.15,
  },
  body: {
    fontFamily: "mulish",
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.5,
  },
  bodySemibold: {
    fontFamily: "mulish-semibold",
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.5,
  },
  overline: {
    letterSpacing: 1.5,
    fontFamily: "mulish-semibold",
    fontSize: 12,
    fontStyle: "normal",
    textTransform: "uppercase",
  },
});

export type TextStyleType =
  | "heading"
  | "heading2"
  | "title"
  | "body"
  | "bodySemibold"
  | "overline";
