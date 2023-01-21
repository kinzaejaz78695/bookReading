import React, { useState } from 'react';
import {

    StyleSheet,
    Text,
    View, Image, ImageBackground,
    // TextInput,
    TouchableOpacity, ScrollView
} from 'react-native';

// import { TouchableRipple, Checkbox, TextInput, TextInput as MaterialTextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import { useNavigation } from '@react-navigation/native'
import { TextInput, Button } from 'react-native-paper';
import { appImages } from '../../../assets/utilities'
import styles from './styles';

const CELL_COUNT = 4;
const Verification = () => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const navigation = useNavigation()
    const verify = async () => {
        console.log(value)
        navigation.navigate("Reset_Password")
    }
    return (
        <ScrollView style={styles.myBackground}
            keyboardShouldPersistTaps='handled'>
            <View style={{ alignSelf: 'center', marginTop: '15%' }}>
                <Image source={appImages.logo} style={{ width: 129.5, height: 108.59 }} />
            </View>

            <View style={styles.view1}>
                <View style={styles.view11}>
                    <Text
                        style={styles.f1}
                    >
                        Verification
                    </Text>
                </View>


                <View style={styles.view12}>
                    <Text
                        style={styles.f2}
                    >
                        Enter code that you received on your email
                    </Text>
                </View>
            </View>

            <View style={styles.root}>
                <CodeField
                    ref={ref}
                    {...props}
                    // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <Text
                            key={index}
                            style={[styles.cell, isFocused && styles.focusCell]}
                            onLayout={getCellOnLayoutHandler(index)}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    )}
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
                    // onPress={() => navigation.navigate('Reset_Password')}
                    >
                    Verify
                </Button>
            </View>

        </ScrollView>

    );
};

export default Verification  
