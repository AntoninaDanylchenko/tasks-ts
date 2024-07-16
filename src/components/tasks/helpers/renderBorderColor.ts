import { Priority } from '../../createTaskForm/enums/Priority';

export const renderBorderColor = (priority: string): string => {
  switch (priority) {
    case Priority.normal:
      return 'grey.900';
    case Priority.low:
      return 'info.light';
    case Priority.hight:
      return 'error.light';
    default:
      return 'grey.900';
  }
};
