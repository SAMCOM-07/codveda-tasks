// task filter type
export type FilterType = "all" | "completed" | "in_progress" | "todo" | "overdue" | "low" | "medium" | "high";


// task type definition
export interface TaskType {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  priority: "low" | "medium" | "high";
  status: "todo" | "in_progress" | "completed";
  category: "work" | "education" | "personal" | "career";
}

// task context type
export type TaskContextType = {
  openFormOverlay: boolean;
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
  tasks: TaskType[];
  setOpenFormOverlay: React.Dispatch<React.SetStateAction<boolean>>;
  handleDelete: (taskId: number) => void;
  handleEdit: (taskId: number) => void;
  editDetails: TaskType | null;
  setEditDetails: React.Dispatch<React.SetStateAction<TaskType | null>>;
  openAlert: boolean;
  setOpenAlert: React.Dispatch<React.SetStateAction<boolean>>;
  alertDetails: { type: string; message: string };
  setAlertDetails: React.Dispatch<React.SetStateAction<{ type: string; message: string }>>;
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}