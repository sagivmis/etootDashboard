import { StyleSheet } from 'react-native';
import colors from '../config/colors'

const loginStyle = StyleSheet.create({
    loginContainer: {
        backgroundColor: colors.primary,
        width: '60%',
        height: '30%',
        padding: '5%',
        borderRadius: 5,
        shadowColor: colors.primaryDark,
        shadowRadius: 5,
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 2 },
        position: 'relative',
        top: "30%"
    }
})

export default loginStyle;