import React  from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { navigationRef, isMountedRef } from "../utils/RootNavigation";
import AuthNavigator from "../Navigators/AuthNavigator";
import AppNavigator from "../Navigators/AppNavigator";
import { createStackNavigator } from "@react-navigation/stack"


// const [animatePress, setAnimatePress] = useState(new Animated.Value(1));

const Stack = createStackNavigator();

export default function MainNavigator() {
  React.useEffect(() => {
    isMountedRef.current = true;

    return () => (isMountedRef.current = false);
  }, []);

  return (
    <Stack.Navigator headerMode="none" initialRouteName="AuthNavigator">
        
    <Stack.Screen name="Auth" component={AuthNavigator} />
    <Stack.Screen name="App" component={AppNavigator} />
    

   
  </Stack.Navigator>
  );
}
