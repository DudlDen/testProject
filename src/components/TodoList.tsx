import React, { useContext, useEffect } from "react";
import { FlatList, KeyboardAvoidingView, SafeAreaView, ViewStyle } from "react-native";
import { ListItem } from "./ListItem";
import { AppContext } from "../context/AppContext";
import { Input } from "./Input";
import { ButtonPanel } from "./ButtonPanel";
import { HeaderPanel } from "./HeaderPanel";

type Props = {};

export function TodoList({}: Props) {
  const {
    activeItems,
    todoItems,
    setActiveItems,
    activeTab
  } = useContext(AppContext);
  
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

