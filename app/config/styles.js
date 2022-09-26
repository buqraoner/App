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
        padding: 15,
        backgroundColor: colors.gainsboro,
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 25,
        borderRadius: 120,

    }
};