import React, { Component } from 'react'
import { Text, StyleSheet, View,Image, TouchableOpacity,ScrollView,Model } from 'react-native'
import global from '../global'
import { Divider,Overlay } from "react-native-elements";






export default class powerplane extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selected:"1",
          isVisible:false,
          oral:"1"
        };
      }

       // Toggle camera options
 chooseUpload = () => {
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
                   <TouchableOpacity style={styles.quizBackContainer} 
                //    onPress={() => {
                //     this.chooseUpload();
                    
                //   }}
                   >
                   <Text style={styles.chapterText}>
                   Reciprocating Engines
                   </Text>
                  <Image source={global.ASSETS.NEXT} />
               </TouchableOpacity>
               <Divider  style= {styles.divider} />
               <TouchableOpacity style={styles.quizBackContainer}>
                   <Text style={styles.chapterText}>
                   Turbine Engines
                   </Text>
                  <Image source={global.ASSETS.NEXT} />
               </TouchableOpacity>
               <Divider  style= {styles.divider} />
               <TouchableOpacity style={styles.quizBackContainer}>
                   <Text style={styles.chapterText}>
                   Engine Inspection
                   </Text>
                  <Image source={global.ASSETS.NEXT} />
               </TouchableOpacity>
               <Divider  style= {styles.divider} />
               <TouchableOpacity style={styles.quizBackContainer}>
                   <Text style={styles.chapterText}>
                   Engine Instrument Systems
                   </Text>
                  <Image source={global.ASSETS.NEXT} />
               </TouchableOpacity>
               <Divider  style= {styles.divider} />
               <TouchableOpacity style={styles.quizBackContainer}>
                   <Text style={styles.chapterText}>
                   Engine Fire Protection Systems

                   </Text>
                  <Image source={global.ASSETS.NEXT} />
               </TouchableOpacity>
               <Divider  style= {styles.divider} />
               <TouchableOpacity style={styles.quizBackContainer}>
                   <Text style={styles.chapterText}>
                   Engine Electrical Systems
                   </Text>
                  <Image source={global.ASSETS.NEXT} />
               </TouchableOpacity>
               <Divider  style= {styles.divider} />
               <TouchableOpacity style={styles.quizBackContainer}>
                   <Text style={styles.chapterText}>
                   Lubrication Systems
                   </Text>
                  <Image source={global.ASSETS.NEXT} />
               </TouchableOpacity>
               <Divider  style= {styles.divider} /> 
               <TouchableOpacity style={styles.quizBackContainer}>
                   <Text style={styles.chapterText}>
                   Ignition and Starting Systems
                   </Text>
                  <Image source={global.ASSETS.NEXT} />
               </TouchableOpacity>
               <Divider  style= {styles.divider} /> 
               <TouchableOpacity style={styles.quizBackContainer}>
                   <Text style={styles.chapterText}>
                   Fuel Metering Systems
                   </Text>
                  <Image source={global.ASSETS.NEXT} />
               </TouchableOpacity>
               <Divider  style= {styles.divider} /> 
               <TouchableOpacity style={styles.quizBackContainer}>
                   <Text style={styles.chapterText}>
                   Engine Fuel Systems
                   </Text>
                  <Image source={global.ASSETS.NEXT} />
               </TouchableOpacity>
               <Divider  style= {styles.divider} /> 
               <TouchableOpacity style={styles.quizBackContainer}>
                   <Text style={styles.chapterText}>
                   Induction and Engine Airflow Systems
                   </Text>
                  <Image source={global.ASSETS.NEXT} />
               </TouchableOpacity>
               <Divider  style= {styles.divider} />
               <TouchableOpacity style={styles.quizBackContainer}>
                   <Text style={styles.chapterText}>
                   Engine Cooling Systems
                   </Text>
                  <Image source={global.ASSETS.NEXT} />
               </TouchableOpacity>
               <Divider  style= {styles.divider} />
               <TouchableOpacity style={styles.quizBackContainer}>
                   <Text style={styles.chapterText}>
                   Engine Exhaust and Reverser Systems
                   </Text>
                  <Image source={global.ASSETS.NEXT} />
               </TouchableOpacity>
               <Divider  style= {styles.divider} />
               <TouchableOpacity style={styles.quizBackContainer}>
                   <Text style={styles.chapterText}>
                   Propellers
                   </Text>
                  <Image source={global.ASSETS.NEXT} />
               </TouchableOpacity>
               <Divider  style= {styles.divider} />
               <TouchableOpacity style={styles.quizBackContainer}>
                   <Text style={styles.chapterText}>
                   Auxiliary Power Units
                   </Text>
                  <Image source={global.ASSETS.NEXT} />
               </TouchableOpacity>
               <Divider  style= {styles.divider} />
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
         <View style={styles.overlayStyle}>
            
         <Text style={styles.selectText}>Select Type</Text>
         <TouchableOpacity
        onPress={() =>
            this.setState({
              selected: "1",
            })
          }
         style={[styles.oralContainer,
        {
            backgroundColor:this.state.selected=="1"?"#0C2670":"#fff"
        }
        ]}>
         <Text style={[styles.oralText,
        {
            color:this.state.selected == "1" ?"#fff":"#000"
        }
        ]}>Oral</Text>
         </TouchableOpacity>
         <TouchableOpacity
          onPress={() =>
            this.setState({
              selected: "2",
            })
          }
         style={[styles.oralContainer,
        {
            backgroundColor:this.state.selected=="2"?"#0C2670":"#fff"
        }
        ]}>
         <Text style={[styles.oralText,
        {
            color:this.state.selected == "2" ?"#fff":"#000"
        }
        ]}>Written</Text>
         </TouchableOpacity>
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
divider:{
    height:0.3,
    backgroundColor:"gray",
    width:400,
    marginHorizontal:-40,
    marginVertical:14
},
chapterText:{
    fontSize:16,
    width:"90%"
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
      height:80,
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
      marginTop:"-9%",
      marginRight:"-8%"
  }
})
