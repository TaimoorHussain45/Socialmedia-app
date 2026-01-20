import CustomButton from "@/components/Buttons/CustomButton";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typography from "@/components/Typography";
import fonts from "@/constants/fonts";
import images from "@/constants/images";
import { Metrics } from "@/constants/metrics";
import { theme } from "@/constants/theme";
import { hp, wp } from "@/helpers/common";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

const welcome = () => {
  return (
    <ScreenWrapper bg={theme.colors.white}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Image
          source={images.welcomeImage}
          resizeMode="contain"
          style={styles.image}
        />
        <View style={styles.content}>
          <Typography
            color={theme.colors.black}
            fontFamily={fonts.semiBold}
            fontSize={Metrics.fontSizeXXLarge}
            textAlign="center"
          >
            LINKUP!
          </Typography>
          <Typography textAlign="center">Connect beyond clicks.</Typography>
        </View>
        <View>
          <CustomButton
            title="Get Started"
            onPress={() => router.replace("/(auth)/signIn")}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    padding: wp(4),
    backgroundColor: theme.colors.white,
  },
  image: {
    width: wp(100),
    height: hp(30),
  },
  content: {
    gap: Metrics.spacingMedium,
  },
});
