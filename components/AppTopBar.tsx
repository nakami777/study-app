import * as React from "react";
import { Appbar } from "react-native-paper";

const MyComponent = () => (
  <Appbar.Header>
    <Appbar.Content title="資格勉強スタディ" />
    <Appbar.Action icon="pencil" onPress={() => {}} />
    <Appbar.Action icon="plus" onPress={() => {}} />
  </Appbar.Header>
);

export default MyComponent;
