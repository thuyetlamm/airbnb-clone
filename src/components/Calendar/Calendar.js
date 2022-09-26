import React from 'react';
import { DatePicker } from 'antd';

import './Calendar.scss';
import 'moment/locale/vi';
import locale from 'antd/es/date-picker/locale/vi_VN';
function CalendarComp({
  isShowCalendar,
  handleOpenCalendar,
  handleOnBlurCalendar,
  handleDateChange,
  handleCalendarChange,
}) {
  const { RangePicker } = DatePicker;
  return (
    <div id="calendar-header">
      <RangePicker
        open={isShowCalendar}
        popupClassName="calendarHeader"
        suffixIcon={''}
        onFocus={handleOpenCalendar}
        onBlur={handleOnBlurCalendar}
        onChange={handleDateChange}
        onCalendarChange={handleCalendarChange}
        locale={locale}
        placeholder={['Thêm ngày', 'Thêm ngày']}
        separator=""
        placement="bottomLeft"
        format="DD/MM/YYYY"
        allowClear
        getPopupContainer={() => document.body}
      />
    </div>
  );
}

export default CalendarComp;
