import React, { FC, ReactElement } from 'react';
import { ITaskFooter } from './interfaces/ITask';
import { Box, Button, FormControlLabel, Switch } from '@mui/material';
import PropTypes from 'prop-types';
import { Status } from '../createTaskForm/enums/Status';
import { changedStatusEnum } from '../createTaskForm/helpers/changedStatusEnum';

export const TaskFooter: FC<ITaskFooter> = (props): ReactElement => {
  const {
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
    status = Status.todo,
    id,
  } = props;

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <FormControlLabel
        label={changedStatusEnum(status)}
        control={
          <Switch
            defaultChecked={status === Status.inProgress}
            onChange={(e) => onStatusChange(e, id)}
            color="warning"
          />
        }
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: '#ffffff' }}
        onClick={(e) => onClick(e, id)}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

TaskFooter.propTypes = {
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
  status: PropTypes.string,
  // id: PropTypes.string.isRequired,
};
