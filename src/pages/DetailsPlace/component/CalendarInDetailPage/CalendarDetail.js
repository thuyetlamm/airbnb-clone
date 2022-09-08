import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';

import './CalendarDetail.scss';
import 'moment/locale/vi';
import locale from 'antd/es/date-picker/locale/vi_VN';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Separate from './Separate';
CalendarDetail.propTypes = {
  handleDateChange: PropTypes.func,
};

function CalendarDetail({
  openCalendar = false,
  handleDateChange,
  handleOpenCalendar,
  handleCloseCalendar,
}) {
  const { RangePicker } = DatePicker;
  return (
    <RangePicker
      open={openCalendar}
      suffixIcon={''}
      locale={locale}
      placement="bottomLeft"
      placeholder={['Nhận phòng', 'Trả phòng']}
      format="DD/MM/YYYY"
      separator={<Separate />}
      onChange={handleDateChange}
      onFocus={handleOpenCalendar}
      onBlur={handleCloseCalendar}
    />
  );
}

export default React.memo(CalendarDetail);
