import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';

import {
    TextInput,
    Button,
    Divider
} from 'react-native-paper';

import { appImages } from '../../../assets/utilities/index'
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';


const SignIn = ({navigation}) => {
    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")
    const [check, setcheck] = useState(false)
    
    // const LoginUser = () => {
    //     // navigation.navigate("Home")
    // }

    const [isLoading, setLoading] = useState(true);
    const Login = async () => {
        // navigation.navigate('drawer_Home')
    }
    return (

        <ScrollView style={styles.myBackground}
            keyboardShouldPersistTaps='handled'
        >
            <View>
                <View style={{ alignSelf: 'center', marginTop: '15%' }}>
                    <Image source={appImages.logo} style={{ width: 129.5, height: 108.59 }} />
                </View>

                <View style={styles.view1}>
                    <View style={styles.view11}>
                        <Text
                            style={styles.f1}
                        >
                            Welcome to Read Books
                        </Text>
                    </View>
                    <View style={styles.view12}>
                        <Text
                            style={styles.f2}
                        >
                            Sign In to get started with Read Books
                        </Text>
                    </View>
                </View>




                <View style={styles.bigview}>
                    <View style={{ marginVertical: '2%' }}>
                        <TextInput
                            left={<TextInput.Icon icon="email" color='#6D6D6D' />}
                            style={{
                                borderTopLeftRadius: 15,
                                borderTopRightRadius: 15,
                                borderBottomLeftRadius: 15,
                                borderBottomRightRadius: 15,
                                height: 55,
                                backgroundColor: '#ffff',
                                borderWidth: 1,
                                borderColor: '#E6E6E6'
                            }}
                            activeUnderlineColor='#383358'
                            //   value={text}
                            placeholder='Enter your email'
                            onChangeText={email => setemail(email)}
                        />
                    </View>

                    <View style={{ marginVertical: '4%' }}>
                        <TextInput
                            left={<TextInput.Icon icon="lock" color='#6D6D6D' />}
                            right={
                                check === true ?
                                    <TextInput.Icon icon="eye" color='#6D6D6D' onPress={() => { setcheck(false) }} /> : <TextInput.Icon icon="eye-off" color='#383358' onPress={() => { setcheck(true) }} />
                            }
                            secureTextEntry={check === false ? true : false}
                            style={{
                                borderTopLeftRadius: 15,
                                borderTopRightRadius: 15,
                                borderBottomLeftRadius: 15,
                                borderBottomRightRadius: 15,
                                height: 55,
                                backgroundColor: '#ffff',
                                borderWidth: 1,
                                borderColor: '#E6E6E6'
                            }}
                            activeUnderlineColor='#383358'
                            //   value={text}
                            placeholder='Enter your password'
                            onChangeText={pass => setpass(pass)}
                        />
                    </View>

                    <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('Forget_password')} style={{
                        marginVertical: '1%',
                        alignSelf: 'flex-end',
                    }} >
                        <Text style={{
                            color: '#EA8E6F',
                            fontSize: 15,
                        }}>
                            Forget Password?
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>



            <View style={{ marginTop: '55%' }}>
                <View style={styles.buttonview}>
                    <Button
                        style={{
                            backgroundColor: '#233973',
                            fontSize: 16,
                            borderRadius: 10
                        }}
                        contentStyle={{
                            padding: '3%'
                        }}
                        mode="contained"
                        textColor={'white'}
                        onPress={() => Login()}>
                        Sign In
                    </Button>
                </View>


                <View style={styles.lastview} >
                    <Text style={{
                        color: '#000000',
                        fontSize: 14,
                    }}>
                        Don’t have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={{ marginLeft: '2%' }} >
                        <Text
                            style={{
                                color: '#EA8E6F',
                                fontSize: 14,
                            }}
                        >Sign Up here</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>



    );
};

export default SignIn  
