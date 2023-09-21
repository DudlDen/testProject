import React, { useEffect, useState } from "react";
import { useAppState } from "./src/hooks/useAppState";
import { AppContext } from "./src/context/AppContext";
import { TodoList } from "./src/components/TodoList";
import { ActivityIndicator, Keyboard, Pressable, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


function App() {
  const appState = useAppState();
  const {
    setActiveItems,
    setActiveTab,
    setTodoItems
  } = appState;
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    AsyncStorage.getItem("appState").then(res => {
      if (res) {
        setActiveTab(JSON.parse(res).activeTab);
        setActiveItems(JSON.parse(res).activeItems);
        setTodoItems(JSON.parse(res).todoItems);
      }
    }).finally(() => {
      setLoading(false);
    });
  }, []);
  
  if (loading)
    return (
      <View style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}>
        <ActivityIndicator />
      </View>
    );
  
  return (
    <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
      <AppContext.Provider value={appState}>
        <TodoList />
      </AppContext.Provider>
    </Pressable>
  );
}

export default App;

