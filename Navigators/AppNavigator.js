import React  from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { navigationRef, isMountedRef } from "../utils/RootNavigation";
import { View,Text,Image } from "react-native";
import {Icon} from "react-native-elements"
import Signup from "../Screens/Signup"
import Login from "../Screens/Login"
import Home from "../Screens/Home"
import Profile from "../Screens/Profile";
import More from "../Screens/More"
import Leaderboard from "../Screens/Leaderboard";
import global from "../global";
import { createStackNavigator } from "@react-navigation/stack"
import CourseDetail from "../Screens/courseDetail"




// const [animatePress, setAnimatePress] = useState(new Animated.Value(1));

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


 
export default function MainNavigator() {
  React.useEffect(() => {
    isMountedRef.current = true;

    return () => (isMountedRef.current = false);
  }, []);

  return (
    
      <Tab.Navigator screenOptions={{headerShown:false}}
      tabBarOptions={{
          showLabel:false,
          style:{
              position:"absolute",
              bottom:25,
              left:20,
              right:20,
              elevation:0,
              backgroundColor:"#fff"
          }
      }}
      >
       
        {/* <Tab.Screen name="AuthLoading" component={AuthLoading} /> */}
        
        <Tab.Screen
        name="Home"
        component={Home}
        options={{
            tabBarIcon:({focused})=>(
                <View style={{alignItems:"center",justifyContent:"center",marginTop:10}}>
                    <Image source={global.ASSETS.HOMEICON}
                    resizeMode="contain"
                    style={{
                        height:25,
                        width:25,
                        // alignSelf:"center",
                        tintColor:focused?"blue":"#000"
                    }}
                    />
                    <Text style={{color:focused?"blue":"#000"}}>Home</Text>
                </View>
            

            ),
        }}
     
          
      
      />
        <Tab.Screen name="Leaderboard" component={Leaderboard} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="More" component={More} />


      </Tab.Navigator>
      
  );
}
