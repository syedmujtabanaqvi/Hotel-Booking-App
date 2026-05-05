import { StyleSheet, Text, View, ImageBackground, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'

const Data = [
     { id: '1', location: 'Japan: Tradition Meets Tomorrow', image: require('../../assets/image/cardphoto2.jpg') },   
{ id: '2', location: 'Turki: The Bridge Between Continents', image: require('../../assets/image/turki.jpeg') },
     { id: '3', location: 'China: Mist, Mountains, and Magic.', image: require('../../assets/image/china.jpeg') },]



const Save = () => {
const navigation = useNavigation()
    return (
        <View style={styles.savecontainer}>
            <ImageBackground style={styles.VintageCompassonMap} source={require('../../assets/image/VintageCompassonMap.png')}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Image style={styles.arrow} source={require('../../assets/image/arrow.png')}>

                    </Image>
                </TouchableOpacity>
                <Text style={styles.tagline} > Find Your Destiny</Text>

                <FlatList
                    data={Data}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={styles.card} >
                            <Image source={item.image} style={styles.place} />
                            <Text style={styles.title}>{item.location}</Text>
                            <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('Search')}>
 <Text style={styles.ShowMore}>Show More </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />

            </ImageBackground>

        </View>
    )
}

export default Save

const styles = StyleSheet.create({

    savecontainer: {
        flex: 1,
        alignContent: 'center',
        backgroundColor: '#111425'
    },

    VintageCompassonMap: {
        flex: 1,
    },
    tagline: {
        position: 'absolute',
        zIndex: 1,
        color: 'white',
        fontSize: 30,
        fontWeight: '600',
        marginTop: '25%',
        marginLeft: '9%'
    }
    ,title:{

       color:'white',
       fontSize:20,
       paddingLeft:'33%',
       paddingBottom:'40%',
       position:'absolute',
       elevation:3,
       fontWeight:'900'
    }
    , card: {


        justifyContent: 'flex-end',
        alignContent: 'space-between',
        marginBottom: '5%',
        paddingLeft: 20,
     
    }, place: {

        width: 200,
        height: 250,
        borderRadius: 15
    },
    arrow: {
        width: 60,
        height: 30,
        marginTop: '13%',
        marginLeft: '4%',
        tintColor: 'white'


    },
    button:{
backgroundColor:'#45d40d',
height:36,
marginBottom:'10%',
borderRadius:7,
width:'80%',
marginLeft:'20%',
position:'absolute',
alignItems:'center',
elevation:6
    },ShowMore:{
color:'white',
fontSize:17,
fontWeight:'600',
paddingTop:'3%'

    }

})