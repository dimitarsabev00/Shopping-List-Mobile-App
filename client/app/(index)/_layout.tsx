import React from "react";
import { useNetworkState } from "expo-network";
import { Redirect, router, Stack } from "expo-router";
import { Alert } from "react-native";
import { SignedIn, useUser } from "@clerk/clerk-expo";
import { Button } from "@/components/ui/button";

export default function AppIndexLayout() {
  const { user } = useUser();
  const networkState = useNetworkState();

  React.useEffect(() => {
    if (
      !networkState.isConnected &&
      networkState.isInternetReachable === false
    ) {
      Alert.alert(
        "🔌 You are offline",
        "You can keep using the app! Your changes will be saved locally and synced when you are back online."
      );
    }
  }, [networkState.isConnected, networkState.isInternetReachable]);

  if (!user) {
    return <Redirect href="/(auth)" />;
  }

  return (
    <SignedIn>
      <Stack
        screenOptions={{
          ...(process.env.EXPO_OS !== "ios"
            ? {}
            : {
                headerLargeTitle: true,
                headerTransparent: true,
                headerBlurEffect: "systemChromeMaterial",
                headerLargeTitleShadowVisible: false,
                headerShadowVisible: true,
                headerLargeStyle: {
                  // NEW: Make the large title transparent to match the background.
                  backgroundColor: "transparent",
                },
              }),
        }}
      >
        <Stack.Screen
          name="list/new/index"
          options={{
            presentation: "formSheet",
            sheetGrabberVisible: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="profile"
          options={{
            presentation: "formSheet",
            sheetAllowedDetents: [0.75, 1],
            sheetGrabberVisible: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="list/new/scan"
          options={{
            presentation: "fullScreenModal",
            headerLargeTitle: false,
            headerTitle: "Scan QR code",
            headerLeft: () => (
              <Button variant="ghost" onPress={() => router.back()}>
                Cancel
              </Button>
            ),
          }}
        />
      </Stack>
    </SignedIn>
  );
}
