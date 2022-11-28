import { StyleSheet } from 'react-native';
import colors from '../config/colors'

const selectedSensorStyle = StyleSheet.create({
    selectedSensorContainer: {
        // height: '10%',
        width: '95%',
    },
    stack: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        position: 'relative',
        marginBottom: 20
        // justifyContent: 'space-between',/
    },
    backBtn: {
    },
    sensorIDLabel: {
        position: 'absolute',
        left: '20%',
        // marginLeft: 30,
        fontSize: 16
    },
    sensorID: {
        position: 'absolute',
        left: '45%',
        fontSize: 26,
        fontWeight: '500'
    },
    customInputStack: {
        borderColor: 'black',
        borderWidth: 1,
        width: '60%'
    },
    customInputLabel: {
        width: '30%'
    }
})

export default selectedSensorStyle;