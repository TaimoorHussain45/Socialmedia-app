import fonts from "@/constants/fonts";
import { Metrics } from "@/constants/metrics";
import { theme } from "@/constants/theme";
import { wp } from "@/helpers/common";
import { StyleSheet, TouchableOpacity } from "react-native";
import Typography from "../Typography";

type CustomButtonProps = {
  title?: string;
  style?: object;
  disabled?: boolean;
  onPress?: () => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  disabled = false,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      disabled={disabled}
    >
      <Typography color={theme.colors.white} fontFamily={fonts.medium}>
        {title}
      </Typography>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: wp(90),
    height: wp(14),
    borderRadius: Metrics.radiusMedium,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.primary,
  },
});
