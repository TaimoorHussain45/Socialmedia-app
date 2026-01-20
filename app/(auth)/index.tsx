import { router, useFocusEffect } from "expo-router";

const MainLayout = () => {
  useFocusEffect(() => {
    router.replace("/(auth)/signIn");
  });
};
export default MainLayout;
