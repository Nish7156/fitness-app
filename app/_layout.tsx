import { Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

function _layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}

export default _layout;
