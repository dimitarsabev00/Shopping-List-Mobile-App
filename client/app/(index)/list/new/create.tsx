import React, { useState } from "react";
import { Link, Stack, useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { BodyScrollView } from "@/components/ui/BodyScrollView";
import Button from "@/components/ui/button";
import TextInput from "@/components/ui/text-input";
import { appleBlue } from "@/constants/Colors";

export default function CreateListScreen() {
  const [listName, setListName] = useState("");
  const [listDescription, setListDescription] = useState("");

  const router = useRouter();

  const handleCreateList = () => {
    if (!listName) {
      return;
    }
  };

  const handleCreateTestLists = () => {
    // Navigate back to the main list view
    router.replace("/");
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerLargeTitle: false,
          headerTitle: "New list",
        }}
      />
      <BodyScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Grocery Essentials"
            value={listName}
            onChangeText={setListName}
            onSubmitEditing={handleCreateList}
            returnKeyType="done"
            variant="ghost"
            size="lg"
            autoFocus
            inputStyle={styles.titleInput}
            containerStyle={styles.titleInputContainer}
          />
          <Link
            href={{ pathname: "/emoji-picker" }}
            style={[styles.emojiButton, { borderColor: "blue" }]}
          >
            <View style={styles.emojiContainer}>
              <Text>"☺️"</Text>
            </View>
          </Link>
          <Link
            href={{ pathname: "/color-picker" }}
            style={[styles.colorButton, { borderColor: "blue" }]}
          >
            <View style={styles.colorContainer}>
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 100,
                  backgroundColor: "blue",
                }}
              />
            </View>
          </Link>
        </View>
        <TextInput
          placeholder="Description (optional)"
          value={listDescription}
          onChangeText={setListDescription}
          onSubmitEditing={handleCreateList}
          returnKeyType="done"
          variant="ghost"
          inputStyle={styles.descriptionInput}
        />
        <Button
          onPress={handleCreateList}
          disabled={!listName}
          variant="ghost"
          textStyle={styles.createButtonText}
        >
          Create list
        </Button>
        <Button
          onPress={handleCreateTestLists}
          variant="ghost"
          textStyle={styles.createButtonText}
        >
          Create 10 test lists
        </Button>
      </BodyScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    padding: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  titleInput: {
    fontWeight: "600",
    fontSize: 28,
    padding: 0,
  },
  titleInputContainer: {
    flexGrow: 1,
    flexShrink: 1,
    maxWidth: "auto",
    marginBottom: 0,
  },
  emojiButton: {
    padding: 1,
    borderWidth: 3,
    borderRadius: 100,
  },
  emojiContainer: {
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  descriptionInput: {
    padding: 0,
  },
  createButtonText: {
    color: appleBlue,
    fontWeight: "normal",
  },
  colorButton: {
    padding: 1,
    borderWidth: 3,
    borderRadius: 100,
  },
  colorContainer: {
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
  },
});
