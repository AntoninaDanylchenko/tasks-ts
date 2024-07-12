import React, { FC, ReactElement } from 'react';

import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Dayjs } from 'dayjs';

import { IDateField } from './interfaces/IDateField';

import PropTypes from 'prop-types';

export const TaskDate: FC<IDateField> = (props): ReactElement => {
  const { disabled = false, value = null, onChange } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DesktopDatePicker']}>
        <DemoItem>
          <DesktopDatePicker
            label={'Task Date'}
            value={value}
            onChange={onChange}
            disabled={disabled}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
};

TaskDate.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.instanceOf(Dayjs),
  disabled: PropTypes.bool,
};
