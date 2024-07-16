import React, { FC, ReactElement } from 'react';
import { ITaskHeader } from './interfaces/ITask';
import { Box, Chip, Typography } from '@mui/material';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';

export const TaskHeader: FC<ITaskHeader> = (props): ReactElement => {
  const { title = 'Task title', date = dayjs() } = props;
  return (
    <Box display="flex" width="100%" justifyContent="space-between" mb={4}>
      <Box>
        <Typography>{title}</Typography>
      </Box>
      <Box>
        <Chip
          variant="outlined"
          label={`${dayjs(date).format('DD MMMM YYYY')}`}
        />
      </Box>
    </Box>
  );
};

TaskHeader.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
};
