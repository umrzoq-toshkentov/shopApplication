import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        height: "100%",
        padding: 24,
        display: "flex",
        justifyContent: "center",
        gap: 54,
    },
    image: {
        width: "100%",
        height: 200
    },
    titleContainer: {
        display: 'flex',
        gap: 5
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: colors.black,
        textAlign: "center"
    },
    innerTitle: {
        color: colors.orange,
        textDecorationLine: "underline"
    },
    footerContainer: {
        justifyContent: "center",
        display: 'flex',
        gap: 30,
    },
    footerText: {
        color: colors.blue,
        fontWeight: '700',
        fontSize: 16,
        textAlign: "center",
    }
})