import { Platform } from "react-native";

import colors from "./colors";


export default {
    colors,
    text: {
        color: colors.dark,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
    screens: {
        padding: 10,
        backgroundColor: colors.light
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 25
    }
};