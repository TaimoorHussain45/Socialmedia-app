import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="signIn" options={{}} />
      <Stack.Screen name="signUp" options={{}} />
      <Stack.Screen name="forgotPassword" options={{}} />
    </Stack>
  );
};

export default AuthLayout;
