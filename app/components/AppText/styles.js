import { StyleSheet, Platform } from 'react-native';


export default StyleSheet.create({
    text: {
        color: "white",
        ...Platform.select({
            ios: {
                fontSize: 20,
                fontFamily: "Avenir",
            },
            android: {
                fontSize: 18,
                fontFamily: "Roboto",
            }
        })
    }
})

