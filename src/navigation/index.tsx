import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@/screens/home";
import Demo from "@/screens/demo";
import { ROUTER_NAMES } from "./Routers";
import MyTabs from "./TabNavigation";
import { SafeAreaView, StyleSheet } from "react-native";
import StackNavigation from "./StackNavigation";

export default function MainNavigation() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
