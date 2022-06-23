import moment from 'moment';
import 'moment/locale/pt-br';

export const hasntSameDay = (compareFrom: string, compareTo: string) => {
  return !moment(compareFrom).isSame(compareTo, 'day')
}