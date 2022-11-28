import { StyleSheet } from 'react-native';
import colors from '../config/colors'

const sensorStyle = StyleSheet.create({
    sensorContainer: {
        backgroundColor: colors.primary,
        // width: '110%',
        padding: '5%',
        borderRadius: 5,
        shadowColor: colors.primaryDark,
        shadowRadius: 5,
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 2 },
        display: 'flex',
        flexDirection: "row",
        margin: 5
        // justifyContent: 'center'
    },
    blank: {
        flex: 1
    },
    field: {
        flex: 3,
        textAlign: 'center'
        // color: 'red',
        // width: "50%",
        // fontSize: 12
    }
})

export default sensorStyle;