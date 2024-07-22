import React, { FC, ReactElement } from 'react';

import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import { IDateField } from './interfaces/IDateField';

import PropTypes from 'prop-types';
import dayjs from 'dayjs';

export const TaskDate: FC<IDateField> = (props): ReactElement => {
  const { disabled = false, value = null, onChange } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DesktopDatePicker']}>
        <DemoItem>
          <DesktopDatePicker
            label={'Task Date'}
            value={dayjs(value)}
            onChange={onChange}
            disabled={disabled}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
};

TaskDate.propTypes = {
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
