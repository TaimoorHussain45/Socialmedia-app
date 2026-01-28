import BackButton from "@/components/Buttons/BackButton";
import CustomButton from "@/components/Buttons/CustomButton";
import Input from "@/components/inputs/input";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typography from "@/components/Typography";
import fonts from "@/constants/fonts";
import { Metrics } from "@/constants/metrics";
import { theme } from "@/constants/theme";
import { supabase } from "@/lib/supabase";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

interface FormData {
  email: string;
  password: string;
}

const initialFormData: FormData = {
  email: "",
  password: "",
};

const SignIn = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const updateField = (key: keyof FormData, value: any) => {
    // console.log(`Updating ${key}:`, value);
    setFormData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const validateForm = () => {
    // console.log("Validating form...");
    // console.log("Password:", formData.password);
    const newErrors: Record<string, string> = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8)
      newErrors.password = "Minimum 8 characters";
    console.log("Validation errors:", newErrors);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSignInWithEmail = async () => {
    if (!validateForm()) return;
    try {
      const res = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      console.log("====================================");
      console.log(res.data.session);
      console.log("====================================");
      // router.push("/home");
    } catch (err) {
      if (err instanceof Error) Alert.alert(err.message);
    }
  };

  return (
    <ScreenWrapper>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
        enableOnAndroid
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.screenContainer}>
          <View>
            <BackButton onPress={() => router.back()} />
          </View>
          <Typography
            fontSize={Metrics.fontSizeXXLarge}
            fontFamily={fonts.semiBold}
          >
            Hey,
          </Typography>
          <Typography
            fontSize={Metrics.fontSizeXXLarge}
            fontFamily={fonts.semiBold}
          >
            Welcome back
          </Typography>
          <Typography color={theme.colors.text}>
            Please login to Continue
          </Typography>
          <Input
            placeholder="Enter your email"
            type="email-address"
            value={formData.email}
            onChangeText={(text) => updateField("email", text)}
            iconName="mail"
            errorText={errors.email}
            iconColor={theme.colors.crimsonRed}
          />
          <Input
            placeholder="Enter your Password"
            type="password"
            iconName="lock"
            value={formData.password}
            errorText={errors.password}
            onChangeText={(text) => updateField("password", text)}
            iconColor={theme.colors.crimsonRed}
          />
          <TouchableOpacity
            onPress={() => router.replace("/(auth)/forgotPassword" as any)}
          >
            <Typography textAlign="right">Forgot Password</Typography>
          </TouchableOpacity>
          <CustomButton
            title="Login"
            style={styles.primaryButton}
            onPress={handleSignInWithEmail}
          />
          <View style={styles.authFooterContainer}>
            <Typography>Don&apos;t have an account? </Typography>
            <TouchableOpacity onPress={() => router.replace("/(auth)/signUp")}>
              <Typography fontFamily={fonts.semiBold}>Sign Up</Typography>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  );
};

export default SignIn;
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: Metrics.spacingMedium,
  },

  primaryButton: {
    marginTop: Metrics.spacingLarge,
  },

  authFooterContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: Metrics.spacingTiny,
    marginVertical: Metrics.spacingLarge,
  },
});
