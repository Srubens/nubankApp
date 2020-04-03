import React, { Component } from 'react'
import { View, Text, Image, ScrollView, Button, StyleSheet } from 'react-native'
import styles from './styles'
import code  from '../../assets/qrcode.png'
import questions from '../../assets/007-question.png'
import user from '../../assets/012-user.png'
import money from '../../assets/014-money.png'
import creditCard from '../../assets/015-credit-card.png'
import shop from '../../assets/013-shop.png'
import phone from '../../assets/002-smartphone.png'


export default class Menu extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container} >
                    <View style={styles.code}>
                        <Image source={code} />
                        <Text style={styles.codeText} >Banco 000 - NuPamentos S.A</Text>
                        <Text style={styles.codeText} >Agencia 0000</Text>
                        <Text style={styles.codeText} >Conta 0000000-0</Text>
                    </View>

                    <View>

                        <View style={styles.boxView}>
                            <Image style={styles.tabImg} source={questions} />
                            <Text style={styles.tabText} >Me Ajuda</Text>
                        </View>

                        <View style={styles.boxView}>
                            <Image style={styles.tabImg} source={user} />
                            <Text style={styles.tabText} >Perfil</Text>
                        </View>

                        <View style={styles.boxView}>
                            <Image style={styles.tabImg} source={money} />
                            <Text style={styles.tabText} >Configurar Conta</Text>
                        </View>

                        <View style={styles.boxView}>
                            <Image style={styles.tabImg} source={creditCard} />
                            <Text style={styles.tabText} >Configurar Cartão</Text>
                        </View>

                        <View style={styles.boxView}>
                            <Image style={styles.tabImg} source={shop} />
                            <Text style={styles.tabText} >Pedir conta PJ</Text>
                        </View>

                        <View style={styles.boxView}>
                            <Image style={styles.tabImg} source={phone} />
                            <Text style={styles.tabText} >Configurações do app</Text>
                        </View>

                        <View style={styles.btn} >
                            <Button color="#d673f2" title="Sair do App" ></Button>
                        </View>
                        
                    </View>
                </View>
            </ScrollView>
        );
    }
}