import React, { FC, ReactElement } from 'react';
import { ITaskFooter } from './interfaces/ITask';
import { Box, Button, FormControlLabel, Switch } from '@mui/material';
import PropTypes from 'prop-types';

export const TaskFooter: FC<ITaskFooter> = (props): ReactElement => {
  const {
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <FormControlLabel
        label="To Do"
        control={<Switch onChange={(e) => onStatusChange(e)} color="warning" />}
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: '#ffffff' }}
        onClick={(e) => onClick(e)}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

TaskFooter.propTypes = {
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
};
