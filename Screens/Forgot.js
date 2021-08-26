import React, { Component } from 'react'
import { Text, StyleSheet, View,Image,TouchableOpacity,Alert } from 'react-native'
import global from "../global"
import { Button, Input, Overlay, Divider, Icon } from "react-native-elements";


 
export default class Forgot extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
        
       
        };
      }


       // Validate
  handleValidate = () => {
    if (this.state.email == "") {
      Alert.alert("Login Alert", "Please enter e-mail address ");
    } else if (this.state.email !== "") {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(this.state.email) === false) {
        Alert.alert("Login Alert", "Invalid e-mail address ");
      } else {
        // Login(this.state);
        this.handleForgot();
      }
    }
  };


handleForgot = () => {
   
    this.props.navigation.navigate("EmailVerification");
  };
    render() {
        return (
            <View style={styles.container}>
             
              
              <View style={{marginHorizontal:"5%"}}>
              <View style={{flex:0.1}}>
                 <TouchableOpacity style={styles.iconContainer}
                    onPress={()=>this.props.navigation.navigate("Login")}
                    >
                       <Image
        style={styles.backIcon}
        source={global.ASSETS.BACKICON}
      />        
                    </TouchableOpacity>
              </View>
                    <View style={{justifyContent:"center",alignContent:"center",marginTop:"40%"}}>
    <Image
        style={styles.logo}
        source={global.ASSETS.BLUELOGO}
      />
      <View style={styles.welcomeContainer}>
    <Text style={styles.welcomeText}>Forgot{"\n"}Password</Text>
   
    
      </View>
          
          
        <View>
        <View style={styles.inputContainer}>
                 <Input          
                    placeholder="Email"
                    placeholderTextColor="#000"
                    
                    textContentType="emailAddress"
                    inputContainerStyle={styles.inputFiedContainer}
                    keyboardType="email-address"
                    inputStyle={styles.inputText}
                    onChangeText={(v) => this.setState({ email: v })}
                    value={this.state.email}
                  />
                     </View>
                    
                 
        </View>
        <TouchableOpacity style={styles.buttonContainer}
              onPress={this.handleValidate}
              >
                <Text style={styles.buttonTitle}>
                  Forgot
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
              <View style={styles.signupContainer}>
              <Text style={styles.accountText}>Don't have an account?  <TouchableOpacity  
              onPress={() => this.props.navigation.navigate("Signup")}>
                <Text style={styles.signupText}>Sign up</Text>  
              </TouchableOpacity>  
             
               </Text>    
              </View>
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
        // justifyContent:"center",
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
        marginTop:"14%"
        // marginLeft:18,
        // marginTop:-50
      }

})
