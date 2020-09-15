import React from "react";
import { View } from "react-native";
import Card from "./app/components/Card";
import ListDetailsScreen from "./app/screens/ListDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from './app/components/AppTextInput';

export default function App() {
  return (
    <AppTextInput placeholder="username" icon="email"/>
  );
}
