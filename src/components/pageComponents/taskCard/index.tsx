import TaskCardPage from "pages/taskCardPage";
import * as React from "react";

export interface TaskCardComponentProps {}

export default function TaskCardComponent(props: TaskCardComponentProps) {
  return (
    <div> 
      <TaskCardPage/>
    </div>
  );
}

