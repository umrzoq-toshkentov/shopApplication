import { ScrollView, Text, View } from "react-native";
import React from "react";
import { styles } from "./style";
import { AuthHeader } from "../../../components/AuthHeader";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { Separator } from "../../../components/Separator";
import { GoogleLogin } from "../../../components/GoogleLogin";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../../constants/screens";
import { SafeAreaView } from 'react-native-safe-area-context';

export const SignIn = () => {
    const { navigate, goBack } = useNavigation()
    const handleBack = () => goBack()

    const onSignUp = () => {
        navigate(SCREENS.SIGN_UP as never)
    }

    return (
        <SafeAreaView>

            <View style={styles.container}>
                <View style={styles.header}>
                    <AuthHeader text="Sign In" onBackPress={handleBack} />
                </View>
                <ScrollView style={styles.scrollViewContainer}>
                    <View style={styles.formSection}>
                        <Input label="Email" placeholder="example@gmail.com" />
                        <Input secureTextEntry label="Password" placeholder="*******" />
                        <Button text="Sign In" />
                    </View>
                    <View style={styles.footer}>
                        <Separator text="Or sign in with" />
                        <GoogleLogin />
                    </View>

                    <Text style={styles.footerText}>
                        Don't have an account?
                        <Text onPress={onSignUp} style={styles.footerLink}>
                            Sign Up
                        </Text>
                    </Text>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

