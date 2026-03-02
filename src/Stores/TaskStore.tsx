import { create } from "zustand";
import type { TaskType } from "../types/types";


interface StoreType{
  tasks: TaskType[];
  getId: () => number;
  addTask: (t:TaskType) => void;
}

export const useTaskStore = create<StoreType>((set,get) => ({
  tasks: [],
  getId: () => get().tasks.length,
  addTask: (t) => {
    set((state) => ({
      tasks:[...state.tasks,t],
    }))
  }
}));
