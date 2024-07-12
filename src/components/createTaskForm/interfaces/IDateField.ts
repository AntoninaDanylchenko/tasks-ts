import { Dayjs } from 'dayjs';
import { IDisabled } from './IDisabled';

export interface IDateField extends IDisabled {
  value?: Dayjs | null;
  onChange?: (date: Dayjs | null) => void;
}
