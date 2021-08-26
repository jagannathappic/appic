import React, { Component } from 'react'
import { Text, StyleSheet, View,Animated,Image,ScrollView } from 'react-native'
import { Divider,Overlay } from "react-native-elements";
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

    <View
    onLayout={e=>{
        const newWidth = e.nativeEvent.layout.width;
        setWidth(newWidth)
    }}
    style={{
        backgroundColor:'rgba(0,0,0,0.1)',
        width:"100%",
        height:6,
        // borderRadius:height,
        overflow:'hidden',
        marginTop:"2%"
        
    }}>
        <Animated.View style={{
            height:6,
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

export default class LeaderboardAirframe extends Component {
    render() {
        return (
            <View style={styles.container}>
             <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:54}}>
                
                   <View style={styles.quizBackContainer}
                   >
                       <View style={styles.textContainer}>
                        <Text style={styles.chapterText}>
                         Wood Structure
                        </Text>   
                       </View>
                   
                   
                       {/* <Progress step= {3} steps={10} height={20} />   */}
                        <View style={{width:"40%",marginTop:-10}}>
                         <Text style={{alignSelf:"flex-end",color:"gray",}}>55%</Text>  
                       <Progress step= {3} steps={10} height={20} />  
                        </View>
               </View> 
               <Divider style={styles.divider} />
                  
               <View style={styles.quizBackContainer}
                   >
                       <View style={styles.textContainer}>
                        <Text style={styles.chapterText}>
                         Aircraft Covering
                        </Text>   
                       </View>
                   
                   
                       {/* <Progress step= {3} steps={10} height={20} />   */}
                        <View style={{width:"40%",marginTop:-10}}>
                         <Text style={{alignSelf:"flex-end",color:"gray",}}>55%</Text>  
                       <Progress step= {3} steps={10} height={20} />  
                        </View>
               </View> 
               <Divider style={styles.divider} />
                 
               <View style={styles.quizBackContainer}
                   >
                       <View style={styles.textContainer}>
                        <Text style={styles.chapterText}>
                         Aircraft Finishes
                        </Text>   
                       </View>
                   
                   
                       {/* <Progress step= {3} steps={10} height={20} />   */}
                        <View style={{width:"40%",marginTop:-10}}>
                         <Text style={{alignSelf:"flex-end",color:"gray",}}>55%</Text>  
                       <Progress step= {3} steps={10} height={20} />  
                        </View>
               </View> 
               <Divider style={styles.divider} />
                 
               <View style={styles.quizBackContainer}
                   >
                       <View style={styles.textContainer}>
                        <Text style={styles.chapterText}>
                         Sheet Metal and Non-Metallic Structure
                        </Text>   
                       </View>
                   
                   
                       {/* <Progress step= {3} steps={10} height={20} />   */}
                        <View style={{width:"40%",marginTop:-10}}>
                         <Text style={{alignSelf:"flex-end",color:"gray",}}>55%</Text>  
                       <Progress step= {3} steps={10} height={20} />  
                        </View>
               </View> 
               <Divider style={styles.divider} />
                 
               <View style={styles.quizBackContainer}
                   >
                       <View style={styles.textContainer}>
                        <Text style={styles.chapterText}>
                        Welding
                        </Text>   
                       </View>
                   
                   
                       {/* <Progress step= {3} steps={10} height={20} />   */}
                        <View style={{width:"40%",marginTop:-10}}>
                         <Text style={{alignSelf:"flex-end",color:"gray",}}>55%</Text>  
                       <Progress step= {3} steps={10} height={20} />  
                        </View>
               </View> 
               <Divider style={styles.divider} />
                 
               <View style={styles.quizBackContainer}
                   >
                       <View style={styles.textContainer}>
                        <Text style={styles.chapterText}>
                         Assembly and Rigging
                        </Text>   
                       </View>
                   
                   
                       {/* <Progress step= {3} steps={10} height={20} />   */}
                        <View style={{width:"40%",marginTop:-10}}>
                         <Text style={{alignSelf:"flex-end",color:"gray",}}>55%</Text>  
                       <Progress step= {3} steps={10} height={20} />  
                        </View>
               </View> 
               <Divider style={styles.divider} />
                 
               <View style={styles.quizBackContainer}
                   >
                       <View style={styles.textContainer}>
                        <Text style={styles.chapterText}>
                         Airframe Inspection
                        </Text>   
                       </View>
                   
                   
                       {/* <Progress step= {3} steps={10} height={20} />   */}
                        <View style={{width:"40%",marginTop:-10}}>
                         <Text style={{alignSelf:"flex-end",color:"gray",}}>55%</Text>  
                       <Progress step= {3} steps={10} height={20} />  
                        </View>
               </View> 
               <Divider style={styles.divider} />
                 
               <View style={styles.quizBackContainer}
                   >
                       <View style={styles.textContainer}>
                        <Text style={styles.chapterText}>
                        Aircraft Landing Gear Systems
                        </Text>   
                       </View>
                   
                   
                       {/* <Progress step= {3} steps={10} height={20} />   */}
                        <View style={{width:"40%",marginTop:-10}}>
                         <Text style={{alignSelf:"flex-end",color:"gray",}}>55%</Text>  
                       <Progress step= {3} steps={10} height={20} />  
                        </View>
               </View> 
               <Divider style={styles.divider} />
                 
               <View style={styles.quizBackContainer}
                   >
                       <View style={styles.textContainer}>
                        <Text style={styles.chapterText}>
                         Hydraulic and Pneumatic Power
                        </Text>   
                       </View>
                   
                   
                       {/* <Progress step= {3} steps={10} height={20} />   */}
                        <View style={{width:"40%",marginTop:-10}}>
                         <Text style={{alignSelf:"flex-end",color:"gray",}}>55%</Text>  
                       <Progress step= {3} steps={10} height={20} />  
                        </View>
               </View> 
               <Divider style={styles.divider} />
                 
               <View style={styles.quizBackContainer}
                   >
                       <View style={styles.textContainer}>
                        <Text style={styles.chapterText}>
                         Cabin Atmosphere Control Systems
                        </Text>   
                       </View>
                   
                   
                       {/* <Progress step= {3} steps={10} height={20} />   */}
                        <View style={{width:"40%",marginTop:-10}}>
                         <Text style={{alignSelf:"flex-end",color:"gray",}}>55%</Text>  
                       <Progress step= {3} steps={10} height={20} />  
                        </View>
               </View> 
               <Divider style={styles.divider} />
                
               
               <View style={styles.quizBackContainer}
                   >
                       <View style={styles.textContainer}>
                        <Text style={styles.chapterText}>
                         Aircraft Instrument Systems
                        </Text>   
                       </View>
                   
                   
                       {/* <Progress step= {3} steps={10} height={20} />   */}
                        <View style={{width:"40%",marginTop:-10}}>
                         <Text style={{alignSelf:"flex-end",color:"gray",}}>55%</Text>  
                       <Progress step= {3} steps={10} height={20} />  
                        </View>
               </View> 
               <Divider style={styles.divider} />
               <View style={styles.quizBackContainer}
                   >
                       <View style={styles.textContainer}>
                        <Text style={styles.chapterText}>
                         Communication and Navigation Systems
                        </Text>   
                       </View>
                   
                   
                       {/* <Progress step= {3} steps={10} height={20} />   */}
                        <View style={{width:"40%",marginTop:-10}}>
                         <Text style={{alignSelf:"flex-end",color:"gray",}}>55%</Text>  
                       <Progress step= {3} steps={10} height={20} />  
                        </View>
               </View> 
               <Divider style={styles.divider} />
               <View style={styles.quizBackContainer}
                   >
                       <View style={styles.textContainer}>
                        <Text style={styles.chapterText}>
                        Aircraft Fuel Systems
                        </Text>   
                       </View>
                   
                   
                       {/* <Progress step= {3} steps={10} height={20} />   */}
                        <View style={{width:"40%",marginTop:-10}}>
                         <Text style={{alignSelf:"flex-end",color:"gray",}}>55%</Text>  
                       <Progress step= {3} steps={10} height={20} />  
                        </View>
               </View> 
               <Divider style={styles.divider} />
               <View style={styles.quizBackContainer}
                   >
                       <View style={styles.textContainer}>
                        <Text style={styles.chapterText}>
                         Aircraft Electical Systems
                        </Text>   
                       </View>
                   
                   
                       {/* <Progress step= {3} steps={10} height={20} />   */}
                        <View style={{width:"40%",marginTop:-10}}>
                         <Text style={{alignSelf:"flex-end",color:"gray",}}>55%</Text>  
                       <Progress step= {3} steps={10} height={20} />  
                        </View>
               </View> 
               <Divider style={styles.divider} />
               <View style={styles.quizBackContainer}
                   >
                       <View style={styles.textContainer}>
                        <Text style={styles.chapterText}>
                         Position and Warning Systems
                        </Text>   
                       </View>
                   
                   
                       {/* <Progress step= {3} steps={10} height={20} />   */}
                        <View style={{width:"40%",marginTop:-10}}>
                         <Text style={{alignSelf:"flex-end",color:"gray",}}>55%</Text>  
                       <Progress step= {3} steps={10} height={20} />  
                        </View>
               </View> 
               <Divider style={styles.divider} />
               <View style={styles.quizBackContainer}
                   >
                       <View style={styles.textContainer}>
                        <Text style={styles.chapterText}>
                         Ice and Rain Control Systems
                        </Text>   
                       </View>
                   
                   
                       {/* <Progress step= {3} steps={10} height={20} />   */}
                        <View style={{width:"40%",marginTop:-10}}>
                         <Text style={{alignSelf:"flex-end",color:"gray",}}>55%</Text>  
                       <Progress step= {3} steps={10} height={20} />  
                        </View>
               </View> 
               <Divider style={styles.divider} />
               <View style={styles.quizBackContainer}
                   >
                       <View style={styles.textContainer}>
                        <Text style={styles.chapterText}>
                         Fire Protection Systems
                        </Text>   
                       </View>
                   
                   
                       {/* <Progress step= {3} steps={10} height={20} />   */}
                        <View style={{width:"40%",marginTop:-10}}>
                         <Text style={{alignSelf:"flex-end",color:"gray",}}>55%</Text>  
                       <Progress step= {3} steps={10} height={20} />  
                        </View>
               </View> 
               <Divider style={styles.divider} />
</ScrollView> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
container:{
    flex:1,
    width:null,

},
quizBackContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:"4%",
    marginHorizontal:"4%"
},
chapterText:{
    fontSize:16,
    width:"90%"
},divider:{
    height:0.3,
    backgroundColor:"gray",
    width:400,
    marginHorizontal:-40,
    marginVertical:14
},
textContainer:{
    width:"60%"
}

})
