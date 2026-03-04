import { PieChart, Pie, ResponsiveContainer } from "recharts";
import { useTask } from "../hooks/useTask";


export default function TaskPieChart() {
  const { tasks } = useTask()

  const data = [
    { name: "In Progress", value: tasks.filter(task => task.status === 'in_progress').length || 0, fill: "#f59e0b" },
    { name: "Todo", value: tasks.filter(task => task.status === 'todo').length || 0, fill: "#3b82f6" },
    { name: "Completed", value: tasks.filter(task => task.status === 'completed').length || 0, fill: "#22c55e" },
  ];

  return (
    <div className="w-full h-100 outline-none">
      {tasks.length === 0 ? (
        <div className="flex items-center justify-center h-full text-gray-500">
          No tasks to display
        </div>
      ) : (
        <ResponsiveContainer width="100%" height="100%" >
          <PieChart>
            <Pie className="outline-none"
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={85}
              outerRadius={150}
              paddingAngle={3}
              stroke="none"
              label={({ percent }) => `${(percent! * 100).toFixed(0)}%`}
            >
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}