import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity } from 'react-native'
import {  Input,} from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import global from "../global"


export default class ContactUs extends Component {
    render() {
        return (
            <View style={styles.container}>
                    <KeyboardAwareScrollView
          // style={styles.container}
          enableOnAndroid
          extraScrollHeight={130}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.keyContainer}
        >
              <View style={{marginHorizontal:"5%",marginTop:"8%"}}>
          
                  <View style={styles.inputContainer}>
                 <Input      
                    label="Name" 
                    labelStyle={styles.label}   
                    placeholder="Name"
                    placeholderTextColor="#000"
                    
                    textContentType="emailAddress"
                    inputContainerStyle={styles.inputFiedContainer}
                    keyboardType="email-address"
                    inputStyle={styles.inputText}
                    // onChangeText={(v) => this.setState({ email: v })}
                    // value={this.state.email}
                  />
                     </View>
                     <View style={styles.inputContainer}>
                 <Input      
                    label="Email Address" 
                    labelStyle={styles.label}   
                    placeholder="Email"
                    placeholderTextColor="#000"
                    
                    textContentType="emailAddress"
                    inputContainerStyle={styles.inputFiedContainer}
                    keyboardType="email-address"
                    inputStyle={styles.inputText}
                    // onChangeText={(v) => this.setState({ email: v })}
                    // value={this.state.email}
                  />
                     </View>
                     <View style={styles.inputContainer}>
                 <Input      
                    label="Mobile Number" 
                    labelStyle={styles.label}   
                    placeholder="Mobile Number"
                    placeholderTextColor="#000"
                    
                    textContentType="emailAddress"
                    inputContainerStyle={styles.inputFiedContainer}
                    keyboardType="email-address"
                    inputStyle={styles.inputText}
                    // onChangeText={(v) => this.setState({ email: v })}
                    // value={this.state.email}
                  />
                     </View>
           
                     <View style={styles.inputContainer}>
                 <Input     
                   multiline={true} 
                    label="Message" 
                    labelStyle={styles.label}   
                    placeholder="Type a message"
                    placeholderTextColor="#000"
                    
                    textContentType="emailAddress"
                    inputContainerStyle={styles.inputFiedMessageContainer}
                    keyboardType="email-address"
                    inputStyle={styles.inputMessageText}
                    // onChangeText={(v) => this.setState({ email: v })}
                    // value={this.state.email}
                  />
                     </View>
                     <TouchableOpacity style={styles.buttonContainer}
            //   onPress={this.handleValidate}
              >
                <Text style={styles.buttonTitle}>
                  Send
                </Text>
               
              </TouchableOpacity>
             </View>
           </KeyboardAwareScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:null
    },
    inputFiedContainer: {
      borderBottomWidth: 0.5,
      // backgroundColor: ",
      height: 52,
      borderWidth:0.5, 
      borderRadius:10,
      borderColor:"#8A8787",
      marginHorizontal:-12
      // marginLeft: -40,
      // paddingLeft: 50,

    },
    inputText: {
      color: "#000",
      fontSize: 16,
      marginHorizontal:10,
      // fontWeight:"bold"
    },
    inputContainer:{
        // marginTop:"5%"
    },
    label:{
        fontSize:16,
        color:"#000",
        marginLeft:"-4%",
        marginBottom:"3%",
    },
    buttonContainer: {
        width: "102%",
        justifyContent: "center",
        // alignContent: "center"
        alignSelf: "center",
        alignItems: "center",
        backgroundColor:global.COLOR.PRIMARY,
        height:"9%",
        borderRadius:10,
        marginBottom:"5%"
      },
      buttonTitle: {
        color: "#fff",
    
        fontSize: 16,
        paddingTop: 0,
        // paddingBottom: 14,
        // textAlign: "center",
        // marginBottom: 5
        // justifyContent: "center"
      },
      inputFiedMessageContainer:{
        borderBottomWidth: 0.5,
        // backgroundColor: ",
        height: 120,
        borderWidth:0.5, 
        borderRadius:10,
        borderColor:"#8A8787",
        marginHorizontal:-12
      },
      inputMessageText:{
        color: "#000",
        fontSize: 16,
        marginHorizontal:10,
        alignSelf:"flex-start",
      },
      keyContainer:{
        justifyContent: "space-evenly",
      }
})
