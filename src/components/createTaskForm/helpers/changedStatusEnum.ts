import { Status } from '../../createTaskForm/enums/Status';

export const changedStatusEnum = (status: string): string => {
  switch (status) {
    case Status.todo:
      return 'To Do';
    case Status.inProgress:
      return 'In Progress';
    case Status.completed:
      return 'Completed';
    default:
      return ' To Do';
  }
};
