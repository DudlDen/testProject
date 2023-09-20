import { createContext, Dispatch } from "react";
import { todoItem } from "../types/types";

interface AppContextProps {
  activeItems: todoItem[];
  setActiveItems: Dispatch<todoItem[]>;
  todoItems: todoItem[];
  setTodoItems: Dispatch<todoItem[]>;
  activeTab: "All" | "Active" | "Completed";
  setActiveTab: Dispatch<"All" | "Active" | "Completed">;
}

export const AppContext = createContext<AppContextProps>({
  activeTab: "All",
  setActiveTab: () => null,
  activeItems: [],
  setActiveItems: () => null,
  todoItems: [],
  setTodoItems: () => null
});
