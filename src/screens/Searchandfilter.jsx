import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'

const Data = [
  { 
    id: '1', 
    location: 'Japan: Tradition Meets Tomorrow', 
    images: [
      require('../../assets/image/cardphoto2.jpg'),
      require('../../assets/image/china.jpeg'),
      require('../../assets/image/china.jpeg')
    ]
  },   
  { 
    id: '2', 
    location: 'Turki: The Bridge Between Continents', 
    images: [require('../../assets/image/turki.jpeg')] 
  },
  { 
    id: '3', 
    location: 'China: Mist, Mountains, and Magic.', 
    images: [require('../../assets/image/china.jpeg')] 
  },
]

const Searchandfilter = ({ navigation }) => {
  return (
    <View style={styles.container1}>

      <TouchableOpacity onPress={() => navigation && navigation.navigate('Login')}>
        <Image style={styles.arrow} source={require('../../assets/image/arrow.png')} />
      </TouchableOpacity>
      
      <Text style={styles.Searchandfiltertext}>Searchandfilter</Text>

      <FlatList
        data={Data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            
            <Text style={styles.locationText}>{item.location}</Text>
            
            <View style={styles.imageContainer}>
              {item.images.map((imgUri, index) => (
                <Image key={index} source={imgUri} style={styles.cardImage} />
              ))}
            </View>

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
  Searchandfiltertext: {
    color: 'white',
    fontSize: 35,
    fontWeight: "600",
    marginTop: '2%',
    marginLeft: '7%',
    marginBottom: 15
  },
  card: {
    backgroundColor: '#2e3142', 
    marginBottom: 20,
    width: '100%',
    borderRadius: 12,
    padding: 15,
  },
  locationText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  imageContainer: {
    flexDirection: 'row', 
    gap: 8 
  },
  cardImage: {
    height: 80,
    width: '30%', 
    borderRadius: 8
  }
})