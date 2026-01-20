import images from "@/constants/images";
import Colors from "@/constants/theme";
import React from "react";
import { Image, StyleSheet, TextInput, View, ViewStyle } from "react-native";

interface SearchBarProps {
  style?: ViewStyle;
}

const SearchBar: React.FC<SearchBarProps> = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.searchbar}>
        <TextInput
          placeholder="Search"
          placeholderTextColor={Colors.light.silverGray}
          style={styles.input}
        />
        <Image source={images.search} style={styles.icon} />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: "80%",
  },

  searchbar: {},

  input: {
    borderWidth: 1,
    borderColor: Colors.light.charcoalGray,
    backgroundColor: Colors.light.charcoalGray,
    height: 46,
    borderRadius: 10,
    paddingLeft: 45,
    fontSize: 16,
    color: Colors.light.white,
  },

  icon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
    position: "absolute",
    left: 15,
    top: 15,
  },
});
