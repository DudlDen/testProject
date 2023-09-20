import React from "react";
import { useAppState } from "./src/hooks/useAppState";
import { AppContext } from "./src/context/AppContext";
import { TodoList } from "./src/components/TodoList";
import { Keyboard, Pressable } from "react-native";


function App() {
  const appState = useAppState();
  
  return (
    <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
      <AppContext.Provider value={appState}>
        <TodoList />
      </AppContext.Provider>
    </Pressable>
  );
}

export default App;

