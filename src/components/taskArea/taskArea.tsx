import { Alert, Grid, LinearProgress } from '@mui/material';
import dayjs from 'dayjs';
import React, { FC, ReactElement } from 'react';
import { TaskCounter } from '../taskCounter/taskCounter';
import { Task } from '../tasks/task';
import { useMutation, useQuery } from '@tanstack/react-query';
import { sendApiRequest } from '../../helpers/sendApiRequest';
import { ITask } from './interfaces/ITask';
import { Status } from '../createTaskForm/enums/Status';
import { ITaskUpdate } from './interfaces/ITaskUpdate';

export const TaskArea: FC = (): ReactElement => {
  const { error, isLoading, data } = useQuery({
    queryKey: ['task'],
    queryFn: async () => {
      return await sendApiRequest<ITask[]>(
        'http://localhost:3200/tasks',
        'GET'
      );
    },
  });

  const updateTaskMutation = useMutation({
    mutationFn: (data: ITaskUpdate) => {
      return sendApiRequest('http://localhost:3200/tasks', 'PUT', data);
    },
  });

  function onStatusChangeHandler(
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) {
    updateTaskMutation.mutate({
      id,
      status: e.target.checked ? Status.inProgress : Status.todo,
    });
  }
  function markCompletedGandler(
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) {
    updateTaskMutation.mutate({
      id,
      status: Status.completed,
    });
  }

  return (
    <Grid item md={8} px={4}>
      <h3>{`Status Of Your Tasks As On  ${dayjs().format('dddd, D MMMM YYYY')}`}</h3>
      <Grid container display="flex" justifyContent="center">
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
        </Grid>
        <Grid item display="flex" flexDirection="column" xs={10} md={8}>
          {/* {data?.forEach(<Task id={} />)} */}
          {error && (
            <Alert severity="error">
              There was an error to fetching your tasks
            </Alert>
          )}

          {!error && Array.isArray(data) && data.length === 0 && (
            <Alert severity="warning">
              You do not have any tasks created yet.
            </Alert>
          )}
          {isLoading ? (
            <LinearProgress />
          ) : (
            Array.isArray(data) &&
            data.length > 0 &&
            data.map((d) => {
              return d.status === Status.todo ||
                d.status === Status.inProgress ? (
                <Task
                  key={d.id}
                  id={d.id}
                  title={d.title}
                  description={d.description}
                  date={new Date(d.date)}
                  priority={d.priority}
                  status={d.status}
                  onStatusChange={onStatusChangeHandler}
                  onClick={markCompletedGandler}
                />
              ) : (
                false
              );
            })
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
