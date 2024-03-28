import { View, Text } from "react-native";
import React from "react";
import Counter from "./counter";
import PokemonRTKQuery from "./pokemondemo";
import MotiAnimation from "./motiAnimation";

const Demo = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Text>Demo</Text>
      <Counter />
      <PokemonRTKQuery />
      <MotiAnimation />
    </View>
  );
};

export default Demo;
