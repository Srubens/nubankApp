import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import logo from '../../assets/Nubank_Logo.png'
import arrow from '../../assets/017-down-arrow.png'

export default class Header extends Component {
    render() {
        return (
            <View>
            
                <View style={styles.Header} >
                    <Image source={logo} />
                    <Text style={styles.user} >Rubens</Text>
                </View>
                
                <View style={styles.ViewArrow}>
                    <Image style={styles.ImgArrow} source={arrow} />
                </View>
            
            </View>
        );
    }
}