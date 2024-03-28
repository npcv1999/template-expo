import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTER_NAMES } from "./Routers";
import MyTabs from "./TabNavigation";

export default function StackNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={ROUTER_NAMES.Home}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTER_NAMES.MyTab} component={MyTabs} />
    </Stack.Navigator>
  );
}
