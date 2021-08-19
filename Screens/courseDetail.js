import React, { Component } from 'react'
import { Text, StyleSheet, View,Image, TouchableOpacity,ScrollView,Model } from 'react-native'
import global from '../global'
import { Divider } from "react-native-elements";


export default class courseDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selected:"1"
        };
      }
    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:40,marginHorizontal:20}}>
                <TouchableOpacity>
                  <Image
                style={styles.backIcon}
                source={global.ASSETS.BACKICON}
                />   
                </TouchableOpacity>
                
                 <Text style={styles.homeText}>Course Details</Text>
                 <Text>

</Text>
                </View>
                <View style={{marginTop:16}}>
                    <Image source={global.ASSETS.COURSE} style={{height:200,width:400}} />
                </View>
                <View style={{marginHorizontal:24}}>
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
              <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal:20}}>
                   <TouchableOpacity style={styles.quizBackContainer}>
                   <Text style={styles.chapterText}>
                       Chapter 1
                   </Text>
                  <Image source={global.ASSETS.NEXT} />
               </TouchableOpacity>
               <Divider  style= {styles.divider} />
               <TouchableOpacity style={styles.quizBackContainer}>
                   <Text style={styles.chapterText}>
                       Chapter 2
                   </Text>
                  <Image source={global.ASSETS.NEXT} />
               </TouchableOpacity>
               <Divider  style= {styles.divider} />
               <TouchableOpacity style={styles.quizBackContainer}>
                   <Text style={styles.chapterText}>
                       Chapter 3
                   </Text>
                  <Image source={global.ASSETS.NEXT} />
               </TouchableOpacity>
               <Divider  style= {styles.divider} />
               <TouchableOpacity style={styles.quizBackContainer}>
                   <Text style={styles.chapterText}>
                       Chapter 4
                   </Text>
                  <Image source={global.ASSETS.NEXT} />
               </TouchableOpacity>
               <Divider  style= {styles.divider} />
               <TouchableOpacity style={styles.quizBackContainer}>
                   <Text style={styles.chapterText}>
                       Chapter 5
                   </Text>
                  <Image source={global.ASSETS.NEXT} />
               </TouchableOpacity>
               <Divider  style= {styles.divider} />
               <TouchableOpacity style={styles.quizBackContainer}>
                   <Text style={styles.chapterText}>
                       Chapter 6
                   </Text>
                  <Image source={global.ASSETS.NEXT} />
               </TouchableOpacity>
               <Divider  style= {styles.divider} />
               <TouchableOpacity style={styles.quizBackContainer}>
                   <Text style={styles.chapterText}>
                       Chapter 7
                   </Text>
                  <Image source={global.ASSETS.NEXT} />
               </TouchableOpacity>
               <Divider  style= {styles.divider} />
              </ScrollView>
              
              
               
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
        alignSelf:"center",
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
        justifyContent:"space-between"
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
divider:{
    height:0.3,
    backgroundColor:"gray",
    width:400,
    marginHorizontal:-40,
    marginVertical:14
},
chapterText:{
    fontSize:16
}
})
