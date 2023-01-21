import { StyleSheet } from 'react-native'
import COLORS from '../../../assets/consts/colors';
const STYLES = StyleSheet.create({
    myBackground: {
        backgroundColor: '#ffff',
        paddingHorizontal: '5%',//is sa cheezan dono sides sa mid ma a jiyan ge
    },
    myBox: {
        marginTop: 10,
        marginVertical: 20,
        height: 45,
        // padding:20
        paddingLeft: 20
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
        alignItems: 'center'
    },
    view12: {
        // flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center'
    },

    lastview: {
        marginTop: '99%',
        marginBottom: '10%',
        // flex: 1,
        // justifyContent: 'flex-end',
        // paddingHorizontal: '5%',
    },
    // ------------------------verification styling-------------------------------
    root: { flex: 1, padding: 0 },
    title: { textAlign: 'center', fontSize: 30 },
    codeFieldRoot: { marginTop: 10 },
    cell: {
        width: 45,
        height: 45,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: COLORS.border,
        color: COLORS.orange,
        textAlign: 'center',
        margin: 20,
        borderRadius:10
        // marginBottom: '116%'
    },
    focusCell: {
        borderColor: COLORS.blue,
    },
    textWS: {
        color: COLORS.white,
        textAlign: 'center',
        fontSize: 14
    },
    textWL: {
        color: COLORS.white,
        textAlign: 'center',
        fontSize: 15
    }


})

export default STYLES; 