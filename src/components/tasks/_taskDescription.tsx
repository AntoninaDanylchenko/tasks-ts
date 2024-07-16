import React, { FC, ReactElement } from 'react';
import { ITaskDescription } from './interfaces/ITask';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export const TaskDescription: FC<ITaskDescription> = (props): ReactElement => {
  const { description = 'Task description' } = props;
  return (
    <Box mb={4}>
      <Typography>{description}</Typography>
    </Box>
  );
};

TaskDescription.propTypes = {
  description: PropTypes.string,
};
