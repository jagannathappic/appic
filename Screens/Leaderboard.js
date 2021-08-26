import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity,Image, Animated } from 'react-native'
import { Divider } from "react-native-elements"
import { StatusBar } from 'expo-status-bar';
import global from "../global"



const Progress = ({step,steps,height})=>{
    const [width,setWidth] = React.useState(0)
    const animatedValue = React.useRef(new Animated.Value(-1000)).current
    const reactive = React.useRef(new Animated.Value(-1000)).current



     React.useEffect(()=>{
         Animated.timing(animatedValue,{
             toValue:reactive,
             duration:300,
             useNativeDriver:true
         }).start();
     }, []);

     React.useEffect(()=>{
      reactive.setValue(-width +(width*step)/steps)
     },[step,width]);
    return(
        <>
        <Text style={{alignSelf:"flex-end",color:"gray"}}>55%</Text>
    <View
    onLayout={e=>{
        const newWidth = e.nativeEvent.layout.width;
        setWidth(newWidth)
    }}
    style={{
        backgroundColor:'rgba(0,0,0,0.1)',

        height:8,
        // borderRadius:height,
        overflow:'hidden'
    }}>
        <Animated.View style={{
            height:8,
            width:"100%",
            // borderRadius:height,
        backgroundColor:global.COLOR.PRIMARY,

            position:"absolute",
            left:0,
            top:0,
            transform:[
                {
                    translateX: animatedValue,
                }
            ]
        }}

        />
        
    </View>
    </>
    )
   
}
export default class Leaderboard extends Component {
     static navigationOptions = {
    header: null,
  };
    render() {
        return (
            <View style={styles.container}>
      <TouchableOpacity style={styles.imageContainer}
                onPress={()=>this.props.navigation.navigate("LeaderboardDetails")}
                >
            <Image source = {global.ASSETS.LEADERBOARDIMAGE} style={styles.image}  />
            <Text style={styles.courseText}>General</Text>
            <View style={{marginBottom:20,marginHorizontal:20}}>
            <Progress step= {3} steps={10} height={20} /> 

            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer}
                onPress={()=>this.props.navigation.navigate("LeaderboardAirframe")}
                >
            <Image source = {global.ASSETS.LEADERBOARDIMAGE} style={styles.image}  />
            <Text style={styles.courseText}>Airframe</Text>
            <View style={{marginBottom:20,marginHorizontal:20}}>
            <Progress step= {5} steps={10} height={20} /> 

            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer}
                onPress={()=>this.props.navigation.navigate("LeaderboardPowerplant")}
                >
            <Image source = {global.ASSETS.LEADERBOARDIMAGE} style={styles.image}  />
            <Text style={styles.courseText}>Powerplant</Text>
            <View style={{marginBottom:20,marginHorizontal:20}}>
            <Progress step= {8} steps={10} height={20} /> 

            </View>
        </TouchableOpacity>
        
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:null,
        backgroundColor:"#fff",
        

    },
    courseText:{
        color:"#000",
        fontSize:14,
        marginHorizontal:20,
        // marginVertical:10,
        fontWeight:"bold",
        marginTop:10
    },
    imageContainer:{
      backgroundColor:"#fff",
        borderWidth:0.1,
        borderColor:"#fff",
        borderRadius:10,
        marginTop:10,
        marginHorizontal:16,
        marginBottom:10,
       
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.98,
        // shadowRadius: 3,
        elevation: 3,
      
    },
    image:{width:"100%",
    height:100, 
      resizeMode:"cover",
      borderTopLeftRadius:9,
      borderTopRightRadius:9,
      alignSelf:"center"
      }
   
})
