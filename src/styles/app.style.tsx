import { StyleSheet } from 'react-native';
import colors from '../config/colors'

const appStyle = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: colors.secondary,
        alignItems: 'center',
        position: "relative",
        paddingTop: "10%",
        paddingBottom: "10%",
        width: "100%"

    },
    dashboardStack: {
        flex: 1,
        width: '100%',
        alignItems: 'center'
    }
})

export default appStyle;