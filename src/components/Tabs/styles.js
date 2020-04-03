import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-end',
        flexDirection:'row',
        marginBottom:50
    },
    boxView:{
        padding:10,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        width:100,
        height:100,
        marginLeft:10,
        borderRadius:4,
        alignItems:'center',
        justifyContent:'center',
        top:-8
    },
    text:{
        color:'#fff',
        textAlign:'center',
        fontSize: 13,
        marginTop: 10
    }
})

export default styles;