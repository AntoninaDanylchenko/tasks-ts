// import { Dayjs } from 'dayjs';
import { Dayjs } from 'dayjs';
import { IDisabled } from './IDisabled';

export interface IDateField extends IDisabled {
  value?: Date | null;
  onChange?: (date: Dayjs | null) => void;
}
