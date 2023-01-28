import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { styles } from "./style";
import { AuthHeader } from "../../../components/AuthHeader";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { Separator } from "../../../components/Separator";
import { GoogleLogin } from "../../../components/GoogleLogin";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../../constants/screens";
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserContext } from "../../../store/userContext";
import { LoginDto } from "../../../dto";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../../api";

export const SignIn = () => {
    const { setLoggedIn } = useContext(UserContext)
    const [values, setValues] = useState<LoginDto>({
        email: "",
        password: "",
    })
    const { navigate, goBack } = useNavigation()
    const handleBack = () => goBack()

    const onSignUp = () => {
        navigate(SCREENS.SIGN_UP as never)
    }

    const signIn = useMutation((body: LoginDto) => login(body), {
        onSuccess: () => {
            setLoggedIn(true)
        }
    })

    const onChangeText = (v: string, key: string) => {
        setValues((values) => ({
            ...values,
            [key]: v
        }))
    }

    const handleSubmit = () => {
        signIn.mutate({ email: values.email.toLowerCase(), password: values.password.toLowerCase() })
    }

    return (
        <SafeAreaView>

            <View style={styles.container}>
                <View style={styles.header}>
                    <AuthHeader text="Sign In" onBackPress={handleBack} />
                </View>
                <ScrollView style={styles.scrollViewContainer}>
                    <View style={styles.formSection}>
                        <Input value={values.email} onChange={(v: string) => onChangeText(v, "email")} label="Email" placeholder="example@gmail.com" />
                        <Input value={values.password} onChange={(v: string) => onChangeText(v, "password")} secureTextEntry label="Password" placeholder="*******" />
                        <Button disabled={signIn.isLoading} handlePress={handleSubmit} text="Sign In" />
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

                    {
                        signIn.isLoading ? <ActivityIndicator /> : null
                    }

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

