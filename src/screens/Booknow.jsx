import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {useNavigation} from '@react-navigation/native'
 
// import API_URL from '../../Config';

const Booknow = () => {
    const navigation = useNavigation()
//     const [city, setcity] = useState("Loading...");

// useEffect(() => {
//     fetch(`${API_URL}/city`)
//  .then(res=>res.json())
//  .then(data=> setcity(data))
//  .catch(err=> console.log("error",err))
// }, []);
    return (
        <View style={{ flex: 1 }}>



            <LinearGradient colors={['#05050500', '#111425', '#111425']} style={styles.linearGradient}>
            </LinearGradient>
            <ImageBackground resizeMode="cover" style={styles.baground} source={require('../../assets/image/PhotoshopExtension.jpg')}>

                <View style={styles.contentcontainer} >
                    <View style={styles.imagerow} >
                        <Image style={styles.imagecard} source={require('../../assets/image/cardphoto.jpg')}></Image>
                        <Image style={styles.imagecard} source={require('../../assets/image/cardphoto2.jpg')}></Image>
                        <Image style={styles.imagecard1} source={require('../../assets/image/cardphoto.jpg')}>


                        </Image>
                    </View>
                </View>

                <Text style={styles.textkarachitouk}>karachi to Uk</Text>
                <View style={styles.ratingcontainer}>

                    <Image style={styles.rating} source={require('../../assets/image/ratingstar.png')}></Image>
                </View>
                <View style={styles.Experiencecontainer}>
                    <Text style={styles.Experience}>Experience the raw beauty of nature where the mountains meet the clouds. A sanctuary for peace-seekers and adventure lovers alike. Discover hidden trails, crystal clear lakes, and the breathtaking serenity of the great outdoors. Your perfect escape from the digital world starts here</Text>
                </View>
                <LinearGradient colors={['#05050500', '#111425', '#111425']} style={styles.linearGradient2}>
                </LinearGradient>

                <View style={styles.LOGINcontainer}>
                    <TouchableOpacity style={styles.loginbutton} onPress={()=>navigation.navigate('Booking')}>
                        <Text style={styles.BOOKNOWtext}> BOOK NOW </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Booknow

const styles = StyleSheet.create({
    baground: {
        height: '100%',
        width: '100%',
        paddingBottom: '70%'
    },
    linearGradient: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '80%',
        zIndex: 1,
    }, linearGradient2: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        height: '40%',
        zIndex: 1,
    },
    imagerow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        marginBottom: 20,
    },
    contentcontainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: '15%',
        zIndex: 2,
    },
    imagecard: {
        height: 100,
        width: '25%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
    },
    imagecard1: {
        height: 100,
        width: '25%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        tintColor: '#22b82f62'
    },

    textkarachitouk: {
        position: 'absolute',
        zIndex: 1,
        marginTop: '105%',
        marginLeft: '28%',
        color: 'white',
        fontWeight: '500',
        fontSize: 30


    },
    LOGINcontainer: {
        alignContent: "center",
        alignItems: 'center',

    },
    loginbutton: {
        position: 'absolute',
        zIndex: 1,
        height: 50,
        width: '49%',
        marginTop: '50%',
        backgroundColor: '#2eb644',


        borderRadius: 9
    }, BOOKNOWtext: {
        position: 'absolute',
        zIndex: 1,
        fontFamily: 'Arial',
        fontWeight: '900',
        paddingTop: '6%',
        paddingLeft: '20%',
        color: "white",
        fontSize: 20,
    },

    Experience: {
        paddingTop: '17%',
        fontSize: 18,
        color: 'white',
        position: 'absolute',
        zIndex: 1

    }, Experiencecontainer: {
        paddingLeft: '8%',
        paddingRight: '8%',
        alignItems: "center"
    },
    ratingcontainer: {


        alignItems: 'flex-start'
    },
    rating: {
        height: 50,
        width: '30%',
        marginLeft: '6%',

        position: 'absolute',
        zIndex: 1,

    }
})