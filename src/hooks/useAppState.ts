import { useState } from "react";
import { todoItem } from "../types/types";


export const useAppState = () => {
  const [todoItems, setTodoItems] = useState<todoItem[]>([]);
  
  const [activeItems, setActiveItems] = useState<todoItem[]>([]);
  
  const [activeTab, setActiveTab] = useState<"All" | "Active" | "Completed">("All");
  
  return {
    activeTab,
    setActiveTab,
    activeItems,
    setActiveItems,
    todoItems,
    setTodoItems
  };
};
