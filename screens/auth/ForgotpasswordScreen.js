import React, {useState} from 'react';
import {Text, View, Dimensions, StyleSheet, TextInput, TouchableOpacity, StatusBar} from 'react-native';

import * as Animatable from 'react-native-animatable';

import FontAwesome from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import {LinearGradient} from 'expo-linear-gradient';

const ForgotpasswordScreen = () => {
    const [data, setData] = useState({
        email: '',
        check_textInputChange: false
    })

    const textInputChange = (val) => {

    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle='light-content' />
            <View 
                style={styles.header}
            >
                <Text style={styles.text_header}>Forgot Password</Text>

            </View>

            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
            >
            <Text style={styles.text_footer}>
                E-mail
            </Text>
                <View style={styles.action}>
                    <FontAwesome 
                        name="envelope"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Your E-mail"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange}
                    />
                    {data.check_textInputChange ? 
                        <Animatable.View
                            animation="bounceIn"
                        >
                            <Feather 
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                        </Animatable.View>
                    : null} 
                </View>

            </Animatable.View>

            <View style={styles.button}>
                    <LinearGradient
                        colors={['#08d4c4', '#01ab9d']}
                        style={styles.signIn}
                    >
                        <Text
                            style={[styles.textSign, {
                                color: '#fff'
                            }]}
                        >Reset Password</Text>

                    </LinearGradient>

            </View>

        </View>
    )
};

export default ForgotpasswordScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 20

    }
  });