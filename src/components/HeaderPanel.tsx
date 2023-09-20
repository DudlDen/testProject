import React, { useContext } from "react";
import { Pressable, Text, TextStyle, View, ViewStyle } from "react-native";
import { AppContext } from "../context/AppContext";

type Props = {};

export function HeaderPanel({}: Props) {
  const {
    todoItems,
    activeItems,
    setTodoItems
  } = useContext(AppContext);
  
  function clearCompleted() {
    setTodoItems(todoItems.filter(item => !item.completed));
  }
  
  return (
    <View style={$container}>
      <Text style={$itemCountText}>
        {activeItems.length == 1 ? "1 item left" : `${activeItems.length} items left`}
      </Text>
      <Text style={$title}>
        Todos
      </Text>
      {todoItems.filter(item => item.completed).length > 0 && <Pressable style={$clear} onPress={clearCompleted}>
        <Text>
          Clear completed
        </Text>
      </Pressable>}
    </View>
  );
}

const $container: ViewStyle = {
  marginHorizontal: 12,
  marginTop: 12,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "flex-end",
  position: "relative"
  
};

const $title: TextStyle = {
  fontSize: 20
};

const $itemCountText: TextStyle = {
  position: "absolute",
  left: 0,
  bottom: 0
  
};
const $clear: ViewStyle = {
  position: "absolute",
  right: 0,
  bottom: 0
};
