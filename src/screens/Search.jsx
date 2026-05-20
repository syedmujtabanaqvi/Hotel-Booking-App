
import { StyleSheet, Text, View, FlatList, Image } from 'react-native' 
import React from 'react'

const posts = [
    { id: '1', usernamename: 'fizzahthescorp', description:'Turkey trip was smooth, comfy stay and honestly a really good experience.',  image: require('../../assets/image/turki.jpeg') },
      { id: '2',usernamename: 'mina khan', image: require('../../assets/image/ankarapic1.jpg') },
   { id: '3', usernamename: 'Ali222', description: '', image: require('../../assets/image/ankarapic1.jpg') },
      { id: '4', usernamename: '', image: require('../../assets/image/ankarapic1.jpg') }
]


const Search = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Community Feed</Text>
    
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => ( 
          <View style={styles.flexcontainer}>
            <Text style={styles.uname}>{item.usernamename}</Text>
            <Image source={item.image} style={styles.imageStyle} />
            <Text style={styles.descriptionstyle}>{item.description}</Text>
           
          </View>
        )}
      />
      
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    paddingTop: "20%",
    
    flex: 1,
    backgroundColor: '#111425'
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight:'600',
    marginLeft:'5%',
    marginBottom: 15
  },
  flexcontainer: {
    backgroundColor: '##111425',
    padding: 7,
    borderRadius: 10,
    marginTop: 10,
    height: 300,
    alignItems: 'center' 
  },
  imageStyle: {
    width: '90%',  
    height: 190,
    borderRadius: 8
  },uname:{

fontSize:30,
color:'white',
marginLeft:'-20%'

  },
  descriptionstyle:{
fontSize:20,
color:'white',
marginLeft:'-70%',
  }
})