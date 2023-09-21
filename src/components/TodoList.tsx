import React, { useContext, useEffect } from "react";
import { FlatList, KeyboardAvoidingView, SafeAreaView, ViewStyle } from "react-native";
import { ListItem } from "./ListItem";
import { AppContext } from "../context/AppContext";
import { Input } from "./Input";
import { ButtonPanel } from "./ButtonPanel";
import { HeaderPanel } from "./HeaderPanel";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = {};

export function TodoList({}: Props) {
  const appState = useContext(AppContext);
  const {
    activeItems,
    todoItems,
    setActiveItems,
    activeTab
  } = appState;
  
  useEffect(() => {
    switch (activeTab) {
      case "All":
        setActiveItems(todoItems);
        break;
      case "Active":
        setActiveItems(todoItems.filter(item => !item.completed));
        break;
      case "Completed":
        setActiveItems(todoItems.filter(item => item.completed));
        break;
    }
  }, [todoItems]);
  
  useEffect(() => {
    AsyncStorage.setItem("appState", JSON.stringify(appState), (err) => {
      if (err) {
        console.log("an error");
        throw err;
      }
      console.log("success");
    }).catch((err) => {
      console.log("error is: " + err);
    });
  }, [todoItems, activeTab, activeTab, activeItems]);
  
  return (
    <KeyboardAvoidingView style={$container}>
      <SafeAreaView>
        <HeaderPanel />
        <ButtonPanel />
        
        <Input />
        
        <FlatList
          data={activeItems}
          renderItem={({ item }) => <ListItem item={item} />}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  
  );
}

const $container: ViewStyle = {
  marginBottom: 80
};

