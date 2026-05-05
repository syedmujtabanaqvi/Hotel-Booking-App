import { StyleSheet, Text, View, TouchableOpacity, Image , FlatList } from 'react-native'
import React from 'react'

const Data = [
     { id: '1', location: 'Japan: Tradition Meets Tomorrow', image: require('../../assets/image/cardphoto2.jpg') },   
{ id: '2', location: 'Turki: The Bridge Between Continents', image: require('../../assets/image/turki.jpeg') },
     { id: '3', location: 'China: Mist, Mountains, and Magic.', image: require('../../assets/image/china.jpeg') },]


const Searchandfilter = () => {
    return (
        <View style={styles.container1}>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Image style={styles.arrow} source={require('../../assets/image/arrow.png')}>
                </Image>
            </TouchableOpacity>
             <Text style={styles.Searchandfiltertext } >Searchandfilter</Text>
<FlatList
                    data={Data}
                    keyExtractor={item => item.id}
                    
                    renderItem={({ item }) => (
                        <View style={styles.card} >
                            <Image source={item.image} style={styles.image1} />
                           
                        </View>
                    )}
                />
           
        </View>
    )
}

export default Searchandfilter

const styles = StyleSheet.create({
    container1: {
        paddingTop: "5%",
        padding: '5%',
        flex: 1,
        backgroundColor: '#111425'
    },
   
    arrow: {
        width: 60,
        height: 30,
        marginTop: '13%',
        marginLeft: '4%',
        tintColor: 'white'
    },
    Searchandfiltertext :{

color:'white',
fontSize:35,
fontWeight:"600",
marginTop:'2%',
marginLeft:'7%'
    },card:{

        backgroundColor:'white',
        width:'60%',
        height:100

    },
    image1:{
        height:100,
        width:'40%'
    }





})