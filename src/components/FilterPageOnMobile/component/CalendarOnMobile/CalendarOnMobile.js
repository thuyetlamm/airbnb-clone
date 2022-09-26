import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';
import './CalendarOnMobile.scss';
import 'moment/locale/vi';
import locale from 'antd/es/date-picker/locale/vi_VN';

function CalendarOnMobile({
  placement,
  separator,
  openCalendar = false,
  handleDateChange,
  handleOpenCalendar,
  handleCloseCalendar,
}) {
  const { RangePicker } = DatePicker;
  useEffect(() => {
    let calendar = document.getElementById('calendar-mobile');
    let container = document.querySelector(
      '#calendar-mobile .ant-picker-panel-container'
    );
    const width = calendar.offsetWidth + 32;
    if (container) {
      container.style.setProperty('width', `${width}px`, 'important');
    }
  });
  return (
    <div id="calendar-mobile">
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
        getPopupContainer={() => document.getElementById('calendar-mobile')}
      />
    </div>
  );
}

export default React.memo(CalendarOnMobile);
