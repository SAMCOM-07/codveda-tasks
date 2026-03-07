import { EditIcon, Trash2 } from "lucide-react"
import { useTask } from "../hooks/useTask"
import { cn } from "../lib/utils"

const TasksTable = ({ filter, searchTerm }: { filter: string, searchTerm: string }) => {

  const { tasks, handleDelete, handleEdit } = useTask();

  let filteredTasks = tasks;
  if (filter !== "all") {
    if (filter === "overdue") {
      filteredTasks = tasks.filter(task => task.dueDate < new Date() && task.status !== 'completed');
    } else if (["low", "medium", "high"].includes(filter)) {
      filteredTasks = tasks.filter(task => task.priority === filter);
    } else {
      filteredTasks = tasks.filter(task => task.status === filter);
    }
  }

  if (searchTerm.trim() !== "") {
    filteredTasks = filteredTasks.filter(task =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }


  return (
    <div className="overflow-auto rounded-lg border border-border shadow-sm">
      <table className="w-full text-nowrap">
        <thead className="bg-accent border-b border-border">
          <tr className="text-left">
            {["Task", "Status", "Priority", "Category", "Due Date", "Action"].map((header, index) => (
              <th key={index} className="px-6 py-4 font-semibold text-foreground">
                {header}
              </th>
            ))}

          </tr>
        </thead>
        <tbody className="">
          {filteredTasks.length ? [...filteredTasks].reverse().map((task) => {
            const overdue = new Date(task.dueDate) < new Date() && task.status !== 'completed'
            return (
              <tr key={task.id} className="border-b border-border hover:bg-accent/30 transition-colors">
                <td className="px-6 py-4 max-w-xs min-w-xs  w-full">
                  <span>{task.title}</span>
                  <span className="block text-muted-foreground overflow-x-scroll mt-2">{task.description}</span>
                </td>
                <td className="px-6 py-4"><span className={cn('capitalize text-sm', 'px-3 py-1 rounded-full', task.status === 'completed' ? "text-green bg-green/20" : task.status === 'in_progress' ? "text-orange bg-orange/20" : "text-primary bg-primary/20")}>{task.status === 'in_progress' ? 'In Progress' : task.status}</span></td>
                <td className="px-6 py-4"><span className={cn('capitalize text-sm', 'px-3 py-1 rounded-full', task.priority === 'high' ? "text-red-600 bg-red-400/20" : task.priority === 'medium' ? "text-orange bg-orange/20" : "text-green bg-green/20")}>{task.priority}</span></td>
                <td className="px-6 py-4"><span className="capitalize">{task.category}</span></td>
                <td className={cn("px-6 py-4", overdue && "text-destructive")}>{new Date(task.dueDate).toLocaleDateString("en-GB", {
                  day: "2-digit", month: "short", year: "numeric",
                })} {overdue && <span className="animate-pulse ml-2 text-xs font-bold">OVERDUE</span>}</td>
                <td className="px-6 py-4 mt-4 flex items-center gap-4 text-foreground hover:text-foreground/70 cursor-pointer">
                  <button onClick={() => handleEdit(task.id)} className="hover-scale text-primary"><EditIcon size={20} /></button>
                  <button onClick={() => handleDelete(task.id)} className="hover-scale text-destructive"><Trash2 size={20} /></button>
                </td>
              </tr>
            )
          }) : <tr>
            <td colSpan={6} className="text-center py-12 text-muted-foreground">No tasks found.</td>
          </tr>}
        </tbody>
      </table>
    </div>
  )
}

export default TasksTable
