import { createStyleProvider } from "./builder";
import { EnumTextTransform, EnumTextDecorationLine } from "./builder/types";
import { Platform, StatusBarStyle } from "react-native";
import { getPlatformFontWeight } from "./builder/utils";
import { BlurViewProperties } from "@react-native-community/blur";

export const ColorPalette = {
  "blue-50": "#F0F3FF",
  "blue-100": "#E4E9FF",
  "blue-200": "#9DACF4",
  "blue-300": "#536EF8",
  "blue-400": "#314FDF",
  "blue-500": "#1B319E",
  "blue-600": "#1E2C70",
  "blue-700": "#0D1749",
  "blue-800": "#051124",

  "platinum-10": "#F4F9FF",
  "platinum-50": "#F8F9FC",
  "platinum-100": "#D0DCEF",
  "platinum-200": "#8EA5C6",
  "platinum-300": "#596E8D",
  "platinum-400": "#3B4E6A",
  "platinum-500": "#22324F",
  "platinum-600": "#112038",
  "platinum-700": "#0E1829",

  "green-50": "#ECFDF6",
  "green-100": "#DBF9EC",
  "green-200": "#AAECD0",
  "green-300": "#68EAB2",
  "green-400": "#2DD98F",
  "green-500": "#22AC71",
  "green-600": "#136844",

  "red-50": "#FFF7F8",
  "red-100": "#FFD8E0",
  "red-200": "#FC91A6",
  "red-300": "#FD5778",
  "red-400": "#F5365C",
  "red-500": "#BF2342",
  "red-600": "#911830",
  "red-700": "#440B17",

  "pink-50": "#FDF4F9",
  "pink-100": "#FFE9F4",
  "pink-200": "#FFCFE7",
  "pink-300": "#F891C4",
  "pink-400": "#FF6BB8",

  "purple-50": "#FBF8FF",
  "purple-100": "#F7F0FF",
  "purple-200": "#E4D3FD",
  "purple-300": "#C198FF",
  "purple-400": "#864FFC",
  // purple 500~700 not exist yet. But, can be added in the future.
  "purple-800": "#0A0314",

  white: "#FFFFFF",

  "gray-10": "#F8F9FC",
  "gray-50": "#F2F2F7",
  "gray-100": "#DCDCE3",
  "gray-200": "#C6C6CD",
  "gray-300": "#9A9AA2",
  "gray-400": "#64646D",
  "gray-500": "#37373E",
  "gray-600": "#1E1E24",
  "gray-700": "#09090A",

  black: "#000000",

  transparent: "rgba(255,255,255,0)",
};

export const TextColors = {
  "text-highest": ColorPalette["black"],
  "text-high": ColorPalette["platinum-700"],
  "text-middle": ColorPalette["platinum-400"],
  "text-low": ColorPalette["gray-300"],
  "text-label": ColorPalette["platinum-300"],
};

export const DarkThemeTextColors = {
  "text-highest": ColorPalette["white"],
  "text-high": ColorPalette["platinum-50"],
  "text-middle": ColorPalette["platinum-100"],
  "text-low": ColorPalette["platinum-200"],
  "text-label": ColorPalette["platinum-100"],
};

export const BackgroundColors = {
  card: "rgba(255, 255, 255, 0.95)",
  // "background secondary" is not used as the background of the screen itself.
  // This is used when the component needs to be separated from the background behind
  // while occupying a partial size such as the background of the drawer or the background of the modal.
  "background-secondary": ColorPalette["white"],
  "background-tertiary": ColorPalette["gray-10"],
};

export const DarkThemeBackgroundColors = {
  card: "rgba(17, 32, 56, 0.95)",
  "background-secondary": ColorPalette["platinum-500"],
  "background-tertiary": ColorPalette["platinum-600"],
};

export const ProfileColors = {
  "profile-sky-blue": "#80CAFF",
  "profile-mint": "#47DDE7",
  "profile-green": "#78F0C5",
  "profile-yellow-green": "#ADE353",
  "profile-purple": "#D378FE",
  "profile-red": "#FF6D88",
  "profile-orange": "#FEC078",
  "profile-yellow": "#F2ED64",
};

export const { StyleProvider, useStyle } = createStyleProvider(
  {
    themes: ["dark"] as const,
    custom: {
      h1: {
        fontSize: 32,
        lineHeight: 56,
        letterSpacing: 0.3,
        ...getPlatformFontWeight("700"),
      },
      h2: {
        fontSize: 28,
        lineHeight: 36,
        letterSpacing: 0.3,
        ...getPlatformFontWeight("700"),
      },
      h3: {
        fontSize: 24,
        lineHeight: 32,
        letterSpacing: 0.3,
        ...getPlatformFontWeight("700"),
      },
      h4: {
        fontSize: 20,
        lineHeight: 28,
        letterSpacing: 0.3,
        ...getPlatformFontWeight("600"),
      },
      h5: {
        fontSize: 18,
        lineHeight: 24,
        letterSpacing: 0.3,
        ...getPlatformFontWeight("600"),
      },
      h6: {
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: 0.2,
        ...getPlatformFontWeight("600"),
      },
      h7: {
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.2,
        ...getPlatformFontWeight("600"),
      },
      subtitle1: {
        fontSize: 18,
        lineHeight: 24,
        ...getPlatformFontWeight("500"),
      },
      subtitle2: {
        fontSize: 16,
        lineHeight: 22,
        ...getPlatformFontWeight("500"),
      },
      subtitle3: {
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.1,
        ...getPlatformFontWeight("500"),
      },
      body1: {
        fontSize: 18,
        lineHeight: 26,
        ...getPlatformFontWeight("400"),
      },
      body2: {
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: 0.1,
        ...getPlatformFontWeight("400"),
      },
      body3: {
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
        ...getPlatformFontWeight("400"),
      },
      "text-button1": {
        fontSize: 18,
        lineHeight: 20,
        letterSpacing: 0.2,
        ...getPlatformFontWeight("600"),
      },
      "text-button2": {
        fontSize: 16,
        lineHeight: 19,
        letterSpacing: 0.2,
        ...getPlatformFontWeight("600"),
      },
      "text-button3": {
        fontSize: 14,
        lineHeight: 18,
        letterSpacing: 0.2,
        textTransform: "capitalize" as EnumTextTransform,
        ...getPlatformFontWeight("600"),
      },
      "text-caption1": {
        fontSize: 13,
        lineHeight: 18,
        letterSpacing: 0.3,
        ...getPlatformFontWeight("400"),
      },
      "text-caption2": {
        fontSize: 12,
        lineHeight: 18,
        letterSpacing: 0.3,
        ...getPlatformFontWeight("400"),
      },
      "text-overline": {
        fontSize: 11,
        lineHeight: 16,
        letterSpacing: 0.5,
        textTransform: "uppercase" as EnumTextTransform,
        ...getPlatformFontWeight("400"),
      },
      "text-underline": {
        textDecorationLine: "underline" as EnumTextDecorationLine,
      },
      // This style is for the text input and aims to mock the body2 style.
      // In IOS, it is hard to position the input text to the middle vertically.
      // So, to solve this problem, decrease the line height and add the additional vertical padding.
      "body2-in-text-input": Platform.select({
        ios: {
          fontSize: 16,
          lineHeight: 19,
          letterSpacing: 0.25,
          paddingTop: 1.5,
          paddingBottom: 1.5,
          ...getPlatformFontWeight("400"),
        },
        android: {
          fontSize: 16,
          lineHeight: 22,
          letterSpacing: 0.25,
          ...getPlatformFontWeight("400"),
        },
      }),
      "gradient-background": {
        x1: 0,
        y1: 0,
        x2: 1,
        y2: 0,
        stops: [
          {
            offset: "0%",
            color: ColorPalette["purple-50"],
          },
          {
            offset: "100%",
            color: ColorPalette["blue-50"],
          },
        ],
      },

      "status-bar-style": "dark-content" as StatusBarStyle,

      "blurred-header-blur-type": "light" as BlurViewProperties["blurType"],
      "blurred-header-blur-amount": 60,
      "blurred-header-reducedTransparencyFallbackColor": "white",

      "blurred-tabbar-blur-type": "light" as BlurViewProperties["blurType"],
      "blurred-tabbar-blur-amount": 80,
      "blurred-tabbar-reducedTransparencyFallbackColor": "white",

      "header-tabbar-border": ColorPalette["gray-50"],
    },
    colors: {
      ...ColorPalette,
      ...ProfileColors,
      ...TextColors,
      ...BackgroundColors,
      ...{
        "blurred-header-background": BackgroundColors["card"],
        "blurred-tabbar-background": BackgroundColors["card"],

        // Belows are for the button props and may not be used as styles.
        "rect-button-default-ripple": ColorPalette["gray-100"],
        // Active opacity is 0.2 by default.
        "rect-button-default-underlay": ColorPalette["gray-300"],

        "drawer-rect-button-underlay": "#F1F3FC",

        // Belows are for the loading spinner props and may not be used as styles.
        "loading-spinner": "#BABAC1",
      },
    },
    widths: {
      full: "100%",
      half: "50%",
      "1": 1,
      "4": 4,
      "8": 8,
      "12": 12,
      "16": 16,
      "20": 20,
      "24": 24,
      "32": 32,
      "34": 34,
      "36": 36,
      "38": 38,
      "40": 40,
      "44": 44,
      "54": 54,
      "56": 56,
      "58": 58,
      "72": 72,
      "80": 80,
      "122": 122,
      "160": 160,
      "240": 240,
      "292": 292,
      "300": 300,

      "card-gap": 12,
      "page-pad": 20,
    },
    heights: {
      full: "100%",
      half: "50%",
      "0.5": 0.5,
      "1": 1,
      "4": 4,
      "5": 5,
      "8": 8,
      "12": 12,
      "16": 16,
      "18": 18,
      "20": 20,
      "24": 24,
      "30": 30,
      "32": 32,
      "36": 36,
      "38": 38,
      "40": 40,
      "44": 44,
      "50": 50,
      "56": 56,
      "58": 58,
      "62": 62,
      "66": 66,
      "64": 64,
      "72": 72,
      "74": 74,
      "80": 80,
      "83": 83,
      "84": 84,
      "87": 87,
      "90": 90,
      "104": 104,
      "116": 116,
      "122": 122,
      "214": 214,
      "400": 400,
      "600": 600,

      "button-small": 38,
      "button-default": 48,
      "button-large": 52,
      "governance-card-body-placeholder": 130,

      "card-gap": 12,
      "page-pad": 20,
    },
    paddingSizes: {
      "0": 0,
      "1": 1,
      "2": 2,
      "3": 3,
      "4": 4,
      "5": 5,
      "6": 6,
      "8": 8,
      "10": 10,
      "11": 11,
      "12": 12,
      "14": 14,
      "15": 15,
      "16": 16,
      "18": 18,
      "20": 20,
      "22": 22,
      "24": 24,
      "25.5": 25.5,
      "26": 26,
      "28": 28,
      "31": 31,
      "32": 32,
      "36": 36,
      "38": 38,
      "40": 40,
      "42": 42,
      "48": 48,
      "52": 52,
      "64": 64,
      "66": 66,

      page: 20,
      "card-horizontal": 20,
      "card-vertical": 20,
      "card-vertical-half": 10,
      "card-gap": 12,
    },
    marginSizes: {
      "0": 0,
      "1": 1,
      "2": 2,
      "3": 3,
      "4": 4,
      "6": 6,
      "8": 8,
      "10": 10,
      "12": 12,
      "14": 14,
      "15": 15,
      "16": 16,
      "18": 18,
      "20": 20,
      "21": 21,
      "24": 24,
      "28": 28,
      "30": 30,
      "32": 32,
      "34": 34,
      "38": 38,
      "40": 40,
      "44": 44,
      "46": 46,
      "48": 48,
      "58": 58,
      "64": 64,
      "68": 68,
      "82": 82,
      "87": 87,
      "88": 88,
      "92": 92,
      "102": 102,
      "106": 106,
      "150": 150,
      "288": 288,

      page: 20,
      "card-horizontal": 20,
      "card-vertical": 20,
      "card-gap": 12,
    },
    borderWidths: {
      "0": 0,
      "1": 1,
      "2": 2,
      "3": 3,
      "4": 4,
      "6": 6,
      "8": 8,
      "12": 12,
      "16": 16,
      "32": 32,
      "64": 64,
    },
    borderRadiuses: {
      "0": 0,
      "1": 1,
      "2": 2,
      "3": 3,
      "4": 4,
      "6": 6,
      "8": 8,
      "12": 12,
      "16": 16,
      "32": 32,
      "64": 64,
    },
    opacities: {
      transparent: 0,
      "10": 0.1,
      "20": 0.2,
      "30": 0.3,
      "40": 0.4,
      "50": 0.5,
      "60": 0.6,
      "70": 0.7,
      "80": 0.8,
      "90": 0.9,
      "100": 1,

      "blurred-header": 0.65,
      "blurred-tabbar": 0.75,
    },
  },
  {
    dark: {
      custom: {
        "gradient-background": {
          x1: 0,
          y1: 0,
          x2: 1,
          y2: 0,
          stops: [
            {
              offset: "0%",
              color: ColorPalette["purple-800"],
            },
            {
              offset: "100%",
              color: ColorPalette["blue-800"],
            },
          ],
        },

        "status-bar-style": "light-content" as StatusBarStyle,

        "blurred-header-blur-type": "dark" as BlurViewProperties["blurType"],
        "blurred-header-blur-amount": 40,
        "blurred-header-reducedTransparencyFallbackColor": "black",

        "blurred-tabbar-blur-type": "dark" as BlurViewProperties["blurType"],
        "blurred-tabbar-blur-amount": 70,
        "blurred-tabbar-reducedTransparencyFallbackColor": "black",

        "header-tabbar-border": ColorPalette["platinum-500"],
      },
      colors: {
        ...DarkThemeTextColors,
        ...DarkThemeBackgroundColors,

        "blurred-header-background": DarkThemeBackgroundColors["card"],
        "blurred-tabbar-background": DarkThemeBackgroundColors["card"],

        "rect-button-default-ripple": ColorPalette["platinum-400"],
        "rect-button-default-underlay": ColorPalette["platinum-400"],

        "drawer-rect-button-underlay": "#F1F3FC",
      },
    },
  }
);
