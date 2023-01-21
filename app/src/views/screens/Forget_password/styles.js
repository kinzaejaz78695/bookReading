import { StyleSheet } from 'react-native'
import COLORS from '../../../assets/consts/colors';
import {
    Dimensions,
} from 'react-native';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const STYLES = StyleSheet.create({
    myBackground: {
        flex: 1,
        backgroundColor: '#ffff',
        paddingHorizontal: '5%',//is sa cheezan dono sides sa mid ma a jiyan ge
        // paddingVertical: '10%'
    },
    f1: {
        color: COLORS.blue,
        fontSize: 25,
        textAlign: 'center',
    },
    f2: {
        color: COLORS.gray,
        fontSize: 15,
        textAlign: 'center',
    },
    view1: {
        marginTop: '5%'
    },
    view11: {
        // flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        marginBottom:'2%'
    },
    view12: {
        // flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center'
    },
    bigview: {
        marginTop: '10%',
    },
    textinput: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        height: 55,
        backgroundColor: '#ffff',
        borderWidth: 1,
        borderColor: '#E6E6E6'
    },
    lastview: {
        marginBottom: '10%',
        marginTop:'99%'
    }
})

export default STYLES; 