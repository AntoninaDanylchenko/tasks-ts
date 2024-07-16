import { Dayjs } from 'dayjs';
import { TaskCounterStatusType } from '../../taskCounter/interfaces/ITaskCounter';
import React from 'react';

export interface ITaskHeader {
  title?: string;
  date?: Date | Dayjs;
}

export interface ITaskDescription {
  description?: string;
}

export interface ITaskFooter {
  onStatusChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>
  ) => void;
}

export interface ITask extends ITaskHeader, ITaskDescription, ITaskFooter {
  id?: string;
  priority?: string;
  status?: TaskCounterStatusType;
}
