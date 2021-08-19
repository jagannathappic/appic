import React, { Component } from 'react'
import { Text, StyleSheet, View,Image,TouchableOpacity } from 'react-native'
import global from "../global"
import { Button, Input, Overlay, Divider, Icon,CheckBox } from "react-native-elements";
import { Alert } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';



export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name:"",
          email: "",
          password: "",
          checked:false
        };
      }

     // Validate
  handleValidate = () => {
      if (this.state.name == "") {
          Alert.alert("Signup Alert", "Please enter your name")
      }
   else if (this.state.email == "") {
      Alert.alert("Login Alert", "Please enter e-mail address ");
    } else if (this.state.email !== "") {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(this.state.email) === false) {
        Alert.alert("Login Alert", "Invalid e-mail address ");
      } else if (this.state.password == "") {
        Alert.alert("Login Alert", "Please enter password");
      } else if (this.state.password.length < 6) {
        Alert.alert(
          "Login Alert",
          "Password field should not be less than 6 characters"
        );
      } 
      else {
        // Login(this.state);
        this.handleSignup();
      }
    }
  };

  handleSignup = () => {
   
    this.props.navigation.navigate("OTP");
  };

    render() {
        return (
            <View style={styles.container}>
    <Image
        style={styles.logo}
        source={global.ASSETS.BLUELOGO}
      />
      <View style={styles.welcomeContainer}>
    <Text style={styles.welcomeText}>Welcome,</Text>
    <Text style={styles.signText}>Sign up to get started!</Text>
    
      </View>
          
          
        <View>
        <View style={styles.inputContainer}>
                 <Input          
                    placeholder="Name"
                    placeholderTextColor="#000"
                    
                    textContentType="name"
                    inputContainerStyle={styles.inputFiedContainer}
                    keyboardType="default"
                    inputStyle={styles.inputText}
                    onChangeText={(v) => this.setState({ name: v })}
                    value={this.state.name}
                  />
                     </View>
                     <View style={styles.inputContainer}>
                       <Input          
                    placeholder="Email"
                    placeholderTextColor="#000"
                    secureTextEntry={true}
                    textContentType="password"
                    inputContainerStyle={styles.inputFiedContainer}
                    keyboardType="email-address"
                    inputStyle={styles.inputText}
                    onChangeText={(v) => this.setState({ email: v })}
                    value={this.state.email}
                  />   
                     </View>
                 
                     <View style={styles.inputContainer}>
                       <Input          
                    placeholder="Password"
                    placeholderTextColor="#000"
                    secureTextEntry={true}
                    textContentType="password"
                    inputContainerStyle={styles.inputFiedContainer}
                    keyboardType="default"
                    inputStyle={styles.inputText}
                    onChangeText={(v) => this.setState({ password: v })}
                    value={this.state.password}
                  />   
                     </View>
                 
        </View>
        <CheckBox
        containerStyle={styles.checkContainer}
        
        title="Accept terms & conditions"
        textStyle={styles.termText}
  checkedIcon={<Image source={global.ASSETS.CHECKED} />}
  uncheckedIcon={<Image source={global.ASSETS.UNCHEKED} />}
  checked={this.state.checked}
  onPress={() => this.setState({checked: !this.state.checked})}
/>

        <View>
                <Button
                  containerStyle={styles.buttonContainer}
                  buttonStyle={styles.buttonStyle}
                //   loading={this.state.buttonLoading}
                  title="Sign up"
                  titleStyle={styles.buttonTitle}
                  TouchableComponent={TouchableOpacity}
                  onPress={this.handleValidate}
                // onPress={() => this.props.navigation.navigate("EmailVerification")}
                />
              </View>
              <View style={styles.signupContainer}>
              <Text style={styles.accountText}>Already have an account? {""} 
               <TouchableOpacity  onPress={() => this.props.navigation.navigate("Login")}>
                <Text style={styles.signupText}>Login</Text>  
              </TouchableOpacity>  
             
               </Text>    
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
        

    },
    welcomeContainer:{
        marginHorizontal:20,
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
        marginHorizontal:10
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
        // width: 150,
        justifyContent: "center",
        // alignContent: "center"
        alignSelf: "center",
        alignItems: "center",
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
          marginBottom:-4
      },
      forgotContainer:{
        alignSelf:"flex-end",
        marginRight:20,
        marginTop:-20,
       
        marginBottom:34
      },
      termText:{
        fontSize:14,
        color:"#000",
        fontWeight:"300"
      },
      checkContainer:{
        marginLeft:20,
        backgroundColor:"#fff",
        borderRadius:10,
        marginRight:20,
        marginBottom:20
      }

})
