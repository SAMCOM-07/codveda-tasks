import { useState, useEffect } from "react";
import { useTask } from "../hooks/useTask";
import {
  Moon,
  Sun,
  Bell,
  FileDown,
  Trash2,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { jsPDF } from "jspdf";

export default function SettingsPage() {
  const { tasks, setAlertDetails, setOpenAlert, theme, setTheme } = useTask();
  const [notifications, setNotifications] = useState(() => {
    return JSON.parse(localStorage.getItem("notifications") || '{"overdue": true, "dueSoon": true, "completed": true}');
  });
  const [defaultPriority, setDefaultPriority] = useState(() => {
    return localStorage.getItem("defaultPriority") || "medium";
  });
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  // Save notification preferences
  useEffect(() => {
    localStorage.setItem("notifications", JSON.stringify(notifications));
  }, [notifications]);

  // Save default priority
  useEffect(() => {
    localStorage.setItem("defaultPriority", defaultPriority);
  }, [defaultPriority]);

  // Handle export tasks to PDF
  const handleExportTasks = () => {
    if (tasks.length === 0) {
      setAlertDetails({ type: "error", message: "No tasks to export!" });
      setOpenAlert(true);
      return;
    }

    const doc = new jsPDF();
    
    // Title
    doc.setFontSize(20);
    doc.text("Task Dashboard Export", 20, 20);
    
    // Export date
    doc.setFontSize(10);
    doc.setTextColor(128, 128, 128);
    doc.text(`Exported on: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`, 20, 30);
    
    // Reset text color
    doc.setTextColor(0, 0, 0);
    
    // Summary
    const completedCount = tasks.filter((t) => t.status === "completed").length;
    const inProgressCount = tasks.filter((t) => t.status === "in_progress").length;
    const todoCount = tasks.filter((t) => t.status === "todo").length;
    
    doc.setFontSize(12);
    doc.text("Summary", 20, 45);
    doc.setFontSize(10);
    doc.text(`Total Tasks: ${tasks.length}`, 25, 52);
    doc.text(`Completed: ${completedCount}`, 25, 58);
    doc.text(`In Progress: ${inProgressCount}`, 25, 64);
    doc.text(`To Do: ${todoCount}`, 25, 70);
    
    // Task list
    let yPosition = 85;
    doc.setFontSize(12);
    doc.text("Tasks", 20, yPosition);
    
    tasks.forEach((task, index) => {
      yPosition += 10;
      
      // Check if we need a new page
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 20;
      }
      
      // Task number and title
      doc.setFontSize(10);
      doc.setFont("bold");
      doc.text(`${index + 1}. ${task.title}`, 25, yPosition);
      
      yPosition += 6;
      
      // Task details
      doc.setFont("normal");
      doc.setFontSize(9);
      doc.setTextColor(80, 80, 80);
      
      doc.text(`Description: ${task.description}`, 30, yPosition);
      yPosition += 5;
      
      doc.text(
        `Due: ${new Date(task.dueDate).toLocaleDateString()} | Priority: ${task.priority.toUpperCase()} | Status: ${task.status.replace("_", " ").toUpperCase()}`,
        30,
        yPosition
      );
      yPosition += 5;
      
      doc.text(`Category: ${task.category.toUpperCase()}`, 30, yPosition);
      
      doc.setTextColor(0, 0, 0);
    });
    
    // Footer
    yPosition += 15;
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text("© Task Dashboard - All tasks saved locally", 20, yPosition + 10);
    
    // Save PDF
    doc.save(`tasks-backup-${new Date().toISOString().split("T")[0]}.pdf`);

    setAlertDetails({
      type: "success",
      message: `Exported ${tasks.length} task(s) to PDF!`,
    });
    setOpenAlert(true);
  };

  // Handle clear all tasks
  const handleClearAllTasks = () => {
    localStorage.removeItem("tasks");
    window.location.reload();
    setAlertDetails({
      type: "success",
      message: "All tasks cleared successfully!",
    });
    setOpenAlert(true);
  };

  const toggleNotification = (key: string) => {
    setNotifications({
      ...notifications,
      [key]: !notifications[key],
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">
          Customize your task dashboard preferences
        </p>
      </div>

      {/* Theme Settings */}
      <div className="bg-card/50 border border-border rounded-lg p-6 space-y-4">
        <div className="flex items-center gap-2">
          {theme === "light" ? (
            <Sun size={24} className="text-yellow-500" />
          ) : (
            <Moon size={24} className="text-blue-400" />
          )}
          <h2 className="text-xl font-semibold text-foreground">
            Appearance
          </h2>
        </div>

        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">Theme Preference</p>
          <div className="flex gap-3">
            <button
              onClick={() => setTheme("light")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                theme === "light"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background border-border hover:border-primary/50"
              }`}
            >
              <Sun size={18} />
              Light
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                theme === "dark"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background border-border hover:border-primary/50"
              }`}
            >
              <Moon size={18} />
              Dark
            </button>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-card/50 border border-border rounded-lg p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Bell size={24} className="text-blue-500" />
          <h2 className="text-xl font-semibold text-foreground">
            Notifications
          </h2>
        </div>

        <div className="space-y-3">
          {[
            {
              key: "overdue",
              label: "Overdue Alerts",
              desc: "Get notified about overdue tasks",
            },
            {
              key: "dueSoon",
              label: "Due Soon Reminders",
              desc: "Remind me when tasks are due in 24 hours",
            },
            {
              key: "completed",
              label: "Completion Notifications",
              desc: "Celebrate when you complete tasks",
            },
          ].map((notif) => (
            <label
              key={notif.key}
              className="flex items-center gap-3 p-3 bg-background rounded-lg cursor-pointer hover:bg-muted transition-colors"
            >
              <input
                type="checkbox"
                checked={notifications[notif.key]}
                onChange={() => toggleNotification(notif.key)}
                className="w-4 h-4 cursor-pointer"
              />
              <div>
                <p className="font-medium text-foreground">{notif.label}</p>
                <p className="text-sm text-muted-foreground">{notif.desc}</p>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Task Preferences */}
      <div className="bg-card/50 border border-border rounded-lg p-6 space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          Task Preferences
        </h2>

        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">Default Priority Level</p>
          <select
            value={defaultPriority}
            onChange={(e) => setDefaultPriority(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <p className="text-xs text-muted-foreground">
            New tasks will be created with this priority level by default
          </p>
        </div>
      </div>

      {/* Data Management */}
      <div className="bg-card/50 border border-border rounded-lg p-6 space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          Data Management
        </h2>

        <div className="space-y-3">
          <button
            onClick={handleExportTasks}
            className="w-full flex items-center gap-3 px-4 py-3 bg-green/10 hover:bg-green/20 text-green border border-green/20 rounded-lg transition-colors font-medium"
          >
            <FileDown size={20} />
            Export All Tasks as PDF
          </button>

          {!showClearConfirm ? (
            <button
              onClick={() => setShowClearConfirm(true)}
              className="w-full flex items-center gap-3 px-4 py-3 bg-destructive/10 hover:bg-destructive/20 text-destructive border border-destructive/20 rounded-lg transition-colors font-medium"
            >
              <Trash2 size={20} />
              Clear All Tasks
            </button>
          ) : (
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 space-y-3">
              <div className="flex items-start gap-3">
                <AlertCircle
                  size={20}
                  className="text-destructive shrink-0 mt-0.5"
                />
                <div>
                  <p className="font-semibold text-destructive">
                    Are you sure?
                  </p>
                  <p className="text-sm text-destructive/80">
                    This will permanently delete all {tasks.length} task(s). This
                    action cannot be undone.
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleClearAllTasks}
                  className="flex-1 px-4 py-2 bg-destructive hover:bg-destructive/90 text-primary-foreground rounded-lg font-medium transition-colors"
                >
                  Yes, Delete All
                </button>
                <button
                  onClick={() => setShowClearConfirm(false)}
                  className="flex-1 px-4 py-2 bg-background border border-border hover:bg-muted text-foreground rounded-lg font-medium transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-card/50 border border-border rounded-lg p-6 space-y-4">
        <h2 className="text-xl font-semibold text-foreground">About</h2>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">App Name</span>
            <span className="font-semibold text-foreground">Task Dashboard</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Version</span>
            <span className="font-semibold text-foreground">1.0.0</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Total Tasks</span>
            <span className="font-semibold text-foreground">{tasks.length}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Completed Tasks</span>
            <span className="font-semibold text-green flex items-center gap-1">
              <CheckCircle2 size={16} />
              {tasks.filter((t) => t.status === "completed").length}
            </span>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="bg-accent-foreground/10 border border-accent/20 rounded-lg p-4 text-sm text-blue-300 mb-14">
        <p>
          💡 All your settings and tasks are saved locally in your browser. Your
          data never leaves your device.
        </p>
      </div>
    </div>
  );
}