import React, { Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import styles from './styles'
import user from '../../assets/001-add-user.png'
import phone from '../../assets/002-smartphone.png'
import speak from '../../assets/003-speak.png'
import saveMoney from '../../assets/004-save-money.png'
import profit from '../../assets/005-profit.png'
import moneyBack from '../../assets/money-back.png'
import settings from '../../assets/006-settings.png'
import question from '../../assets/007-question.png'
import barcode from '../../assets/008-barcode.png'
import lock from '../../assets/009-lock.png'
import creditCard from '../../assets/015-credit-card.png'

export default class Tabs extends Component {
    render(){
        return(
            <ScrollView horizontal={true} style={styles.scrollBox}>
                <View style={styles.container}>
                    <View style={styles.boxView}>
                        <Image source={user} />
                    <Text style={styles.text} >Indicar Amigos</Text> 
                    </View>

                    <View style={styles.boxView}>
                        <Image source={phone} />
                        <Text style={styles.text} >Recarga de Celular</Text>
                    </View>

                    <View style={styles.boxView}>
                        <Image source={speak} />
                        <Text style={styles.text} >Cobrar</Text>
                    </View>

                    <View style={styles.boxView}>
                        <Image source={saveMoney} />
                        <Text style={styles.text} >Emprestimos</Text>
                    </View>

                    <View style={styles.boxView}>
                        <Image source={profit} />
                        <Text style={styles.text} >Transferir</Text>
                    </View>

                    <View style={styles.boxView}>
                        <Image source={moneyBack} />
                        <Text style={styles.text} >Depositar</Text>
                    </View>

                    <View style={styles.boxView}>
                        <Image source={settings} />
                        <Text style={styles.text} >Ajustar Limite</Text>
                    </View>

                    <View style={styles.boxView}>
                        <Image source={question} />
                        <Text style={styles.text} >Me Ajuda</Text>
                    </View>
                    
                    <View style={styles.boxView}>
                        <Image source={barcode} />
                        <Text style={styles.text} >Pagar</Text>
                    </View>

                    <View style={styles.boxView}>
                        <Image source={lock} />
                        <Text style={styles.text} >Bloquear Cartão</Text>
                    </View>

                    <View style={styles.boxView}>
                        <Image source={creditCard} />
                        <Text style={styles.text} >Cartão Virtual</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}