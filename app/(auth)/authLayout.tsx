import React from "react";
import { StyleSheet, View } from "react-native";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <View style={styles.container}>{children}</View>;
};

export default AuthLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
