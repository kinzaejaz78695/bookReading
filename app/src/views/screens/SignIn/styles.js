import { StyleSheet } from 'react-native'
import COLORS from '../../../assets/consts/colors';
import {
    Dimensions,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const STYLES = StyleSheet.create({

    myBackground: {
        flex: 1,
        backgroundColor: '#ffff',
        paddingHorizontal: '5%',

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
        flexDirection: 'row',
        justifyContent: 'center',
    },
    view12: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    bigview: {
        marginTop: '10%'
    },
    buttonview: {
        // marginVertical: '10%',
        marginBottom: '7%'
    },

    lastview: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: '5%',
    }
})

export default STYLES; 