import React, { Component } from 'react'
import { Text, StyleSheet, View,Image,TouchableOpacity,Alert } from 'react-native'
import global from "../global"
import { Button, Input, Overlay, Divider, Icon } from "react-native-elements";


 
export default class changePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
          newPassword: "",
          confirmPassword:""
       
        };
      }



      handleValidate = () => {
        if (this.state.newPassword == "") {
          Alert.alert("Password Alert", "Please enter  new password");
        } 
        
        else if (this.state.newPassword.length < 6) {
            Alert.alert(
              "Password Alert",
              "New Password field should not be less than 6 characters"
            );
          } else if (this.state.newPassword!==this.state.confirmPassword){
              Alert.alert("Signup alert","Don't match your password")
          }
          
          else {
            this.handleNewPassword();
          }
       
        
        
      };

handleNewPassword = () => {
   Alert.alert("Password Alert","Password Updated")
   this.props.navigation.navigate("Login");
  };
    render() {
        return (
            <View style={styles.container}>
              <View style={{marginHorizontal:"5%"}}>
              <Image
        style={styles.logo}
        source={global.ASSETS.BLUELOGO}
      />
      <View style={styles.welcomeContainer}>
    <Text style={styles.welcomeText}>Change{"\n"}Password</Text>
   
    
      </View>
          
          
        <View>
        <View style={styles.inputContainer}>
                 <Input          
                    placeholder="New Password"
                    placeholderTextColor="#000"
                    
                    textContentType="password"
                    inputContainerStyle={styles.inputFiedContainer}
                    keyboardType="default"
                    inputStyle={styles.inputText}
                    onChangeText={(v) => this.setState({ newPassword: v })}
                    value={this.state.newPassword}
                  />
                     </View>
                     <View style={styles.inputContainer}>
                 <Input          
                    placeholder="Confirm Password"
                    placeholderTextColor="#000"
                    
                    textContentType="password"
                    inputContainerStyle={styles.inputFiedContainer}
                    keyboardType="default"
                    inputStyle={styles.inputText}
                    onChangeText={(v) => this.setState({ confirmPassword: v })}
                    value={this.state.confirmPassword}
                  />
                     </View>
                    
                 
        </View>
        <TouchableOpacity style={styles.buttonContainer}
              onPress={this.handleValidate}
              >
                <Text style={styles.buttonTitle}>
                  Login
                </Text>
                {/* <Button
                  containerStyle={styles.buttonContainer}
                  buttonStyle={styles.buttonStyle}
                //   loading={this.state.buttonLoading}
                  title="Login"
                  titleStyle={styles.buttonTitle}
                  TouchableComponent={TouchableOpacity}
                  onPress={this.handleValidate}
                /> */}
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
        justifyContent:"center",
        backgroundColor:"#fff"
    },
    logo:{
        alignSelf:"center",
        marginBottom:40,
        height:150,
        width:150,
        resizeMode:"contain"
        

    },
    welcomeContainer:{
        // marginHorizontal:20,
        marginBottom:40
    },
    welcomeText:{
        fontSize:26,
        fontWeight:"bold"
    },
    signText:{
        fontSize:20,
        color:"#8A8787",
        
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
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
          marginTop:-8
      },
      forgotText:{
          color:global.COLOR.PRIMARY,
          
          fontSize:16,
        
      },
      buttonContainer: {
        width: "102%",
        justifyContent: "center",
        // alignContent: "center"
        alignSelf: "center",
        alignItems: "center",
        backgroundColor:global.COLOR.PRIMARY,
        height:"10.5%",
        borderRadius:10
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
      },
      signupContainer:{
          alignSelf:"center",
          marginTop:30
      },
      accountText:{
          fontSize:16,
          color:"#000"
      },
      signupText:{
          fontSize:16,
          color:global.COLOR.PRIMARY,
          textDecorationLine:"underline",
          marginBottom:-4,
          paddingTop:-15
      },
      forgotContainer:{
        alignSelf:"flex-end",
        marginRight:20,
        marginTop:-20,
       
        marginBottom:34
      }

})
