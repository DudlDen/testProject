import React, { useContext, useEffect, useRef, useState } from "react";
import { Pressable, Text, TextInput, TextStyle, ViewStyle } from "react-native";
import Complete from "../img/complete.svg";
import UnComplete from "../img/unComplete.svg";
import DeleteIcon from "../img/delete.svg";
import { todoItem } from "../types/types";
import { AppContext } from "../context/AppContext";

type Props = {
  item: todoItem
  
};

export function ListItem({ item: { completed, text, id } }: Props) {
  const {
    setTodoItems,
    todoItems
    
  } = useContext(AppContext);
  const [textValue, setTextValue] = useState<string>(text);
  const [test, setTest] = useState<boolean>(false);
  const ref = useRef<TextInput>(null);
  
  function onComplete() {
    setTodoItems(todoItems.map(item => item.id == id ? { ...item, completed: !item.completed } : item));
  }
  
  function onDelete() {
    setTodoItems(todoItems.filter(item => item.id != id));
  }
  
  useEffect(() => {
    if (test)
      ref.current?.focus();
  }, [test]);
  
  return (
    <Pressable
      onPress={onComplete}
      onLongPress={() => {
        setTest(true);
        
      }}
      style={$container}
    >
      {completed ? <Complete /> : <UnComplete />}
      
      {test ? <TextInput
          ref={ref}
          style={$text}
          value={textValue}
          onChangeText={setTextValue}
          onBlur={() => {
            setTodoItems(todoItems.map(item => {
              if (item.id == id)
                return {
                  ...item,
                  text: textValue
                };
              else
                return item;
              
              
            }));
            setTest(false);
          }}
        
        /> :
        <Text
          style={[$text, completed && $textCross]}
        >
          {textValue}
        </Text>}
      
      <DeleteIcon onPress={onDelete} />
    </Pressable>
  );
}

const $container: ViewStyle = {
  padding: 12,
  flexDirection: "row",
  alignItems: "center",
  borderBottomColor: "#E6E6E6",
  borderBottomWidth: 1
};

const $text: TextStyle = {
  marginHorizontal: 14,
  fontSize: 20,
  color: "#000",
  flex: 1
};
const $textCross: TextStyle = {
  color: "#E6E6E6",
  textDecorationLine: "line-through"
};
