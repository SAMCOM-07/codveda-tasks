import { useEffect, useState, type ReactNode } from "react"
import { TaskContext } from "./CreateContext";
import type { TaskType } from "../types/types";


export const TaskProvider = ({ children }: { children: ReactNode }) => {

  const [openFormOverlay, setOpenFormOverlay] = useState(false)

  const storedTasks = localStorage.getItem("tasks");
  const initialTasks = storedTasks ? JSON.parse(storedTasks) : [];
  const [tasks, setTasks] = useState<TaskType[]>(initialTasks)
  const [editDetails, setEditDetails] = useState<TaskType | null>(null)

  const [openAlert, setOpenAlert] = useState(false);
  const [alertDetails, setAlertDetails] = useState({ type: "", message: "" });

  // Theme state
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    return (localStorage.getItem("theme") || "light") as "light" | "dark";
  });

  // save tasks to localstorage
  useEffect(() => {
    const saveToLocalStorage = () => {
      if (tasks.length > 0) {
        localStorage.setItem("tasks", JSON.stringify(tasks))
      }

      if (tasks.length === 0) {
        localStorage.removeItem("tasks")
      }
    }
    saveToLocalStorage();
  }, [tasks])

  // manage theme changes
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // delete task handler
  const handleDelete = (taskId: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    setAlertDetails({ type: "success", message: "Task deleted successfully!" });
    setOpenAlert(true);
  }

  // edit task handler
  const handleEdit = (taskId: number) => {
    const taskToEdit = tasks.find(task => task.id === taskId);
    if (taskToEdit) {
      setOpenFormOverlay(true);
      setEditDetails(taskToEdit);
    }
  }

  return (
    <TaskContext.Provider
      value={{
        openFormOverlay,
        setOpenFormOverlay,
        tasks,
        setTasks,
        handleDelete,
        handleEdit,
        editDetails,
        setEditDetails,
        openAlert,
        setOpenAlert,
        alertDetails,
        setAlertDetails,
        theme,
        setTheme
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
