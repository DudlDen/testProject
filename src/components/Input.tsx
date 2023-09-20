import React, { useContext, useState } from "react";
import { TextInput, TextStyle, View, ViewStyle } from "react-native";
import { AppContext } from "../context/AppContext";
import ArrowComplete from "../img/arrowComplete.svg";
import ArrowUnComplete from "../img/arrowUnComplete.svg";
import Success from "../img/success.svg";

const ICON_SIZE = 20;

type Props = {};

export function Input({}: Props) {
  const {
    setTodoItems,
    todoItems
    
  } = useContext(AppContext);
  
  const [text, setText] = useState<string>("");
  
  function onComplete() {
    setTodoItems(todoItems.map(item => {
      return { ...item, completed: true };
    }));
  }
  
  function onUnComplete() {
    setTodoItems(todoItems.map(item => {
      return { ...item, completed: false };
    }));
  }
  
  function onPressAddText() {
    setText("");
    setTodoItems([...todoItems, {
      id: todoItems.length ? Number(todoItems.at(-1)?.id) + 1 : 1,
      text,
      completed: false
    }]);
  }
  
  function arrowRender() {
    if (todoItems.length == 0) {
      return <View style={$empty} />;
    }
    
    if (todoItems.filter(item => !item.completed).length > 0)
      return <ArrowUnComplete width={ICON_SIZE} height={ICON_SIZE} onPress={onComplete} />;
    else
      return <ArrowComplete width={ICON_SIZE} height={ICON_SIZE} onPress={onUnComplete} />;
  }
  
  return (
    <View
      style={$container}
    >
      {arrowRender()}
      <TextInput
        value={text}
        onChangeText={setText}
        style={$textInput}
        placeholder={"What needs to be done?"}
      />
      {text && <Success width={ICON_SIZE} height={ICON_SIZE} onPress={onPressAddText} />}
    </View>
  );
}

const $container: ViewStyle = {
  padding: 16,
  flexDirection: "row",
  alignItems: "center",
  borderBottomColor: "#E6E6E6",
  borderBottomWidth: 1
};

const $textInput: TextStyle = {
  marginLeft: 14,
  marginRight: 8,
  fontSize: 20,
  flex: 1
};

const $empty: ViewStyle = {
  width: ICON_SIZE
};
