import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";
import { Overlay } from "react-native-elements"
import slide from "../assets/banner.jpg";
import Carousel from "react-native-banner-carousel";
import Powerplant from "../Screens/powerplane"
import global from "../global";




const BannerWidth = Dimensions.get("window").width;
const BannerHeight = 260;

const images = [
  "http://xxx.com/1.png",
  "http://xxx.com/2.png",
  "http://xxx.com/3.png",
];
export default class Home extends Component {
    static navigationOptions = {
        header: null,
      };
      constructor(props) {
        super(props);
        this.state = {
          // isVisible:false
       
        };
      }
    // static navigationOptions = {
    //     title: "Home",
    //     headerStyle: {
    //       backgroundColor: "#fff",
     

    //     },
    
    //     headerTintColor: "#000",
    
    //     headerTitleStyle: {
    //       fontWeight: "bold",
    //       fontSize: 22,
    //       textAlign: "center",
    //   textTransform: "uppercase",
    
      
        // },
        // headerRight: (
        //   <Image
        //     source={global.ASSETS.CUSTOMERSUPPORT}
        //     style={{ height: 40, width: 60, resizeMode: "cover" }}
        //   />
        // )
    //   };
  renderPage(image, index) {
    return (
      <ScrollView key={index}>
        <Image style={{ width: BannerWidth, height: 200,resizeMode:"cover" }} source={slide} />
      </ScrollView>
    );
  }

  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false} marginBottom={70}>
          {/* <Text style={styles.homeText}>Home</Text> */}
        <View style={styles.banner}>
          <Carousel
            autoplay
            autoplayTimeout={5000}
            showsPageIndicator={true}
            loop
            index={1}
            pageSize={BannerWidth}
            //   pageIndicatorContainerStyle={{ marginTop: 600 }}
            //   showsPageIndicator={true}
          >
            {images.map((image, index) => this.renderPage(image, index))}
          </Carousel>
          <View style={styles.bottomContainer}>
             <Text style={styles.courseList}>Courses List</Text>  
          
          </View>
          </View>
          

               <View>
                <TouchableOpacity style={styles.imageContainer}
                onPress={()=>this.props.navigation.navigate("CourseDetails")}
                >
            <Image source = {global.ASSETS.EDUCATION} style={styles.image}  />
            <Text style={styles.courseText}>General</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>this.props.navigation.navigate("Airframe")}
        style={styles.imageContainer}>
        <Image source = {global.ASSETS.EDUCATION} style={styles.image}  />
            <Text style={styles.courseText}>Airframe </Text>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={()=>this.props.navigation.navigate("Powerplant")}
        style={styles.imageContainer}>
        <Image source = {global.ASSETS.EDUCATION} style={styles.image}  />
            <Text style={styles.courseText}>Powerplant </Text>
        </TouchableOpacity>
          
          </View>
       
        {/* <Overlay
          overlayStyle={styles.overlay}
          containerStyle={styles.overlayContainer}
          isVisible={this.state.isVisible}
          transparent={true}
          width={ 340}
          height={150}
          animationType="slide"
          
        >
         
        </Overlay> */}
      
 </ScrollView>
         
       
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    backgroundColor: "#fff",
    
    // marginTop:40
  },
  banner:{
    //   height:300,
    //   width:400
  },
  homeText:{
      alignSelf:"center",
      marginTop:40,
      fontWeight:"bold",
      fontSize:18,
      marginBottom:16
  },
  courseList:{
      fontSize:16,
      fontWeight:"bold"
  },
  bottomContainer:{
      margin:16
  },
  courseText:{
      fontSize:14,
      marginHorizontal:20,
      marginVertical:10,
      color:"#000",
      fontWeight:"bold",
       
  },
  imageContainer:{
    backgroundColor:"#fff",
      borderWidth:0.1,
      borderColor:"#fff",
      borderRadius:10,
      marginTop:10,
      marginHorizontal:16,
      marginBottom:10,
     
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.98,
      // shadowRadius: 3,
      elevation: 3,
    
  },
  image:{width:"100%",
  height:120, 
    resizeMode:"cover",
    borderTopLeftRadius:9,
    borderTopRightRadius:9,
    alignSelf:"center"
    }
 
});
