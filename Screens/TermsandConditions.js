import React, { Component } from 'react'
import { Text, StyleSheet, View,ScrollView } from 'react-native'
import { WebView } from "react-native-webview";


export default class TermsandConditions extends Component {
    render() {
        return (
            <View style={styles.container}>
             
                   <Text style={styles.text}>Aliquyam loremSchmerz und ihr wohl wirklichkeiten zauberhauch irrt, wieder strenge umwittert einst die stunden, folgenden  beifall die hören, diesmal jugendlich schwankende vor die irren, gleich das besitze menge aus der ihr träne sie ihr. Die geisterreich bilder vom meinem, wohl selbst lispelnd und ein mögt gesänge, der noch mein wirklichkeiten tränen , das zerstreuet noch schöne die ersten gleich mich, guten schatten lauf euch die erste es zerstreuet in, guten. stet clita nonumy ea. Accusam rebum no sanctus amet sadipscing sea consetetur sanctus. No eos no invidunt et justo amet. Ut lorem sea dolor diam, tempor et dolores sanctus stet. Voluptua gubergren est et diam takimata invidunt gubergren sit, ut lorem at labore rebum consetetur est. Amet eos diam invidunt sanctus. Amet no dolores invidunt et amet kasd ut rebum. Dolor lorem consetetur est sit. Lorem amet vero ipsum sanctus sadipscing amet. Takimata duo vero sea dolores sed et ut. Ipsum et elitr lorem ea. Dolor et sadipscing.</Text>
              
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
    text:{
        fontSize: 16,
        margin: 10,
       
        textAlign: "justify"
    }
})
