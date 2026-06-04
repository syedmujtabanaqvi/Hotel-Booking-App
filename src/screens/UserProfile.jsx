import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const UserProfile = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#111425' }}>
            <Text style={styles.UserProfile}>User Profile</Text>
            <Image style={styles.profilepicture} source={require('../../assets/image/profileimage.jpg')}></Image>

            <Text style={styles.UserName}>SYED MUJTABA</Text>
            <Text style={styles.Location}>Location</Text>
            <Text style={styles.Description}>Exploring the world through a lens and code. A passionate storyteller dedicated to capturing the essence of adventure and the art of filmmaking. Always on a journey to discover new horizons and create meaningful impact</Text>

            <View style={styles.milecontainer}>
                <Image style={styles.milecomplete} source={require('../../assets/image/milecomplete.png')}></Image>

                <Text style={styles.milecompletetext1}>Miles </Text><Text style={styles.milecompletetext2}> Complete</Text>
            </View>
            <View style={styles.milecontainer2}>
                <Image style={styles.milecomplete1} source={require('../../assets/image/milecomplete.png')}></Image>

                <Text style={styles.milecompletetext3}>Miles </Text><Text style={styles.milecompletetext4}> Complete</Text>
            </View>


            <TouchableOpacity style={styles.EditProfile}><Text style={styles.EditProfileText}>Edit Profile</Text> </TouchableOpacity>
        </View>
    )
}

export default UserProfile

const styles = StyleSheet.create({

    UserProfile: {

        color: 'white',
        fontSize: 25,
        marginTop: '20%',
        marginLeft: '35%'
    },
    profilepicture: {
        height: '20%',
        width: '40%',
        marginLeft: '32%',
        marginTop: '6%',
        borderRadius: 80,
        borderWidth: 4,
        borderColor: '#068a01'
    },
    UserName: {
        color: 'white',
        fontSize: 25,
        marginTop: '10%',
        marginLeft: '27%',
        fontWeight: '700'
    },
    Location: {
        color: 'white',
        fontSize: 20,
        marginTop: '-1%',
        marginLeft: '43%'
    },
    Description: {
        color: 'white',
        fontSize: 13,
        marginTop: '5%',
        marginLeft: '14%',
        marginRight: '6%'
    }, EditProfile: {
        height: '5%',
        width: '85%',
        marginLeft: '7%',
        marginTop: '10%',
        backgroundColor: '#72f83d',
        borderRadius: 5
    },
    EditProfileText: {
        color: 'white',
        paddingLeft: '30%',
        paddingTop: '-2%',
        fontWeight: '800',
        fontSize: 27
    }, milecontainer: {

        marginTop: '4%',
        flexDirection: 'column',
        alignContent: 'center',
        paddingLeft: '14%',
    },
    milecomplete: {
        tintColor: '#72f83d',
        flexDirection: 'column',
        alignContent: 'center',
        width: '20%',
        height: 90,

    }, milecomplete1: {
        tintColor: '#72f83d',
        width: '20%',
        height: 69,

    },
    milecomplete3: {

        tintColor: '#72f83d',
        width: '21%',
        height: 69,

    },
    milecompletetext2: {
        color: 'white',
        fontSize: 15,
    },
    milecontainertext: {
        flexDirection: 'column',

    },
    milecompletetext1: {
        color: 'white',
        fontSize: 15,
        paddingLeft: '6%',
    },
    milecompletetext2: {
        color: 'white',
        flexDirection: 'column',
        alignContent: 'space-between',
        fontSize: 15,

    }, milecontainer: {

        marginTop: '4%',
        flexDirection: 'column',
        alignContent: 'center',
        paddingLeft: '14%',
    },
    milecomplete: {
        tintColor: '#72f83d',
        flexDirection: 'column',
        alignContent: 'center',
        width: '20%',
        height: 90,

    }, milecomplete1: {
        tintColor: '#72f83d',
        width: '20%',
        height: 69,

    },
    milecomplete3: {

        tintColor: '#72f83d',
        width: '21%',
        height: 69,

    },
    milecompletetext2: {
        color: 'white',
        fontSize: 15,
    },
    milecontainertext: {
        flexDirection: 'column',

    },
    milecompletetext1: {
        color: 'white',
        fontSize: 15,
        paddingLeft: '6%',
    },
    milecompletetext2: {
        color: 'white',
        flexDirection: 'column',
        alignContent: 'space-between',
        fontSize: 15,

    },

})