import React, { Component } from 'react';
import { Text, View,StyleSheet, SafeAreaView} from 'react-native';

export default class Feed extends Component {
    render() {
        return (
            <View > 
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black"
    },
    droidSafeArea:{
        marginTop: Platform.OS==='android'? StatusBar.currentHeight:RFValue(35)

    },
    appTitle:{
        flex:0.07,
        flexDirection:"row"
    },
    appIcon:{
        flex:0.2,
        justifyContent:'center',
        alignItems:'center'

    },
    iconImage:{
        width:'100%',
        height:'100%',
        resizeMode:'contain',
        
    },
    appTitleTextContainer:{
        flex:0.8,
        justifyContent:'çenter'
    },
    appTitleText:{
        flex:0.8,
        justifyContent:'center'
    },
    cardContainer:{
        flex:0.85
    }

})