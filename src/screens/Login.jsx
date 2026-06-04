import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import React, { useState, useEffect } from 'react';

import { useNavigation } from '@react-navigation/native'


const Login = () => {
 
    return (
        <View style={{ flex: 1 }}>

            <LinearGradient colors={['#f6f9ff00', '#111425', '#111425']} style={styles.linearGradient}>

                <Text style={styles.welcome}> Welcome ! </Text>
                <TextInput style={styles.username} placeholder='Username' placeholderTextColor={'#ffffff'} />

                <TextInput style={styles.Password} placeholder='Password' placeholderTextColor={'#ffffff'} />
                <Text style={styles.Rememberme}> Remember me  </Text>
                <Text style={styles.ForgotPassword}> Forgot Password </Text>
                <TouchableOpacity style={styles.loginbutton} >
                    <Text style={styles.logintext}> Login </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.SignUp}> Sign Up  </Text>
                </TouchableOpacity>
                <Text style={styles.Dontthaveanaccount}> Dont't have an account? </Text>

            </LinearGradient>
            <ImageBackground style={styles.image} source={require('../../assets//image/baground-image.jpg')}></ImageBackground>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({


    image: { height: '93%', width: '120%', position: 'absolute' },
    linearGradient: {
        height: '80%',
        marginTop: '60%',
        zIndex: 1
    },
    welcome: {
        color: 'white',
        fontSize: 50,
        fontWeight: "600",
        marginTop: '40%',
        marginLeft: '4%',
        zIndex: 1

    },
    username: {

        backgroundColor: '#3f4158',
        borderRadius: 7,
        height: '8%',
        width: '90%',
        marginLeft: '5%',
        marginTop: '2%',
        borderWidth: 1,
        fontSize: 20,
        paddingLeft: '10%'
    },
    Password:
    {

        backgroundColor: '#3f4158',
        borderRadius: 6,
        height: '8%',
        width: '90%',
        marginLeft: '5%',
        marginTop: '3%',
        borderWidth: 1,
        paddingLeft: '10%',
        fontSize: 20,
    },
    loginbutton: {

        height: '8%', width: '89%', backgroundColor: '#2eb644',

        marginLeft: '6%',
        borderRadius: 4
    },
    logintext: {
        fontFamily: 'Arial',
        fontWeight: '900',
        color: "white",
        fontSize: 25,
        paddingTop: '2%',
        paddingLeft: '38%'
    },
    Dontthaveanaccount: {

        color: 'white',
        marginTop: '16%',
        marginBottom: '6%',
        marginLeft: '13%',
        opacity: 0.4,


    },
    Rememberme: {

        color: 'white',
        marginLeft: '5%',
        marginTop: '5%',
    },
    ForgotPassword: {

        color: '#5eff00',
        marginTop: '-4%',
        marginBottom: '4%',
        marginLeft: '65%',


    }, SignUp
        : {
        marginLeft: '7%',
        marginTop: '2%',
        fontSize: 15,
        color: '#5eff00',

    }

})



