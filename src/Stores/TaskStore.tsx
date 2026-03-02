import { create } from "zustand";
import type { TaskType } from "../types/types";


interface StoreType{
  tasks: TaskType[];
  addTask: (t:TaskType) => void;
}

export const TaskStore = create<StoreType>((set,get) => ({
  tasks: {} as TaskType[],
  getId: () => get().tasks.length,
  addTask: (t) => {
    set((state) => ({
      tasks:[t,...state.tasks],
    }))
  }
}));
