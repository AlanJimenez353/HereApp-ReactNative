import React from "react";
import { View, Text, FlatList } from "react-native";
import repositories from "../data/repositories.js";

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: repo }) => (
        <View
          key={repo.id}
          style={{ padding: 20, paddingBottom: 5, paddingTop: 5 }}
        >
          <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
            ID: {repo.id}
          </Text>
          <Text>Full Name: {repo.fullName}</Text>
          <Text>Description: {repo.Description}</Text>
          <Text>Language: {repo.language}</Text>
          <Text>Forks Count: {repo.forksCount}</Text>
          <Text>RatingAverage: {repo.ratingAverage}</Text>
        </View>
      )}
    />
  );
};
export default RepositoryList;
