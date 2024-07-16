import { Box, Grid } from '@mui/material';
import dayjs from 'dayjs';
import React, { FC, ReactElement } from 'react';
import { TaskCounter } from '../taskCounter/taskCounter';
import { Task } from '../tasks/task';

export const TaskArea: FC = (): ReactElement => {
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
          <Task />
          <Box>Tasks Will Come Over Here</Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
