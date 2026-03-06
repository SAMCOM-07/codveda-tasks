import { PieChart, Pie, ResponsiveContainer } from "recharts";
import useRepos from "../hooks/useRepos";

export default function RepoPieChart() {

  const { repos, loadingRepos } = useRepos()

  const data = [
    { name: "HTML", value: repos.length && repos?.filter(repo => repo.language === 'HTML').length || 0, fill: "#ff8c00" },
    { name: "CSS", value: repos.length && repos?.filter(repo => repo.language === 'CSS').length || 0, fill: "#563d7c" },
    { name: "JavaScript", value: repos.length && repos?.filter(repo => repo.language === 'JavaScript').length || 0, fill: "#fbbf24" },
    { name: "TypeScript", value: repos.length && repos?.filter(repo => repo.language === 'TypeScript').length || 0, fill: "#3178c6" },
    { name: "Python", value: repos.length && repos?.filter(repo => repo.language === 'Python').length || 0, fill: "#3b82f6" },
    { name: "Java", value: repos.length && repos?.filter(repo => repo.language === 'Java').length || 0, fill: "#007396" },
    { name: "C++", value: repos.length && repos?.filter(repo => repo.language === 'C++').length || 0, fill: "#00599c" },
    { name: "Other", value: repos.length && repos?.filter(repo => repo.language !== 'HTML' && repo.language !== 'CSS' && repo.language !== 'JavaScript' && repo.language !== 'TypeScript' && repo.language !== 'Python' && repo.language !== 'Java' && repo.language !== 'C++').length || 0, fill: "#9ca3af" },
  ];

  return (
    <div className="w-full h-50 outline-none">
      {loadingRepos ? (
        <div className="flex items-center justify-center h-full">
          <div className="w-8 h-8 border-l-2 border-r-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : !repos.length ? (
        <div className="flex items-center justify-center text-sm h-full text-gray-500">
          No repos to display
        </div>
      ) : (
        <ResponsiveContainer width="100%" height="100%" className={'aspect-auto min-w-full min-h-full'}>
          <PieChart>
            <Pie className="outline-none"
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={25}
              outerRadius={55}
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