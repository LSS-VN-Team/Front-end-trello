import React, { useEffect } from "react";
import TaskCardPage from "pages/taskCardPage/topTaskCard";
import BTRTaskCardPageProps from "pages/taskCardPage/btRTaskCard";
import BTLTaskCardPageProps from "pages/taskCardPage/btLTaskCard";
import ProjectBoard from "pages/board";

export interface TaskCardComponentProps {}

export default function TaskCardComponent(props: TaskCardComponentProps) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const taskCardDiv = document.getElementById("taskCardDiv");
      if (taskCardDiv && !taskCardDiv.contains(event.target as Node)) {
        window.location.href = "/board";
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-30 block">
      <div className="fixed inset-0">
        <ProjectBoard />
      </div>
      <div className="h-12 w-full"></div>
      <div
        id="taskCardDiv"
        className="h-taskCardH w-taskCardW m-auto"
      >
        <div className="relative z-10 overflow-y-auto rounded shadow-2xl h-full w-full bg-white">
          <div className="h-1/6 w-full bg-amber-300">
            <TaskCardPage />
          </div>
          <div className="flex h-5/6 w-full">
            <BTLTaskCardPageProps />
            <BTRTaskCardPageProps />
          </div>
        </div>
      </div>
      <div className="h-12 w-full"></div>
    </div>
  );
}
