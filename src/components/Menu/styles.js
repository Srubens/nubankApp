import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        padding:20,
        flex:1,
        top:-38,
    },
    code:{
        alignItems:'center',
        justifyContent:'center'
    },
    codeText:{
        color:'#fff',
        fontSize:14,
        marginBottom: 8
    },
    boxView:{
        marginTop: 8,
        borderTopWidth: 0.5,
        borderColor: '#fff',
        padding: 10,
        alignItems:'center',
        flexDirection:'row',
    },
    tabImg:{
        top:8
    },
    tabText:{
        top:10,
        marginLeft: 15,
        color:'#fff'
    },
    btn:{
        top: 20,
        color:'#000'
    }
})

export default styles;