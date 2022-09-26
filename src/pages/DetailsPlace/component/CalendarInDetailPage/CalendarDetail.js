import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';
import './CalendarDetail.scss';
import 'moment/locale/vi';
import locale from 'antd/es/date-picker/locale/vi_VN';

import Separate from './Separate';
CalendarDetail.propTypes = {
  handleDateChange: PropTypes.func,
};

function CalendarDetail({
  placement,
  separator,
  openCalendar = false,
  handleDateChange,
  handleOpenCalendar,
  handleCloseCalendar,
}) {
  const { RangePicker } = DatePicker;
  return (
    <div id="calendar-booking">
      <RangePicker
        open={openCalendar}
        suffixIcon={''}
        locale={locale}
        placement={placement}
        placeholder={['Nhận phòng', 'Trả phòng']}
        format="DD/MM/YYYY"
        separator={separator}
        onChange={handleDateChange}
        onFocus={handleOpenCalendar}
        onBlur={handleCloseCalendar}
        getPopupContainer={() => document.getElementById('calendar-booking')}
      />
    </div>
  );
}

export default React.memo(CalendarDetail);
