import React, { Component } from 'react'
import { Text, StyleSheet, View,ImageBackground, Image,TouchableOpacity} from 'react-native'
import global from "../global"
import {  Avatar,Overlay } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";


export default class Profile extends Component {
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
            <ImageBackground
            source={global.ASSETS.BGIMAGE}
            style={styles.bgContainer}
            imageStyle={{ resizeMode: "stretch" }}
          >
              <View style={styles.headerContainer}>
                  <View>
                  <Text>
                        ..
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.profileText}>
                        Profile
                    </Text>
                  </View>
                  <TouchableOpacity
                  onPress={()=>this.props.navigation.navigate("EditProfile")}
                  >
                  <Image source={global.ASSETS.EDIT}
                    style={styles.editImage}
                    />
                  </TouchableOpacity>
              </View>
              <View style={styles.avatarContainer}>
              <Avatar
                 size={110}
                 rounded
                 source={global.ASSETS.AVATAR}
                 onPress={() => {
                    this.chooseUpload();
                    this.setState({ field: "profile_image" });
                  }}
              />
          </View>
          
          
          <View style={{marginTop:"8%"}}></View>
          <View style={styles.profileContainer}>
              <View>
              <Image source={global.ASSETS.USERPROFILE} style={styles.profileImage} />
              </View>
              <View style={{marginHorizontal:"6%"}}>
                <Text style={styles.nameUpperText}>Name</Text>
              <Text style={styles.nameBottomText}>Test User Name</Text>
              </View>
             
          </View>
          <View style={styles.profileContainer}>
              <View>
              <Image source={global.ASSETS.EMAIL} style={styles.profileImage} />
              </View>
              <View style={{marginHorizontal:"6%"}}>
                <Text style={styles.nameUpperText}>Email</Text>
              <Text style={styles.nameBottomText}>test@gmail.com</Text>
              </View>
             
          </View>
          <View style={styles.profileContainer}>
              <View>
              <Image source={global.ASSETS.CALL} style={styles.profileImage} />
              </View>
              <View style={{marginHorizontal:"6%"}}>
                <Text style={styles.nameUpperText}>Phone Number</Text>
              <Text style={styles.nameBottomText}>9876543210</Text>
              </View>
             
          </View>
          <TouchableOpacity style={styles.buttonContainer}
            onPress={()=>this.props.navigation.navigate("ChangePasswordProfile")}
              >
                <Text style={styles.buttonTitle}>
                  Change Password
                </Text>
               
              </TouchableOpacity>
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
     
              
               
              </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    bgContainer:{
        flex:1,
        width:null,
        backgroundColor:"#fff"
    },
    headerContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:"10%",
        marginHorizontal:"5%"
    },
    profileText:{
        color:"#fff",
        fontSize:16
    },
    editImage:{
        height:16,
        width:16,
        resizeMode:"stretch"
    },
    avatarContainer: {
      alignSelf: "flex-end",
      marginTop: "16%",
      marginRight:"10%"
      // marginTop: "-13%"
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
    profileImage:{
        height:50,
        width:50,
        resizeMode:"contain"
    },
    buttonContainer: {
        width: "93%",
        justifyContent: "center",
        // alignContent: "center"
        alignSelf: "center",
        alignItems: "center",
        backgroundColor:global.COLOR.PRIMARY,
        height:"6.5%",
        borderRadius:10,
        marginTop:"20%"
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
