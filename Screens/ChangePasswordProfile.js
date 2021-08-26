import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity } from 'react-native'
import {  Input,} from "react-native-elements";
import global from '../global';


export default class ChangePasswordProfile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{marginHorizontal:"5%",marginTop:"8%"}}>
                <View style={styles.inputContainer}>
                 <Input      
                    label="Old Password" 
                    labelStyle={styles.label}   
                    placeholder="Old Password"
                    placeholderTextColor="gray"

                    
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
                    label="New Password" 
                    labelStyle={styles.label}   
                    placeholder="New Password"
                    placeholderTextColor="gray"

                    
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
                    label="Confirm Password" 
                    labelStyle={styles.label}   
                    placeholder="Confirm Password"
                    placeholderTextColor="gray"
                    
                    textContentType="emailAddress"
                    inputContainerStyle={styles.inputFiedContainer}
                    keyboardType="email-address"
                    inputStyle={styles.inputText}
                    // onChangeText={(v) => this.setState({ email: v })}
                    // value={this.state.email}
                  />
                     </View>
                     <TouchableOpacity style={styles.buttonContainer}
           
              >
                <Text style={styles.buttonTitle}>
                  Update Password
                </Text>
               
              </TouchableOpacity>
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
    inputFiedContainer: {
      borderBottomWidth: 0.5,
      // backgroundColor: ",
      height: 50,
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
        height:"11%",
        borderRadius:10,
        marginTop:"10%"
        // marginBottom:"5%"
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
})
