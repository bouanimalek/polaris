"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

const page = () => {
  const tasks = useQuery(api.tasks.get);
  return (
    <div className="flex flex-col gap-2">
      {tasks?.map((task) => (
        <div className="border rounded-xl p-2 flex flex-col" key={task._id}>
          <p>{task.text}</p>
          <p>Is completed: {`${task.isCompleted}`}</p>
        </div>
      ))}
    </div>
  );
};
export default page;
