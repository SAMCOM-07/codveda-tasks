import { X } from "lucide-react"
import { useTask } from "../hooks/useTask";
import { useEffect, useRef, useState } from "react";

const FormOverlay = () => {
  const { setOpenFormOverlay, setTasks, editDetails, setEditDetails, setOpenAlert, setAlertDetails } = useTask();
  const overlayRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenFormOverlay(false);
        setEditDetails(null);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
        setEditDetails(null);
        setOpenFormOverlay(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpenFormOverlay, overlayRef, setEditDetails]);


  // handle submit function for both creating and updating tasks
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Validation logic
    const newErrors: { [key: string]: string } = {};
    if (!data.title || (data.title as string).trim() === "") newErrors.title = "Task title is required.";
    if (!data.description || (data.description as string).trim() === "") newErrors.description = "Task description is required.";
    if (!data.priority) newErrors.priority = "Priority is required.";
    if (!data.status) newErrors.status = "Status is required.";
    if (!data.category) newErrors.category = "Category is required.";
    if (!data.dueDate) {
      newErrors.dueDate = "Due date is required.";
    } 
    // else if (new Date(data.dueDate as string) < new Date()) {
    //   newErrors.dueDate = "Due date must be in the future.";
    // }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    } else {
      setErrors({});
    }

    const newTask = {
      id: Date.now() as number,
      title: data.title as string,
      description: data.description as string,
      priority: data.priority as "low" | "medium" | "high",
      status: data.status as "todo" | "in_progress" | "completed",
      category: data.category as "work" | "education" | "personal" | "career",
      dueDate: new Date(data.dueDate as string),
    };

    if (editDetails) {
      setTasks(prevTasks => prevTasks.map(task => task.id === editDetails.id ? newTask : task));
      setAlertDetails({ type: "success", message: "Task updated successfully!" });
      setOpenAlert(true);
    } else {
      setTasks(prevTasks => [...prevTasks, newTask]);
      setAlertDetails({ type: "success", message: "Task created successfully!" });
      setOpenAlert(true);
    }

    setOpenFormOverlay(false);
    setEditDetails(null);
  };

  return (
    <div className={"w-dvw h-dvh py-12 bg-black/50 backdrop-blur-sm flex items-center justify-center px-6"}>
      <div ref={overlayRef} className="bg-background border border-border rounded-2xl shadow-lg w-full max-w-xl h-full max-h-fit overflow-auto relative">
        <div className="p-6 flex justify-between items-center text-lg font-medium sticky top-0 border-b border-border bg-background">
          <h2 className="font-semibold text-2xl">Create New Task</h2>
          <button
            onClick={() => {
              setOpenFormOverlay(false);
              setEditDetails(null);
            }}
            className="hover-scale hover:bg-muted-foreground/30 rounded-full p-1.5 text-muted-foreground">
            <span className="sr-only">Close</span>
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 w-full">
          <div className="flex flex-col gap-4">
            {/* Task title */}
            <label className="form-overlay-label">
              Task Title
              <input
                type="text"
                className={'form-overlay-input'}
                placeholder="Enter task name"
                name="title"
                defaultValue={editDetails?.title || ""}
                maxLength={30}
              />
              {errors.title && <span className="text-destructive/70 text-sm">{errors.title}</span>}
            </label>

            {/* Task description */}
            <label className="form-overlay-label">
              Description
              <textarea
                className={`form-overlay-input h-38 resize-none-input`}
                placeholder="Enter task description"
                name="description"
                defaultValue={editDetails?.description || ""}
                maxLength={100}
              />
              {errors.description && <span className="text-destructive/70 text-sm">{errors.description}</span>}
            </label>

            {/* Priority and status */}
            <div className="flex gap-4 justify-between">
              <label className="form-overlay-label w-full">
                Priority
                <select defaultValue={editDetails?.priority || ""} name="priority" className="form-overlay-input">
                  <option value="">Select Priority</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
                {errors.priority && <span className="block text-destructive/70 text-sm">{errors.priority}</span>}
              </label>

              <label className="form-overlay-label w-full">
                Status
                <select defaultValue={editDetails?.status || ""} name="status" className="form-overlay-input">
                  <option value="">Select Status</option>
                  <option value="todo">To Do</option>
                  <option value="in_progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
                {errors.status && <span className="block text-destructive/70 text-sm">{errors.status}</span>}
              </label>
            </div>

            {/* Category and due date */}
            <div className="flex gap-4 justify-between">
              <label className="form-overlay-label w-full">
                Category
                <select defaultValue={editDetails?.category || ""} name="category" className="form-overlay-input">
                  <option value="">Select Category</option>
                  <option value="work">Work</option>
                  <option value="education">Education</option>
                  <option value="personal">Personal</option>
                  <option value="career">Career</option>
                </select>
                {errors.category && <span className="block text-destructive/70 text-sm">{errors.category}</span>}
              </label>

              <label className="form-overlay-label w-full">
                Due Date
                <input
                  type="date"
                  defaultValue={editDetails?.dueDate ? new Date(editDetails.dueDate).toISOString().split('T')[0] : undefined}
                  name="dueDate"
                  className="form-overlay-input"
                />
                {errors.dueDate && <span className="text-destructive/70 text-sm">{errors.dueDate}</span>}
              </label>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex justify-end w-full text-sm text-white gap-4 py-4 sticky bottom-0 bg-background">
            <button
              type="button"
              onClick={() => {
                setOpenFormOverlay(false);
                setEditDetails(null);
              }}
              className="px-4 py-2 bg-destructive/75 rounded-lg hover:bg-destructive transition-all duration-300 active:scale-95"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary/75 rounded-lg hover:bg-primary transition-all duration-300 active:scale-95"
            >
              {editDetails ? "Update Task" : "Create Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormOverlay;
