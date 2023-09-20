import React, { useContext } from "react";
import { View, ViewStyle } from "react-native";
import { Button } from "./Button";
import { AppContext } from "../context/AppContext";

export function ButtonPanel() {
  const {
    activeTab,
    setActiveTab,
    todoItems,
    setActiveItems
  } = useContext(AppContext);
  
  function onAllPress() {
    setActiveItems(todoItems);
    setActiveTab("All");
  }
  
  function onActivePress() {
    setActiveItems(todoItems.filter(item => !item.completed));
    setActiveTab("Active");
  }
  
  function onCompletedPress() {
    setActiveItems(todoItems.filter(item => item.completed));
    setActiveTab("Completed");
  }
  
  return (
    <View style={$buttonContainer}>
      <Button
        text={"All"}
        isActive={activeTab == "All"}
        style={$buttonMargin}
        onPress={onAllPress}
      />
      <Button
        text={"Active"}
        isActive={activeTab == "Active"}
        style={$buttonMargin}
        onPress={onActivePress}
      />
      <Button
        text={"Completed"}
        isActive={activeTab == "Completed"}
        onPress={onCompletedPress}
      />
    
    </View>
  );
}

const $buttonContainer: ViewStyle = {
  marginHorizontal: 12,
  marginTop: 12,
  flexDirection: "row",
  justifyContent: "center"
};

const $buttonMargin: ViewStyle = {
  marginRight: 12
};
