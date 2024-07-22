import React, { FC, ReactElement, useEffect, useState } from 'react';

import {
  Alert,
  AlertTitle,
  Box,
  Button,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';

import { TaskTitleField } from './_taskTitleField';
import { TaskDescriptionField } from './_taskDescriptionField';
import { TaskDate } from './_taskDate';
import { TaskSelectField } from './_taskSelectField';
import { Status } from './enums/Status';
import { Priority } from './enums/Priority';
import { useMutation } from '@tanstack/react-query';
import { sendApiRequest } from '../../helpers/sendApiRequest';
import { ICreateTask } from '../taskArea/interfaces/ICreateTask';
import { Dayjs } from 'dayjs';
import { changedStatusEnum } from './helpers/changedStatusEnum';

export const CreateTaskForm: FC = (): ReactElement => {
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Date | null>(new Date());
  const [status, setStatus] = useState<string>(Status.todo);
  const [priority, setPriority] = useState<string>(Priority.normal);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const createTaskMutation = useMutation({
    mutationFn: (data: ICreateTask) => {
      return sendApiRequest('http://localhost:3200/tasks', 'POST', data);
    },
  });

  function createTaskHandle() {
    if (!title || !date || !description) {
      return;
    }
    const task: ICreateTask = {
      title,
      description,
      date: date.toString(),
      status,
      priority,
    };
    createTaskMutation.mutate(task);

    setTitle(undefined);
    setDescription(undefined);
    setDate(new Date());
    setStatus(Status.todo);
    setPriority(Priority.normal);
  }
  useEffect(() => {
    if (createTaskMutation.isSuccess) {
      setShowSuccess(true);
    }
    const successTimeout = setTimeout(() => {
      setShowSuccess(false);
    }, 5000);

    return () => {
      clearTimeout(successTimeout);
    };
  }, [createTaskMutation.isSuccess]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      {showSuccess && (
        <Alert severity="success" sx={{ width: '100%', marginBottom: '16px' }}>
          <AlertTitle>Success</AlertTitle>
          The task has been created successfully
        </Alert>
      )}
      <Typography mb={2} component="h2" variant="h6">
        Create a task
      </Typography>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <TaskTitleField
          onChange={(e) => setTitle(e.target.value)}
          disabled={createTaskMutation.isPending}
        />
        <TaskDescriptionField
          onChange={(e) => setDescription(e.target.value)}
          disabled={createTaskMutation.isPending}
        />
        <TaskDate
          value={date}
          onChange={(newDate: Dayjs | null) => {
            setDate(newDate ? newDate.toDate() : null);
          }}
          disabled={createTaskMutation.isPending}
        />
        <Stack sx={{ width: '100%' }} spacing={2} direction="row">
          <TaskSelectField
            label="Status"
            name="status"
            value={status}
            disabled={createTaskMutation.isPending}
            onChange={(e) => setStatus(e.target.value as string)}
            items={[
              { value: Status.todo, label: changedStatusEnum(Status.todo) },
              {
                value: Status.inProgress,
                label: changedStatusEnum(Status.inProgress),
              },
              {
                value: Status.completed,
                label: changedStatusEnum(Status.completed),
              },
            ]}
          />
          <TaskSelectField
            label="Priority"
            name="priority"
            value={priority}
            disabled={createTaskMutation.isPending}
            onChange={(e) => setPriority(e.target.value as string)}
            items={[
              { value: Priority.hight, label: 'Hight' },
              { value: Priority.normal, label: 'Normal' },
              { value: Priority.low, label: 'Low' },
            ]}
          />
        </Stack>
        {createTaskMutation.isPending && <LinearProgress />}
        <Button
          disabled={!title || !date || !description || !status || !priority}
          variant="contained"
          size="large"
          fullWidth
          onClick={createTaskHandle}
        >
          Create A Task
        </Button>
      </Stack>
    </Box>
  );
};
