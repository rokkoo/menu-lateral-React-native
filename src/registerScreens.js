import { Navigation } from "react-native-navigation";

import homeScreen from "../screens/homeScreen";
import SettingScreen from "../screens/settingScreen";

export function registerScreens() {
Navigation.registerComponent('Screen1', () => homeScreen);
Navigation.registerComponent('Screen2', () => settingScreen);
}