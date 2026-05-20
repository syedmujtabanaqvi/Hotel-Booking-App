
import { StyleSheet, Text, View, FlatList, Image } from 'react-native' 
import React from 'react'

const posts = [
    { id: '1', usernamename: 'fizzahthescorp', time:'8 minutes ago' , description:'Turkey trip was smooth, comfy stay and honestly a really good experience.',  profilepic: require('../../assets/image/fizzaimage.jpg') ,image: require('../../assets/image/turki.jpeg') },
      { id: '2',usernamename: 'mina khan',time:'8 minutes ago' , description:'Turkey trip was smooth, comfy stay and honestly a really good experience.',profilepic: require('../../assets/image/IMG_0511.jpg') ,image: require('../../assets/image/ankarapic1.jpg')},
   { id: '3', usernamename: 'Ali222', time:'8 minutes ago',description:'Turkey trip was smooth, comfy stay and honestly a really good experience.',profilepic: require('../../assets/image/fizzaimage.jpg'),image: require('../../assets/image/ankarapic1.jpg') },
      { id: '4', usernamename: 'kumail212',time:'8 minutes ago',description:'Turkey trip was smooth, comfy stay and honestly a really good experience.',profilepic: require('../../assets/image/fizzaimage.jpg'), image: require('../../assets/image/ankarapic1.jpg')}
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
            <View style={{flexDirection:'column'}}> 
            <Text style={styles.uName}>{item.usernamename}</Text>
             <Text style={styles.Timestyles}>{item.time}</Text>
           
           </View>
             <Image source={item.profilepic} style={styles.profilepicStyle} />
            <Image source={item.image} style={styles.imageStyle} />
            <Text style={styles.descriptionstyle}>{item.description}</Text>
           <View style={{alignItems:"center", flexDirection:"row", gap:"7%"}}>
            <View style={{flexDirection:'row'}}>
              <Image source={require('../../assets/image/icon-like.png') } style={styles.likeicon}/>
            <Text style={{fontSize:20 , color:"white", marginTop:"15" ,marginLeft:20}}>Like</Text>
            </View>
            
            <View style={{flexDirection:'row'}}>
               <Image source={require('../../assets/image/comment.png') } style={styles.commenticon}/>
            <Text style={{fontSize:20 , color:"white", marginTop:"12" ,marginLeft:1}}>comment</Text>
            </View>
          
            <View style={{flexDirection:'row'}}>
              <Image source={require('../../assets/image/share.png') } style={styles.likeicon}/>
           <Text style={{fontSize:20 , color:"white", marginTop:"15" , marginLeft: 10 }}>Share</Text>
            </View>
           
          </View>
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
    marginBottom:'15%',
    alignItems: 'center' 
  },
  imageStyle: {
    width: '90%',  
    height: 190,
    borderRadius: 8
  },
  profilepicStyle:{
    height:45,
    width:"12%",
    borderRadius:50,
    marginRight:'76%',
    marginTop:"-11%",
    marginBottom:'3%'
 

  },uName:{

fontSize:18,
color:'white',
marginRight:'26%'

  },
  Timestyles:{
fontSize:13,
color:'white',
marginRight:'35%'
  },

  descriptionstyle:{
fontSize:15,
color:'white',
marginLeft:'5%',
marginRight:'2%',
marginTop:'2%'
  },likeicon:{
    height:25,
    width:20 ,
     tintColor:'white' ,
    marginTop:'18%'},
    commenticon:{
height:25,
    width:40 ,
    height:27,
     tintColor:'white' ,
    marginTop:'11%'

    }
})