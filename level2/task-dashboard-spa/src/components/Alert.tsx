import { useEffect } from "react";
import { useTask } from "../hooks/useTask";
import { cn } from "../lib/utils";


const Alert = ({ details }: { details: { type: string; message: string } | null }) => {

  const { openAlert, setOpenAlert } = useTask();

  useEffect(() => {
    if (openAlert) {
      const timer = setTimeout(() => {
        setOpenAlert(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [openAlert, setOpenAlert]);

  return (
    <div>
      <div className={cn("z-50 fixed left-1/2 transform -translate-x-1/2  px-4 py-2 rounded shadow text-white", details?.type === "success" ? "bg-green" : "bg-destructive", openAlert ? "top-10" : "-top-10", "transition-all duration-300")}>
        {details?.message}
      </div>
    </div>
  )
}

export default Alert
