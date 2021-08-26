import React  from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { navigationRef, isMountedRef } from "../utils/RootNavigation";
import { View,Text,Image } from "react-native";

import Home from "../Screens/Home"
import Profile from "../Screens/Profile";
import More from "../Screens/More"
import Leaderboard from "../Screens/Leaderboard";
import global from "../global";
import { createStackNavigator } from "@react-navigation/stack"  
import CourseDetails from "../Screens/courseDetail"
import Airframe from "../Screens/airframe"
import Powerplant from "../Screens/powerplane"
import LeaderboardDetails from "../Screens/Auth/LeaderboardDetails";
import LeaderboardAirframe from "../Screens/LeaderboardAirframe";
import LeaderboardPowerplant from "../Screens/LeaderboardPowerplant";
import PrivacyPolicy from "../Screens/PrivacyPolicy";
import TermsandConditions from "../Screens/TermsandConditions";
import ContactUs from "../Screens/ContactUs";
import ChangePasswordProfile from "../Screens/ChangePasswordProfile";
import EditProfile from "../Screens/EditProfile";



// const [animatePress, setAnimatePress] = useState(new Animated.Value(1));

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const LeaderStack = createStackNavigator();
const MoreStack = createStackNavigator();
const ProfileStack = createStackNavigator();



const HomeStackScreen =()=>(
<HomeStack.Navigator >
  <HomeStack.Screen name = "Home" component = {Home} options={{
            headerShown: true,
            headerTitleAlign:"center",
          }} />
  <HomeStack.Screen name= "CourseDetails" component = {CourseDetails}
  options={{
    headerShown: true,
    headerTitleAlign:"center",
    
  }}
  />
  <HomeStack.Screen name= "Airframe" component = {Airframe}
  options={{
    headerShown: true,
    headerTitleAlign:"center",
  }}
  />
   <HomeStack.Screen name= "Powerplant" component = {Powerplant}
  options={{
    headerShown: true,
    headerTitleAlign:"center",
  }}
  />
</HomeStack.Navigator>
)
 


const LeaderboardStackScreen= ()=>(
  <LeaderStack.Navigator>
    <LeaderStack.Screen name ="Leaderboard" component= {Leaderboard}
     options={{
      headerShown: true,
      headerTitleAlign:"center",
      backgroundColor:"#fff"
    }}
    />
    <LeaderStack.Screen name= "LeaderboardDetails" component = {LeaderboardDetails}
     options={{
      headerShown: true,
      headerTitleAlign:"center",
      backgroundColor:"#fff",
      title:"Leaderboard"
    }}
    />
       <LeaderStack.Screen name= "LeaderboardAirframe" component = {LeaderboardAirframe}
     options={{
      headerShown: true,
      headerTitleAlign:"center",
      backgroundColor:"#fff",
      title:"Leaderboard"
    }}
    />
        <LeaderStack.Screen name= "LeaderboardPowerplant" component = {LeaderboardPowerplant}
     options={{
      headerShown: true,
      headerTitleAlign:"center",
      backgroundColor:"#fff",
      title:"Leaderboard"
    }}
    />
  </LeaderStack.Navigator>
)

const MoreStackScreen = ()=>(
  <MoreStack.Navigator>
    <MoreStack.Screen name ="More" component={More}
     options={{
      headerShown: true,
      headerTitleAlign:"center",
      backgroundColor:"#fff"
    }}
    />
    <MoreStack.Screen name ="PrivacyPolicy" component={PrivacyPolicy}
     options={{
      headerShown: true,
      headerTitleAlign:"center",
      backgroundColor:"#fff",
      title:"Privacy Policy"
    }}
    />
    <MoreStack.Screen name ="TermsandConditions" component={TermsandConditions}
     options={{
      headerShown: true,
      headerTitleAlign:"center",
      backgroundColor:"#fff",
      title:"Terms & Conditions"
    }}
    />
    <MoreStack.Screen name="ContactUs" component={ContactUs}
     options={{
      headerShown: true,
      headerTitleAlign:"center",
      backgroundColor:"#fff",
      title:"Contact Us"
    }}
    />
  </MoreStack.Navigator>
)

const ProfileStackScreen=()=>(
  <ProfileStack.Navigator>
    <ProfileStack.Screen name ="Profile" component={Profile}
     options={{
      headerShown: false,
      headerTitleAlign:"center",
      backgroundColor:"#fff"
    }}
    />
    <ProfileStack.Screen name ="ChangePasswordProfile" component={ChangePasswordProfile}
       options={{
        headerShown: true,
        headerTitleAlign:"center",
        backgroundColor:"#fff",
        title:"Change Password"
      }}
    />
    <ProfileStack.Screen name="EditProfile" component={EditProfile}
    options={{
      headerShown: true,
      headerTitleAlign:"center",
      backgroundColor:"#fff",
      title:"Edit Profile"
    }}
    />
  </ProfileStack.Navigator>
)
export default function AppNavigator() {
  return (
      <Tab.Navigator 
      screenOptions={{
        headerShown:false,
        headerTitleAlign:"center",
        
        
        tabBarShowLabel:false,
          showLabel:false,
          tabBarStyle:{
              position:"absolute",
              // bottom:25,
              // left:20,
              // right:20,
              elevation:0,
              backgroundColor:"#fff",
              // borderRadius:15,
              height:70,
              marginTop:30,
              
          },     
      }}
      >
       
        {/* <Tab.Screen name="AuthLoading" component={AuthLoading} /> */}
        <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          headerShown: false,
        }}
        options={{
            tabBarIcon:({focused})=>(
                <View style={{alignItems:"center",justifyContent:"center",marginTop:10,marginBottom:5,
                }}>
                    <Image source={global.ASSETS.HOMEICON}
                    resizeMode="contain"
                    style={{
                        height:25,
                        width:25,
                        // alignSelf:"center",
                        tintColor:focused?"#0C2670":"gray"
                    }}
                    />
                    <Text style={{color:focused?"#0C2670":"gray"}}>Home</Text>
                </View>
            ),
        }}
      />
        <Tab.Screen  name="Leaderboard" component={LeaderboardStackScreen}
         options={{
          headerShown: false,
        }}
        options={{
            tabBarIcon:({focused})=>(
                <View style={{alignItems:"center",justifyContent:"center",marginTop:10,marginBottom:5}}>
                    <Image source={global.ASSETS.LEADERBOARD}
                    resizeMode="contain"
                    style={{
                        height:25,
                        width:25,
                        // alignSelf:"center",
                        tintColor:focused?"#0C2670":"gray"
                    }}
                    />
                    <Text style={{color:focused?"#0C2670":"gray"}}>Leaderboard</Text>
                </View>
            ),
        }}
        />
        <Tab.Screen name="Profile" component={ProfileStackScreen}
          options={{
            headerShown: false,
          }}
          options={{
            tabBarIcon:({focused})=>(
                <View style={{alignItems:"center",justifyContent:"center",marginTop:10,marginBottom:5}}>
                    <Image source={global.ASSETS.PROFILE}
                    resizeMode="contain"
                    style={{
                        height:25,
                        width:25,
                        // alignSelf:"center",
                        tintColor:focused?"#0C2670":"gray"
                    }}
                    />
                    <Text style={{color:focused?"#0C2670":"gray"}}>Profile</Text>
                </View>
            ),
        }}
        />
        <Tab.Screen name="More" component={MoreStackScreen}
         options={{
          headerShown: false,
        }}
        options={{
          tabBarIcon:({focused})=>(
              <View style={{alignItems:"center",justifyContent:"center",marginTop:10,marginBottom:5}}>
                  <Image source={global.ASSETS.MORE}
                  resizeMode="contain"
                  style={{
                      height:25,
                      width:25,
                      // alignSelf:"center",
                      tintColor:focused?"#0C2670":"gray"
                  }}
                  />
                  <Text style={{color:focused?"#0C2670":"gray"}}>More</Text>
              </View>
          ),
      }}
        />
      </Tab.Navigator>
      
      
  );
}
