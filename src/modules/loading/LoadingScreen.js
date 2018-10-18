import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class LoadingScreen extends Component<{}> {
    render() {
        return (
            <View style={styles.container}> 
                <Image style={styles.icon} source={require('../../images/splash-icon.png')} />
                <Text style={styles.message}>Droppin' The Beat</Text>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    message: {
        fontSize:20,
        textAlign: 'center',
        color:'white'
    },
    icon: {
        width: 100,
        height: 100
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#77cc00'
    }
});