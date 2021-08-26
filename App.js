import MainNavigator from "./Navigators/MainNavigator";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./Navigators/AuthNavigator";

import AppNavigator from "./Navigators/AppNavigator"
import { LogBox } from "react-native";

LogBox.ignoreAllLogs()
const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator/>
    </NavigationContainer>
  );
};
export default App;