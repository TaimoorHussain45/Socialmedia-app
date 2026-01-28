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
import { StyleSheet, View } from "react-native";

const ResetPassword = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleUpdatePassword = async () => {
    if (!password) {
      setError("Please enter your password");
      return;
    }
    const res = await supabase.auth.updateUser({
      password,
    });
    console.log(res);
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View>
          <BackButton onPress={() => router.back()} />
        </View>
        <Typography fontFamily={fonts.semiBold} fontSize={16}>
          Update Password
        </Typography>
        <Input
          placeholder="Enter your password"
          type="password"
          iconName="lock"
          value={password}
          errorText={error}
          onChangeText={(text) => setPassword(text)}
          iconColor={theme.colors.crimsonRed}
        />
        <CustomButton title="Update Password" onPress={handleUpdatePassword} />
      </View>
    </ScreenWrapper>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Metrics.spacingMedium,
  },
});
