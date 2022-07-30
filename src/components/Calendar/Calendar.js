import React from 'react';
import { DatePicker } from 'antd';

import styles from './Calendar.module.scss';
import 'moment/locale/vi';
import locale from 'antd/es/date-picker/locale/vi_VN';
function CalendarComp({ isShowCalendar, handleChangeCalendar }) {
  const { RangePicker } = DatePicker;
  return (
    <RangePicker
      open={isShowCalendar}
      className={styles.calendar}
      suffixIcon={''}
      onCalendarChange={handleChangeCalendar}
      locale={locale}
    />
  );
}

export default CalendarComp;
