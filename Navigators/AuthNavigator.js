import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"
import Login from '../Screens/Login'
import Signup from '../Screens/Signup'
import Forgot from '../Screens/Forgot'
import EmailVerification from "../Screens/emailVerification"
import ChangePassword from "../Screens/changePassword"
import OTP from "../Screens/opt"
import Home  from '../Screens/Home'
import CourseDetail from "../Screens/courseDetail"
import Airframe from "../Screens/airframe"
 

const Stack = createStackNavigator();
const animateIn = () => {
  Animated.timing(animatePress, {
    toValue: 0.5,
    duration: 500,
    useNativeDriver: true, // Add This line
  }).start();
};

export default function AuthNavigator() {
    return (
      <Stack.Navigator headerMode="none" initialRouteName="Login">
        
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="EmailVerification" component={EmailVerification} />
        <Stack.Screen name="ChangePassword" component={ChangePassword}/>
        <Stack.Screen name="OTP" component={OTP}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="CourseDetail" component={CourseDetail}/>
        <Stack.Screen name="Airframe" component={Airframe}/>
         
       
      </Stack.Navigator>
    );
  }
