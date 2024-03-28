import { View, Text, Image } from "react-native";
import React from "react";
import { useGetPokemonByNameQuery } from "@/redux/services/pokemon";

const PokemonRTKQuery = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  return (
    <View>
      <Text>PokemonRTKQuery</Text>
      {error ? (
        <Text>Oh no, there was an error</Text>
      ) : isLoading ? (
        <Text>Loading...</Text>
      ) : data ? (
        <>
          <Text>{data.species.name}</Text>
          <Image
            style={{ width: 100, height: 100 }}
            source={{
              uri: data.sprites.front_default,
            }}
          />
        </>
      ) : null}
    </View>
  );
};

export default PokemonRTKQuery;
