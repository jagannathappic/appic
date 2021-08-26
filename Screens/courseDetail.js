import React, { Component } from 'react'
import { Text, StyleSheet, View,Image, TouchableOpacity,ScrollView,Model,Animated } from 'react-native'
import global from '../global'
import { Divider,Overlay } from "react-native-elements";
import { StatusBar } from 'expo-status-bar';




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


export default class courseDetail extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          selected:"1",
          isVisible:false,
          oral:"1"
        };
      }

       // Toggle camera options
 chooseQuiz = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };
    render() {
        return (
            <View style={styles.container}>
             <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:54}}>
                    <View >
                    <Image source={global.ASSETS.COURSE} style={{height:200,width:400}} />
                </View>
                <View style={{marginHorizontal:"5%"}}>
                <View>
                    <Text style={styles.bachelorText}>
                        Bachelor of Business Administration
                    </Text>
                    <Text style={styles.bottomText}>
                      Et sit tempor ipsum justo tempor amet sit.
                       Gubergren justo dolor sit tempor no diam et,
                        amet stet magna tempor clita nonumy sit sadipscing vero rebum,
                         erat et ea et diam invidunt ipsum, sed diam aliquyam kasd eos.
                          Amet clita kasd sed dolore sed accusam takimata, et sea sanctus dolores.  
                    </Text>
                    <View style={styles.quizBackContainer}>
                        <TouchableOpacity   onPress={() =>
                  this.setState({
                    selected: "1",
                  })
                }
               style={[styles.materialConainer,
                        {
                            backgroundColor:this.state.selected=="1"?"#0C2670":"#fff"
                        }
                        ]} >
                          <Text style={[styles.materialText,
                        {
                            color:this.state.selected == "1" ?"#fff":"#000"
                        }
                        ]}>
                            Study Material
                        </Text>  
                        </TouchableOpacity>
                        
                        <TouchableOpacity  onPress={() =>
                  this.setState({
                    selected: "2",
                  })
                } style={[styles.materialConainer,
                        {
                            backgroundColor:this.state.selected=="2"?"#0C2670":"#fff"
                        }
                        ]}>
                          <Text style={[styles.materialText,
                        {
                            color:this.state.selected == "2"? "#fff" : "#000"
                        }
                        ]}>
                            Quiz
                        </Text>  
                        </TouchableOpacity>
                    </View>
                    </View>
                    {
                   this.state.selected=="1" ?(
                   <View>
                        <TouchableOpacity style={styles.quizBackContainer} 
                   onPress={() => {
                    this.chooseQuiz();
                    
                  }}
                   >
                   <Text style={styles.chapterText}>
                       Basic Electricity
                   </Text>
                  <Image source={global.ASSETS.NEXT} />
               </TouchableOpacity>
               <Divider  style= {styles.divider} />
               <TouchableOpacity style={styles.quizBackContainer}
               onPress={() => {
                this.chooseQuiz();
                
              }}
               >
                   <Text style={styles.chapterText}>
                       Aircraft Drawings
                   </Text>
                  <Image source={global.ASSETS.NEXT} />
               </TouchableOpacity>
               <Divider  style= {styles.divider} />
               <TouchableOpacity style={styles.quizBackContainer}
               onPress={() => {
                this.chooseQuiz();
                
              }}
               >
                   <Text style={styles.chapterText}>
                       Weight and Balance
                   </Text>
                  <Image source={global.ASSETS.NEXT} />
               </TouchableOpacity>
               <Divider  style= {styles.divider} />
               <TouchableOpacity style={styles.quizBackContainer}
               onPress={() => {
                this.chooseQuiz();
                
              }}
               >
                   <Text style={styles.chapterText}>
                       Fluid Lines and Fittings
                   </Text>
                  <Image source={global.ASSETS.NEXT} />
               </TouchableOpacity>
               <Divider  style= {styles.divider} />
               <TouchableOpacity style={styles.quizBackContainer}
               onPress={() => {
                this.chooseQuiz();
                
              }}
               >
                   <Text style={styles.chapterText}>
                       Material and Processes
                   </Text>
                  <Image source={global.ASSETS.NEXT} />
               </TouchableOpacity>
               <Divider  style= {styles.divider} />
               <TouchableOpacity style={styles.quizBackContainer}
               onPress={() => {
                this.chooseQuiz();
                
              }}
               >
                   <Text style={styles.chapterText}>
                       Ground Operation and Servicing
                   </Text>
                  <Image source={global.ASSETS.NEXT} />
               </TouchableOpacity>
               <Divider  style= {styles.divider} />
               <TouchableOpacity style={styles.quizBackContainer}
               onPress={() => {
                this.chooseQuiz();
                
              }}
               >
                   <Text style={styles.chapterText}>
                       Mathematics
                   </Text>
                  <Image source={global.ASSETS.NEXT} />
               </TouchableOpacity>
               <Divider  style= {styles.divider} /> 
               <TouchableOpacity style={styles.quizBackContainer}
               onPress={() => {
                this.chooseQuiz();
                
              }}
               >
                   <Text style={styles.chapterText}>
                      Maintence Forms and Records
                   </Text>
                  <Image source={global.ASSETS.NEXT} />
               </TouchableOpacity>
               <Divider  style= {styles.divider} /> 
               <TouchableOpacity style={styles.quizBackContainer}
               onPress={() => {
                this.chooseQuiz();
                
              }}
               >
                   <Text style={styles.chapterText}>
                       Basic Physics
                   </Text>
                  <Image source={global.ASSETS.NEXT} />
               </TouchableOpacity>
               <Divider  style= {styles.divider} /> 
               <TouchableOpacity style={styles.quizBackContainer}
               onPress={() => {
                this.chooseQuiz();
                
              }}
               >
                   <Text style={styles.chapterText}>
                       Maintenance Publications
                   </Text>
                  <Image source={global.ASSETS.NEXT} />
               </TouchableOpacity>
               <Divider  style= {styles.divider} /> 
               <TouchableOpacity style={styles.quizBackContainer}
               onPress={() => {
                this.chooseQuiz();
                
              }}
               >
                   <Text style={styles.chapterText}>
                      Aviation Mechanic Privileges and Limitations
                   </Text>
                  <Image source={global.ASSETS.NEXT} />
               </TouchableOpacity>
               <Divider  style= {styles.divider} />
                   </View>)
                   :
                   (
                   <View>
                             <View style={styles.quizContainer}
                   >
                       <View style={styles.textContainer}>
                        <Text style={styles.chapterText}>
                         Basic Electricity
                        </Text>   
                       </View>
                   
                   
                       {/* <Progress step= {3} steps={10} height={20} />   */}
                        <View style={{width:"40%",marginTop:-10}}>
                         <Text style={{alignSelf:"flex-end",color:"gray",}}>55%</Text>  
                       <Progress step= {3} steps={10} height={20} />  
                        </View>
               </View> 
               <Divider style={styles.divider} />
                  
               <View style={styles.quizContainer}
                   >
                       <View style={styles.textContainer}>
                        <Text style={styles.chapterText}>
                         Aircraft Drawings
                        </Text>   
                       </View>
                   
                   
                       {/* <Progress step= {3} steps={10} height={20} />   */}
                        <View style={{width:"40%",marginTop:-10}}>
                         <Text style={{alignSelf:"flex-end",color:"gray",}}>55%</Text>  
                       <Progress step= {3} steps={10} height={20} />  
                        </View>
               </View> 
               <Divider style={styles.divider} />
                 
               <View style={styles.quizContainer}
                   >
                       <View style={styles.textContainer}>
                        <Text style={styles.chapterText}>
                         Weight and Balance
                        </Text>   
                       </View>
                   
                   
                       {/* <Progress step= {3} steps={10} height={20} />   */}
                        <View style={{width:"40%",marginTop:-10}}>
                         <Text style={{alignSelf:"flex-end",color:"gray",}}>55%</Text>  
                       <Progress step= {3} steps={10} height={20} />  
                        </View>
               </View> 
               <Divider style={styles.divider} />
                 
               <View style={styles.quizContainer}
                   >
                       <View style={styles.textContainer}>
                        <Text style={styles.chapterText}>
                         Fluid Lines and Fittings
                        </Text>   
                       </View>
                   
                   
                       {/* <Progress step= {3} steps={10} height={20} />   */}
                        <View style={{width:"40%",marginTop:-10}}>
                         <Text style={{alignSelf:"flex-end",color:"gray",}}>55%</Text>  
                       <Progress step= {3} steps={10} height={20} />  
                        </View>
               </View> 
               <Divider style={styles.divider} />
                 
               <View style={styles.quizContainer}
                   >
                       <View style={styles.textContainer}>
                        <Text style={styles.chapterText}>
                        Material and Processes
                        </Text>   
                       </View>
                   
                   
                       {/* <Progress step= {3} steps={10} height={20} />   */}
                        <View style={{width:"40%",marginTop:-10}}>
                         <Text style={{alignSelf:"flex-end",color:"gray",}}>55%</Text>  
                       <Progress step= {3} steps={10} height={20} />  
                        </View>
               </View> 
               <Divider style={styles.divider} />
                 
               <View style={styles.quizContainer}
                   >
                       <View style={styles.textContainer}>
                        <Text style={styles.chapterText}>
                         Ground Operation and Servicing
                        </Text>   
                       </View>
                   
                   
                       {/* <Progress step= {3} steps={10} height={20} />   */}
                        <View style={{width:"40%",marginTop:-10}}>
                         <Text style={{alignSelf:"flex-end",color:"gray",}}>55%</Text>  
                       <Progress step= {3} steps={10} height={20} />  
                        </View>
               </View> 
               <Divider style={styles.divider} />
                 
               <View style={styles.quizContainer}
                   >
                       <View style={styles.textContainer}>
                        <Text style={styles.chapterText}>
                         Mathematics
                        </Text>   
                       </View>
                   
                   
                       {/* <Progress step= {3} steps={10} height={20} />   */}
                        <View style={{width:"40%",marginTop:-10}}>
                         <Text style={{alignSelf:"flex-end",color:"gray",}}>55%</Text>  
                       <Progress step= {3} steps={10} height={20} />  
                        </View>
               </View> 
               <Divider style={styles.divider} />
                 
               <View style={styles.quizContainer}
                   >
                       <View style={styles.textContainer}>
                        <Text style={styles.chapterText}>
                        Maintenance Forms and Records
                        </Text>   
                       </View>
                   
                   
                       {/* <Progress step= {3} steps={10} height={20} />   */}
                        <View style={{width:"40%",marginTop:-10}}>
                         <Text style={{alignSelf:"flex-end",color:"gray",}}>55%</Text>  
                       <Progress step= {3} steps={10} height={20} />  
                        </View>
               </View> 
               <Divider style={styles.divider} />
                 
               <View style={styles.quizContainer}
                   >
                       <View style={styles.textContainer}>
                        <Text style={styles.chapterText}>
                         Basic Physics
                        </Text>   
                       </View>
                   
                   
                       {/* <Progress step= {3} steps={10} height={20} />   */}
                        <View style={{width:"40%",marginTop:-10}}>
                         <Text style={{alignSelf:"flex-end",color:"gray",}}>55%</Text>  
                       <Progress step= {3} steps={10} height={20} />  
                        </View>
               </View> 
               <Divider style={styles.divider} />
                 
               <View style={styles.quizContainer}
                   >
                       <View style={styles.textContainer}>
                        <Text style={styles.chapterText}>
                         Maintenance Publications
                        </Text>   
                       </View>
                   
                   
                       {/* <Progress step= {3} steps={10} height={20} />   */}
                        <View style={{width:"40%",marginTop:-10}}>
                         <Text style={{alignSelf:"flex-end",color:"gray",}}>55%</Text>  
                       <Progress step= {3} steps={10} height={20} />  
                        </View>
               </View> 
               <Divider style={styles.divider} />
                
               
               <View style={styles.quizContainer}
                   >
                       <View style={styles.textContainer}>
                        <Text style={styles.chapterText}>
                         Aviation Mechanic Privileges and Limitations
                        </Text>   
                       </View>
                   
                   
                       {/* <Progress step= {3} steps={10} height={20} />   */}
                        <View style={{width:"40%",marginTop:-10}}>
                         <Text style={{alignSelf:"flex-end",color:"gray",}}>55%</Text>  
                       <Progress step= {3} steps={10} height={20} />  
                        </View>
               </View> 
               <Divider style={styles.divider} />
                   </View>)}
                          
                      
                        
                      
                   
                </View>
                
             </ScrollView>
            
            
             <Overlay
          overlayStyle={styles.overlay}
          containerStyle={styles.overlayContainer}
          isVisible={this.state.isVisible}
          transparent={true}
          width={200}
          height={150}
          animationType="slide"
         
        >
             <TouchableOpacity style={{alignSelf:'flex-end',paddingTop:"5%"}}
              onPress={() => {
                this.chooseQuiz(); 
              }}
             >
                 <Image source={global.ASSETS.CUT} style={styles.cutIcon} />
             </TouchableOpacity>
         <View style={styles.overlayStyle}>
            
            
         <Text style={styles.selectText}>Select Type</Text>
         <TouchableOpacity 
          onPress={() =>
            this.setState({
              oral: "1",
            })
          }
         style={[styles.oralContainer,
         {
             backgroundColor:this.state.oral=="1"? "#0C2670":"#fff"
         }
         ]}>
         <Text style={[styles.oralText,
        {
            color:this.state.oral=="1"?"#fff":"#000"
        }
        ]}>Oral</Text>
         </TouchableOpacity>
 <TouchableOpacity
         onPress={()=>
        this.setState({
            oral:"2"
        })
        }
         style={[styles.oralContainer,
         {
             backgroundColor:this.state.oral=="2"?"#0C2670":"#fff"
         }
         ]}>
         <Text style={[styles.oralText,
        {
            color:this.state.oral=="2"?"#fff":"#000"
        }
        ]}>Written</Text>
         </TouchableOpacity>
         {/* <TouchableOpacity
        onPress={() =>
            this.setState({
              oral: "1",
            })
          }
         style={[styles.oralContainer,
        {
            backgroundColor:this.state.oral=="1"?"#0C2670":"#fff"
        }
        ]}>
         <Text style={[styles.oralText,
        {
            color:this.state.oral == "1" ?"#fff":"#000"
        }
        ]}>Oral</Text>
         </TouchableOpacity> */}
         {/* <TouchableOpacity
          onPress={() =>
            this.setState({
                oral: "2",
            })
          }
         style={[styles.oralContainer,
        {
            backgroundColor:this.state.oral=="2"?"#0C2670":"#fff"
        }
        ]}>
         <Text style={[styles.oralText,
        {
            color:this.state.oral == "2" ?"#fff":"#000"
        }
        ]}>Written</Text>
         </TouchableOpacity> */}
         </View>
        </Overlay>
     
              
               
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
    homeText:{
        alignSelf:"center",
        // marginTop:40,
        fontWeight:"bold",
        fontSize:18,
        // marginBottom:16
    },
    backIcon:{
        height:20,
        width:20,
        resizeMode:"contain",
        paddingLeft:20
      //   marginHorizontal:10
        
    },
    bachelorText:{
        fontSize:18,
        // alignSelf:"center",
        marginVertical:10,
        fontWeight:"600"
    },
    bottomText:{
        fontSize:14,
        color:"gray",
        // marginHorizontal:18,
        textAlign: "justify"
    },
    quizBackContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    materialText:{
        marginVertical:10,
        alignSelf:"center"
    },
    materialConainer:{borderColor:"#0C2670",
    borderWidth:1,
    width:"48%",
    borderRadius:5,
    marginVertical:20
},
oralContainer:{borderColor:"#0C2670",
borderWidth:0.5,
width:"90%",
borderRadius:10,
marginBottom:20,
alignSelf:"center"
},


overlay: {
    backgroundColor: "#fff",
    marginTop:  "115%",
    flex: 1,
    // justifyContent: ":",
    borderRadius: 20,
    marginBottom:"15%",
  },
  overlayContainer: {
    backgroundColor: "transparent",
  },
  overlayStyle:{
      height:200,
      width:300,
      backgroundColor:"#fff"
    //   marginTop:"10%"
  },
  selectText:{
      fontSize:16,
      fontWeight:"900",
      alignSelf:"center",
    //   marginTop:"3%",
      marginBottom:"13%"
  },
  oralText:{
      marginVertical:12,
      alignSelf:"center"
  },cutIcon:{
      alignSelf:"flex-end",
    //   paddingBottom:"14%",
      marginTop:"-12%",
      alignSelf:"flex-end",
      marginRight:"-6.5%",
    //   paddingLeft:"-8%"
  },
  quizContainer:{
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
