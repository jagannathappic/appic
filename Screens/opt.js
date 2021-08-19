import React, { Component } from 'react'
import { Text, StyleSheet, View,Image,TouchableOpacity,Alert } from 'react-native'
import global from "../global"
import CodeInput from "react-native-confirmation-code-input";

import { Button, Input, Overlay, Divider, Icon } from "react-native-elements";



export default class otp extends Component {
    constructor(props) {
        super(props);
        this.state = {
         codeLength:0,
          code: "",
        };
      }


           // Validate
  handleValidate = () => {
    if (this.state.code == "") {
      Alert.alert("Login Alert", "Please enter code ");
    } else {
        // Login(this.state);
        this.handleForgot();
      }
    
  };

  handleForgot = () => {
   
    this.props.navigation.navigate("Login");
  };
    
    render() {
        return (
            <View style={styles.container}>
                
                    <TouchableOpacity style={styles.iconContainer}
                    onPress={()=>this.props.navigation.navigate("Signup")}
                    >
                       <Image
        style={styles.backIcon}
        source={global.ASSETS.BACKICON}
      />        
                    </TouchableOpacity>
         
                <View style={{justifyContent:"center", flex:0.76}}>
                <Image
        style={styles.logo}
        source={global.ASSETS.BLUELOGO}
      />
      <View style={styles.welcomeContainer}>
    <Text style={styles.welcomeText}>Email Verification</Text>
    <Text style={styles.signText}>Enter OTP received on your email {"\n"}below to verify detail</Text>
    
      </View>
      <View>
        <CodeInput
          ref="codeInputRef2"
          codeLength={6}
          
          keyboardType="number-pad"
          compareWithCode={null}
          autoFocus={false}
          ignoreCase={true}
          inputPosition="center"
          activeColor={global.COLOR.PRIMARY}
          inactiveColor="gray"
          size={45}
          onFulfill={(code) =>
            this.setState({
              code,
            })
          }
          
          containerStyle={{ marginTop: 10,marginLeft:-12 }}
          codeInputStyle={ styles.codeContainer}

         
          
        />   
      </View>
      <TouchableOpacity style={styles.resendContainer}>
          <Text style={styles.resendText}>Resend Otp</Text>
      </TouchableOpacity>
     
      <View>
                <Button
                  containerStyle={styles.buttonContainer}
                  buttonStyle={styles.buttonStyle}
                //   loading={this.state.buttonLoading}
                  title="Complete Verification"
                  titleStyle={styles.buttonTitle}
                  TouchableComponent={TouchableOpacity}
                  onPress={this.handleValidate}
                />
              </View>
       
             
                </View>
    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:null,
        justifyContent:"center",
        backgroundColor:"#fff",
        // marginTop:30
    },
    logo:{
        alignSelf:"center",
        marginBottom:40,
        

    },
    welcomeContainer:{
        marginHorizontal:20,
        marginBottom:20
    },
    welcomeText:{
        fontSize:20,
        fontWeight:"bold"
    },
    signText:{
        fontSize:16,
        color:"#8A8787",
        
    },
    codeContainer:{
        borderWidth: 1,
       
        backgroundColor: "#fff",
        height: 50,
        width: 50,
        borderRadius:6,
        marginLeft:7,
        
        color:"#000",
        fontWeight:"bold",
        fontSize: 18,
    },
    resendContainer:{
        marginTop:80,
        alignSelf:"center"
    },
    resendText:{
        color:"#000",
        fontSize:14,
        fontWeight:"bold"
    },
    buttonContainer: {
        // width: 150,
        justifyContent: "center",
        // alignContent: "center"
        alignSelf: "center",
        alignItems: "center",
        marginTop:30
      },
      buttonStyle: {
        backgroundColor: global.COLOR.PRIMARY,
        height: 52,
        width: 358,
        // alignSelf: "center",
        paddingTop: 20,
        borderRadius:10
      },
      buttonTitle: {
        color: "#fff",
    
        fontSize: 16,
        paddingTop: 0,
        paddingBottom: 14,
        // textAlign: "center",
        // marginBottom: 5
        // justifyContent: "center"
      },
      backIcon:{
          height:20,
          width:20,
          resizeMode:"contain",
          paddingLeft:20
        //   marginHorizontal:10
          
      },
      icon:{
        height:20,
        width:20,
        resizeMode:"contain",
        paddingLeft:20
      },
      iconContainer:{
        height:20,
        width:50,
        marginLeft:18,
        marginTop:-50
      }
      

})
