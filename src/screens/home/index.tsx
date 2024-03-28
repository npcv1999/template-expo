import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ROUTER_NAMES } from "@/navigation/Routers";

export default function Home() {
  const navigation: any = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Home Screen</Text>
      <Text onPress={() => navigation.navigate(ROUTER_NAMES.Demo)}>
        Go to Demo
      </Text>
    </View>
  );
}
