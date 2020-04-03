import React, { Component } from 'react'
import { View, Text, Image, Animated } from 'react-native'
import styles from './styles'
import Header from '../../components/header'
import Tabs from '../../components/Tabs'
import Menu from '../../components/Menu'

export default class Main extends Component{
    render(){
        return(
            <View style={styles.Container} >
                <Header></Header>
                <Menu></Menu>
                <Tabs></Tabs>
            </View>
        );
    }
}