import { Platform, Dimensions, StatusBar } from 'react-native';

const { width } = Dimensions.get('window');

// Used via Metrics.baseMargin
const metrics = {
  passwordLength: 8,
  hairlineMargin: 2,
  tightMargin: 4,
  tinyMargin: 5,
  smallerMargin: 8,
  smallMargin: 10,
  littleMargin: 12,
  regularMargin: 15,
  bigMargin: 18,
  largeMargin: 20,
  xlargeMargin: 30,
  xxlargeMargin: 40,
  xxxlargeMargin: 50,
  navBarHeight: 64,
  drawerTop: Platform.select({
    android: 50,
    ios: 20,
  }),
  drawerBottom: Platform.select({
    android: 16,
    ios: 25,
  }),
  statusBarHeight: Platform.select({
    android: StatusBar.currentHeight,
    ios: 0,
  }),
  keyboardVerticalOffset: Platform.select({
    android: 50,
    ios: 65,
  }),
  pageTitleHeight: 22,
  tabBarHeight: 56,
  popUpMenuWidth: 250,
  button: 44,
  smallHitSlop: 2,
  hitSlop: 10,
  largeHitSlop: 25,
  loadingBar: {
    height: {
      short: 15,
    },
    width: {
      short: 80,
      long: 180,
    },
  },
  listItem: {
    tiny: 34,
    small: 44,
    normal: 54,
    large: 64,
  },
  elevation: {
    small: 2,
    little: 3,
    medium: 5,
    large: 8,
    xlarge: 99,
    top: 20,
  },
  icons: {
    hairline: 10,
    smaller: 14,
    tiny: 16,
    small: 20,
    little: 22,
    normal: 25,
    regular: 26,
    medium: 30,
    big: 40,
    large: 45,
    xl: 60,
    superSize: 77,
    extraLarge: 100,
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    xl: 75,
    xxl: 150,
    logo: 300,
    tinyPreview: width / 4,
    smallPreview: width / 2,
  },
  radius: {
    small: 3,
    buttonCorners: 4,
    circle: Platform.select({ ios: 9999, android: 50 }),
  },
  border: {
    tiny: 0.5,
    xxsmall: 1,
    xsmall: 3,
    small: 4,
    large: 8,
  },
  lineHeight: {
    smaller: 14,
    small: 16,
    normal: 18,
    regular: 20,
    medium: 25,
    large: 30,
    xlarge: 38,
  },
  touchable: {
    smallHitSlop: { top: 5, bottom: 5, left: 5, right: 5 },
    hitSlop: { top: 10, bottom: 10, left: 10, right: 10 },
    largeHitSlop: { top: 25, bottom: 25, left: 25, right: 25 },
  },
  dialog: {
    width: 300,
  },
  menu: {
    width: 250,
  },
  fabcontentInset: 121,
};

export default metrics;
