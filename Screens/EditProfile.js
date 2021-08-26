import React, { Component } from 'react'
import { Text, StyleSheet, View,ImageBackground, Image,TouchableOpacity} from 'react-native'
import global from "../global"
import {  Avatar,Overlay,Input } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";




export default class EditProfile extends Component {
    static navigationOptions = {
        header: null,
      };
      constructor(props) {
        super(props);
        this.getPermissionAsync();
        this.state = {
          isVisible: false,
          profile_image: "",
          field:""
        };
      }

       // Get camera and files permissions
  getPermissionAsync = async () => {
    if (global.CONSTANT.DEVICETYPE == "ios") {
      // const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      const { status, permissions } = await Permissions.askAsync(
        Permissions.CAMERA,
        Permissions.CAMERA_ROLL
      );
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  // Toggle camera options
  chooseUpload = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  // Image Picker function
  _pickImage = async (v) => {
    console.log(v);
    let option =
      v == "camera"
        ? ImagePicker.launchCameraAsync
        : ImagePicker.launchImageLibraryAsync;
    let field = this.state.field;
    let result = await option({
      quality: 0.2,
      allowsEditing: true,
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({
        profile_image: result.uri,
        // , isVisible: false
      });
    }
    this.chooseUpload();
  };


    render() {
        return (
            <View style={styles.container}>
                   <View style={styles.avatarContainer}>
                   <Avatar
                   rounded
                   size={110}
                   showEditButton={true}
                   source={global.ASSETS.AVATAR}
                   onPress={() => {
                   this.chooseUpload();
                   this.setState({ field: "profile_image" });
                  }}
              
                   />
                   <TouchableOpacity style={{marginTop:"-10%",marginRight:"-21%"}}
                   onPress={()=>{
                     this.chooseUpload();
                     this.setState({ field : "profile_image"})
                   }}
                   >
                     <Image source={global.ASSETS.EDITIMAGE} style={styles.editImage} />
                   </TouchableOpacity>
          </View>
          <View style={{marginHorizontal:"5%",marginTop:"8%"}}>
                <View style={styles.inputContainer}>
                 <Input      
                    label="Name" 
                    labelStyle={styles.label}   
                    placeholder="Name"
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
                    label="Email" 
                    labelStyle={styles.label}   
                    placeholder="Email"
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
                    label="Phone Number" 
                    labelStyle={styles.label}   
                    placeholder="Phone Number"
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
                  Update Profile
                </Text>
               
              </TouchableOpacity>
                </View>
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
         <Text style={styles.selectText}>Select Profile Image</Text>
         <View style={styles.cameraContainer}>
             <TouchableOpacity
              onPress={() => {
                this._pickImage("camera");
              }}
             >
             <Image source={global.ASSETS.CAMERA} style={{height:60,width:70,resizeMode:"contain"}} />
              <Text style={styles.selectText}>Camera</Text>
             </TouchableOpacity>
             <TouchableOpacity
              onPress={() => {
                this._pickImage("files");
              }}
             >
             <Image source={global.ASSETS.FILE} style={{height:60,width:70,resizeMode:"contain"}} />
              <Text style={styles.selectText}>File</Text>
             </TouchableOpacity>
         </View>
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
    avatarContainer: {
      alignSelf: "center",
      marginTop: "8%",
    //   marginRight:"10%"
      // marginTop: "-13%"
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
        // marginTop:"10%"
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
      cameraContainer:{
          flexDirection:"row",
          justifyContent:"space-around"
      },
      profileContainer:{
          flexDirection:"row",
          justifyContent:"flex-start",
          marginHorizontal:"7%",
          marginTop:"10%"
      },
      nameUpperText:{
          color:"gray",
          fontSize:12
      },
      nameBottomText:{
          fontSize:16,
          fontWeight:"bold"
      },
      editImage:{
        height:30,
        width:30,
        resizeMode:"contain",
        alignSelf:"center"
      }
})
