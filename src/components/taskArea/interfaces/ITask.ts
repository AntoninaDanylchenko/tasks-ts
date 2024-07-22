import { Status } from './../../createTaskForm/enums/Status';
import { Priority } from './../../createTaskForm/enums/Priority';
import { ICreateTask } from './ICreateTask';

export interface ITask extends ICreateTask {
  id: string;
  priority: `${Priority}`;
  status: `${Status}`;
}
