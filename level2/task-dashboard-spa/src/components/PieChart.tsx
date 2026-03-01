import { PieChart, Pie, ResponsiveContainer } from "recharts";
import { useTask } from "../hooks/useTask";


export default function TaskPieChart() {
  const { tasks } = useTask()

  const data = [
    { name: "In Progress", value: tasks.filter(task => task.status === 'in_progress').length, fill: "#f59e0b" },
    { name: "Todo", value: tasks.filter(task => task.status === 'todo').length, fill: "#3b82f6" },
    { name: "Completed", value: tasks.filter(task => task.status === 'completed').length, fill: "#22c55e" },
  ];
  return (
    <div className="w-full h-100 outline-0">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
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
    </div>
  );
}