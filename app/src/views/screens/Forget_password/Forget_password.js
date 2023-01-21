import React, { useState } from 'react';
import {

    StyleSheet,
    Text,
    View, Image, ImageBackground,
    TouchableOpacity, ScrollView
} from 'react-native';

import { TextInput, Button } from 'react-native-paper';

import { appImages } from '../../../assets/utilities/index'

import styles from './styles';
const Forget_password = ({ navigation }) => {
    const [email, setemail] = useState("")
    const forgetpass = async () => {
        navigation.navigate("Verification")
    }
    return (
        <ScrollView style={styles.myBackground}>
            <View style={{ alignSelf: 'center', marginTop: '15%' }}>
                <Image source={appImages.logo} style={{ width: 129.5, height: 108.59 }} />
            </View>

            <View style={styles.view1}>
                <View style={styles.view11}>
                    <Text
                        style={styles.f1}
                    >
                        Forget Password
                    </Text>
                </View>

                <View style={styles.view12}>
                    <Text
                        style={styles.f2}
                    >
                        Enter email to get a verification code
                    </Text>
                </View>
            </View>

            <View style={styles.bigview}>
                <TextInput
                    left={<TextInput.Icon icon="email" color='#383358' />}
                    style={styles.textinput}
                    activeUnderlineColor='#383358'
                    placeholder='Enter your email'
                />
            </View>


            <View style={styles.lastview}>
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
                    onPress={() => forgetpass()}>
                    Send Code
                </Button>
            </View>
        </ScrollView>

    );
};

export default Forget_password  
