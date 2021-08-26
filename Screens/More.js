import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity,Image } from 'react-native'
import global from "../global"
import { Divider,Overlay } from "react-native-elements";


export default class More extends Component {
    static navigationOptions= ()=>{
        header=null
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{marginHorizontal:"3%"}}>
                     <TouchableOpacity
                     onPress={()=>this.props.navigation.navigate("PrivacyPolicy")}
                     style={styles.quizBackContainer}>
                   <Text style={styles.chapterText}>
                       Privacy Policy
                   </Text>
                  <Image source={global.ASSETS.NEXT} style={styles.image} />
               </TouchableOpacity> 
               <Divider  style= {styles.divider} /> 
               <TouchableOpacity
               onPress={()=>this.props.navigation.navigate("TermsandConditions")}
               style={styles.quizBackContainer}>
                   <Text style={styles.chapterText}>
                       Terms and Conditions
                   </Text>
                  <Image source={global.ASSETS.NEXT} style={styles.image} />
               </TouchableOpacity> 
               <Divider  style= {styles.divider} /> 
               <TouchableOpacity
               onPress={()=>this.props.navigation.navigate("ContactUs")}
               style={styles.quizBackContainer}>
                   <Text style={styles.chapterText}>
                       Contact Support
                   </Text>
                  <Image source={global.ASSETS.NEXT} style={styles.image} />
               </TouchableOpacity> 
               <Divider  style= {styles.divider} /> 

                </View>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:null,
        backgroundColor:"#fff"
    },
    quizBackContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    chapterText:{
        fontSize:16,
        width:"90%",
        marginVertical:"5%"
    },
    image:{
        height:15,
        width:15,
        resizeMode:"contain",
        marginVertical:"6%"
    },
    divider:{
        height:0.3,
        backgroundColor:"gray",
        width:400,
        // marginHorizontal:-40,
        // marginVertical:14
    },
})
