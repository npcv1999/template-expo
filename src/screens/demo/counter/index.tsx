import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { decrement, increment } from "@/redux/slices/counterSlice";

const Counter = () => {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <View>
      <Text>Redux Toolkit</Text>
      <Pressable onPress={() => dispatch(increment())}>
        <Text>+</Text>
      </Pressable>
      <Text>{count}</Text>
      <Pressable onPress={() => dispatch(decrement())}>
        <Text>-</Text>
      </Pressable>
      <Text>index</Text>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({});
