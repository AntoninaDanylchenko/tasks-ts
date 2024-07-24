import { TaskCounterStatusType } from "../../taskCounter/interfaces/ITaskCounter";
import { ITask } from "../interfaces/ITask";

export const countTasks = (tasks: ITask[], status: TaskCounterStatusType): number => {
    if (!Array.isArray(tasks)) {
        return 0;
    }
    const totalTasks = tasks.filter((task) => {
       return task.status === status
    })

    return totalTasks.length;
}