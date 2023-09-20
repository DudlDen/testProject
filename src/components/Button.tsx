import React from "react";
import { Pressable, Text, ViewStyle } from "react-native";

type Props = {
  text: string,
  onPress?: () => void
  isActive: boolean
  style?: ViewStyle
};

export function Button({ text, onPress, isActive, style }: Props) {
  return (
    <Pressable style={[$container, isActive && $active, style]} onPress={onPress}>
      <Text>
        {text}
      </Text>
    </Pressable>
  );
}

const $container: ViewStyle = {
  padding: 8,
  borderWidth: 1,
  borderColor: "rgba(255,255,255,0)"
};

const $active: ViewStyle = {
  borderColor: "rgba(175, 47, 47, 0.2)",
  borderRadius: 6,
  borderWidth: 1
};
