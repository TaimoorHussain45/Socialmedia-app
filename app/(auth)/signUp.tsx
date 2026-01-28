import BackButton from "@/components/Buttons/BackButton";
import CustomButton from "@/components/Buttons/CustomButton";
import Input from "@/components/inputs/input";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typography from "@/components/Typography";
import fonts from "@/constants/fonts";
import { Metrics } from "@/constants/metrics";
import { theme } from "@/constants/theme";
import { supabase } from "@/lib/supabase";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
interface FormData {
  name: string;
  email: string;
  password: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  password: "",
};

const SignUp = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const updateField = (key: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (formData.name) newErrors.name = "Name is required";
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
  const handlesignUpWithEmail = async () => {
    if (!validateForm()) return;
    setLoading(true);
    try {
      const res = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });
      console.log("====================================");
      console.log(res);
      console.log("====================================");
      router.replace("/(auth)/signIn");
    } catch (error) {
      Alert.alert(error.message);
      setLoading(false);
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
            <BackButton onPress={() => router.replace("/(auth)/signIn")} />
          </View>
          <Typography
            fontSize={Metrics.fontSizeXXLarge}
            fontFamily={fonts.semiBold}
          >
            Let&apos;s,
          </Typography>
          <Typography
            fontSize={Metrics.fontSizeXXLarge}
            fontFamily={fonts.semiBold}
          >
            Get Started
          </Typography>
          <Input
            placeholder="Enter your Name"
            type="default"
            value={formData.name}
            errorText={errors.name}
            onChangeText={(text) => updateField("name", text)}
            iconColor={theme.colors.crimsonRed}
          />
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
          <CustomButton
            title="Sign Up"
            style={styles.primaryButton}
            onPress={handlesignUpWithEmail}
          />
          <View style={styles.authFooterContainer}>
            <Typography>Already have an account? </Typography>
            <TouchableOpacity onPress={() => router.replace("/(auth)/signIn")}>
              <Typography fontFamily={fonts.semiBold}>Sign in</Typography>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  );
};

export default SignUp;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   ForgotPassword: {
//     textAlign: "right",
//     color: theme.colors.crimsonRed,
//     fontSize: 12,
//     fontFamily: fonts.semiBold,
//   },
//   inputContainer: {
//     marginVertical: 15,
//     gap: 2,
//   },
//   passwordContainer: {
//     marginVertical: 15,
//     gap: 3,
//   },
//   customButton: {
//     marginTop: 20,
//   },
//   loginContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     gap: 6,
//     marginBottom: 20,
//   },
//   signUp: {
//     flexDirection: "row",
//     justifyContent: "center",
//     gap: Metrics.spacingTiny,
//     marginVertical: 20,
//   },
// });
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
