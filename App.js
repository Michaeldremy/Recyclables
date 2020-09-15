import React, { useState } from "react";
import { View } from "react-native";
import Card from "./app/components/Card";
import ListDetailsScreen from "./app/screens/ListDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import AppText from "./app/components/AppText";

const catergories = [
  { label: "Furniture", value: 1 },
  { label: "Gaming", value: 2 },
  { label: "Cookware", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState(catergories[0]);

  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={catergories}
        icon="apps"
        placeholder="Category"
      />
      <AppTextInput icon="email" placeholder="email" />
    </Screen>
  );
}
