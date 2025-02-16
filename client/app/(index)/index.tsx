import { View, Text, Pressable, Platform, StyleSheet } from "react-native";
import React from "react";
import { router, Stack } from "expo-router";
import { IconSymbol } from "@/components/ui/IconSymbol";

const ICON_COLOR = "#007AFF";

const HomeScreen = () => {
  const renderHeaderRight = () => (
    <Pressable
      // onPress={handleNewListPress}
      onPress={() => router.push("/list/new")}
      style={styles.headerButton}
    >
      <IconSymbol name="plus" color={ICON_COLOR} />
    </Pressable>
  );

  const renderHeaderLeft = () => (
    <Pressable
      // onPress={handleProfilePress}
      onPress={() => {}}
      style={[styles.headerButton, styles.headerButtonLeft]}
    >
      <IconSymbol
        name="gear"
        color={ICON_COLOR}
        style={{ marginRight: Platform.select({ default: 0, android: 8 }) }}
      />
    </Pressable>
  );

  return (
    <>
      <Stack.Screen
        options={{
          title: "Shopping lists",
          headerRight: renderHeaderRight,
          headerLeft: renderHeaderLeft,
        }}
      />
    </>
  );
};
const styles = StyleSheet.create({
  headerButton: {
    padding: 8,
    paddingRight: 0,
    marginHorizontal: Platform.select({ web: 16, default: 0 }),
  },
  headerButtonLeft: {
    paddingLeft: 0,
  },
});
export default HomeScreen;
