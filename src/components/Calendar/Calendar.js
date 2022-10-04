import React from 'react';
import PropTypes from 'prop-types';
import 'moment/locale/vi';
import locale from 'antd/es/date-picker/locale/vi_VN';

import { DatePicker } from 'antd';
import './Calendar.scss';

CalendarComp.propTypes = {
  isShowCalendar: PropTypes.bool.isRequired,
  handleOpenCalendar: PropTypes.func,
  handleOnBlurCalendar: PropTypes.func,
  handleDateChange: PropTypes.func,
  handleCalendarChange: PropTypes.func,
};

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
