import React from "react";
import { Switch, Redirect, Text, View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar.jsx";
import { Route, Routes } from "react-router-native";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<Text>Working on it</Text>} />
        <Route path="/register" element={<Text>Working on it</Text>} />

      </Routes>
    </View>
  );
};
export default Main;
/*
return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Switch>
        <Route path='/' exact>
          <RepositoryList />
        </Route>
        <Route path='/signin' exact>
          <Text>Working on it</Text>
        </Route>
        <Redirect to='/' />
      </Switch>
    </View>
  )
}
*/
