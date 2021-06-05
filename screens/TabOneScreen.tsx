import * as React from "react";
import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
import { Platform } from "react-native";

import { Text, View } from "../components/Themed";

export default function TabOneScreen() {
  return (
    <Appbar.Header>
      <Appbar.Content title="資格勉強スタディ" />
      <Appbar.Action icon="pencil" onPress={() => {}} />
      <Appbar.Action icon="plus" onPress={() => {}} />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
