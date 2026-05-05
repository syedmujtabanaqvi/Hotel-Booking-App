import { StyleSheet, Text, View, FlatList ,Image ,TouchableOpacity} from 'react-native'
import React from 'react'

const confirm = [
   { id: '1', status: '(confirm:)',location: 'China.', image: require('../../assets/image/china.jpeg') },]

const upcoming = [
   { id: '1',  status: '(complete:)',location: 'Japan', image: require('../../assets/image/cardphoto2.jpg') },   
{ id: '2',status: '(complete:)', location: 'Turki', image: require('../../assets/image/turki.jpeg') },
     { id: '3', status: '(complete:)',location: 'China', image: require('../../assets/image/china.jpeg') },]

     const allarray=[...confirm,...upcoming]
const Search = () => {
  return (
    <View style={styles.container}> 
      
     <Text style={styles.text}>MyBooking</Text>
      <FlatList
data={allarray}
keyExtractor={item=>item.id}
renderItem={({item})=>( 
  <View style={styles.flexcontainer} >

    <Text style={styles.text1}>{item.location}</Text>
     <Text style={styles.text2}>{item.status}</Text>

<Image source={item.image} style={styles.image}/>
<TouchableOpacity style={styles.detilview}> 
     <Text style={styles.Upcomingtext}>Upcoming</Text></TouchableOpacity>
  </View>
 
) }/>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
container:{
  paddingTop: "20%",
  padding: '5%',
    flex:1,
    backgroundColor:'#111425'

},flexcontainer:{

  backgroundColor:'#2e3142',
  height:163,
  borderWidth:0,
  marginTop:20,
  borderRadius:17,
  paddingTop:6,
  paddingBottom:3,
  paddingLeft:8
 
},
image:{
   
  width:100,
  height:80 ,
  marginTop:'-20%',
  marginLeft:'1%',
   borderRadius:10,
  backgroundColor:'red' },
  text:{
    fontSize:30,
    color:'#2eb644'
  },
  detilview:{
    marginLeft:'1%',
    marginTop:'3%',
        height: 50,
        width: "94%",
        backgroundColor: '#474c5f',
        borderRadius:12
  },
  Upcomingtext:{
color:'white',
fontSize:21,
fontWeight:'600',
paddingLeft:'35%',
paddingTop:'3%'
  },
  
  text1:{
    color:'white',
fontSize:25,
fontWeight:'600',
paddingLeft:'34%',
paddingTop:'4%'
  },
  text2:{

  color:'#2eb644',
fontSize:21,
paddingLeft:'34%',

  },flexcontainer2:{
    
  backgroundColor:'#2e3142',
  height:163,
  borderWidth:0,
  marginTop:20,
  borderRadius:17,
  paddingTop:6,
  paddingBottom:3,
  paddingLeft:8
  },MyBookingtext:{
    marginTop:'10%',
    fontSize:30,
    color:'#2eb644'
  }
})