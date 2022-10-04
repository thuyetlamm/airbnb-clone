import React, { useEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Header.module.scss';

import CalendarComp from '~/components/Calendar/Calendar';
import DefaultHeader from './components/DefaultHeader/DefaultHeader';
import DetailHeader from './components/DetailHeader/DetailHeader';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { Badge, IconButton } from '@material-ui/core';

import Login from '../features/Auth/component/Login/Login';
import { logOut } from '../features/Auth/userSlice';
import { ExitToAppOutlined, ShoppingCart } from '@material-ui/icons';
import StorageKeys from '~/constants/storage-keys';
import Register from '../features/Auth/component/Register/Register';
import {
  setActiveId,
  toggleShowCalendar,
  toggleShowFilterPage,
} from '~/common/globalSlice';

const cx = classNames.bind(styles);
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    left: '-4%!important',
    top: '8px!important',
  },
  paper: {
    width: '200px',
    height: '220px',
    backgroundColor: 'white',
    borderRadius: '16px',
    zIndex: '40',
    textAlign: 'center',
  },
  item: {
    fontSize: '14px',
    margin: '10px 0',
    fontWeight: 'bold',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  icon: {
    fontSize: '20px',
  },
}));

function Header({ handleClickBtnSearch }) {
  const dispatch = useDispatch();
  const [showDetailHeader, setShowDetailHeader] = useState({});
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [open, setOpen] = useState(false);
  const [openFilterPage, setOpenFilterPage] = useState(false);
  const [openModalRegister, setOpenModalRegister] = useState(false);
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id;
  // const placeListBooking = useSelector((state) => state.detailPlace.detailItem);
  const indexActive = useSelector((state) => state.globalState.activeId);
  const isShowCalendar = useSelector(
    (state) => state.globalState.isShowCalendar
  );
  const placeListBooking = JSON.parse(
    localStorage.getItem(StorageKeys.DETAIL_ITEM)
  );
  const anchorRef = useRef(null);
  const searchRef = useRef();
  const prevOpen = useRef(open);
  useEffect(() => {
    const timeIds = setTimeout(() => {
      window.onscroll = () => {
        setShowDetailHeader({
          ...showDetailHeader,
          isActive: false,
        });
      };
    }, 1000);
    return () => clearTimeout(timeIds);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showDetailHeader.isActive]);

  const hanldeShowDetailHeader = (values) => {
    setShowDetailHeader(values);
  };

  const handleClickOverlay = () => {
    setShowDetailHeader({
      isActive: false,
    });
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }
  const handleOpenModalRegister = () => {
    setOpenModalRegister(true);
  };
  const handleCloseModalRegister = () => {
    setOpenModalRegister(false);
  };
  const handleOpenModalLogin = () => {
    setOpenModalLogin(true);
  };
  const handleCloseModalLogin = () => {
    setOpenModalLogin(false);
  };
  const handleLogOutUser = (event) => {
    const action = logOut();
    dispatch(action);
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  const handleOpenCalendar = () => {
    dispatch(toggleShowCalendar(true));
  };
  const handleOnBlurCalendar = () => {
    dispatch(toggleShowCalendar(false));
  };
  const handleDateChange = (values) => {
    if (values.length === 2) {
      dispatch(toggleShowCalendar(false));
    }
  };
  const handleCalendarChange = (values) => {
    if (values[0] && !values[1]) {
      dispatch(setActiveId(4));
    }
  };
  const handleShowFilterPage = () => {
    setOpenFilterPage(true);
  };
  // return focus to the button when we transitioned from !open -> open
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);
  const classes = useStyles();
  const countBooking = useMemo(() => {
    if (placeListBooking?.length > 0) {
      return placeListBooking.filter((item) => item.userId === loggedInUser.id);
    }
  }, [placeListBooking?.length, loggedInUser.id]);
  return (
    <div className={cx('header')}>
      <div className={cx('container')}>
        <div
          className={cx('header-container')}
          ref={searchRef}
          style={
            !showDetailHeader.isActive
              ? {
                  height: '80px',
                  alignItems: 'center',
                }
              : {
                  height: '160px',
                  alignItems: 'flex-start',
                  paddingTop: '24px',
                }
          }
        >
          <Link to="/">
            <div className={cx('logo-header')}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111320.png"
                alt="logo"
                className={cx('logo-icon')}
              />
              <span className={cx('logo-title')}>airbnb</span>
            </div>
          </Link>
          <div
            className={cx({
              'header-default': !showDetailHeader.isActive,
              'header-detail': showDetailHeader.isActive,
            })}
          >
            {!showDetailHeader.isActive ? (
              <DefaultHeader hanldeShowDetailHeader={hanldeShowDetailHeader} />
            ) : (
              <>
                <DetailHeader
                  startDate={startDate}
                  endDate={endDate}
                  handleClickBtnSearch={handleClickBtnSearch}
                />
                <CalendarComp
                  isShowCalendar={
                    [2, 4].some((x) => x === indexActive) && isShowCalendar
                  }
                  handleOpenCalendar={handleOpenCalendar}
                  handleOnBlurCalendar={handleOnBlurCalendar}
                  handleDateChange={handleDateChange}
                  handleCalendarChange={handleCalendarChange}
                />
              </>
            )}
          </div>
          <div className={cx('header-options')}>
            <Link to="/home/hosts">
              <span className={cx('header-options-host')}>
                Trở thành chủ nhà
              </span>
            </Link>
            <div className={cx('header-options-switch')}>
              <ion-icon name="earth-outline"></ion-icon>
            </div>
            <button
              className={cx('header-options-login')}
              ref={anchorRef}
              aria-controls={open ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              <ion-icon name="reorder-three-outline"></ion-icon>
              <img
                src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                alt="avatar"
                className={cx('header-user-avatar')}
              />
              {isLoggedIn && <span className={cx('header-login-cirle')}></span>}
            </button>

            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
              className={classes.root}
            >
              {!isLoggedIn && (
                <Paper className={classes.paper}>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem
                        className={classes.item}
                        onClick={handleOpenModalLogin}
                      >
                        Đăng nhập
                      </MenuItem>
                      <MenuItem
                        onClick={handleOpenModalRegister}
                        className={classes.item}
                      >
                        Đăng ký
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              )}
              {isLoggedIn && (
                <Paper className={classes.paper}>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem className={classes.item} onClick={handleClose}>
                        My Bookings
                        <IconButton
                          aria-label="show 4 new mails"
                          color="inherit"
                        >
                          <Badge
                            badgeContent={countBooking?.length}
                            color="secondary"
                          >
                            <ShoppingCart className={classes.icon} />
                          </Badge>
                        </IconButton>
                      </MenuItem>
                      <MenuItem
                        className={classes.item}
                        onClick={handleLogOutUser}
                      >
                        Log Out
                        <ExitToAppOutlined className={classes.icon} />
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              )}
            </Popper>
            <Dialog
              open={openModalRegister}
              onClose={handleCloseModalRegister}
              aria-labelledby="form-dialog-title"
              disableEscapeKeyDown
            >
              <DialogContent>
                <Register onCloseDialog={handleCloseModalRegister} />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseModalRegister} color="primary">
                  Cancel
                </Button>
              </DialogActions>
            </Dialog>

            <Dialog
              open={openModalLogin}
              onClose={handleCloseModalLogin}
              aria-labelledby="form-dialog-title"
              disableEscapeKeyDown
            >
              <DialogContent>
                <Login onCloseDialog={handleCloseModalLogin} />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseModalLogin} color="primary">
                  Cancel
                </Button>
              </DialogActions>
            </Dialog>
          </div>

          <div
            className={cx('header-search-small')}
            style={{
              width: '100%',
              borderRadius: '32px',
            }}
            onClick={() => dispatch(toggleShowFilterPage(true))}
          >
            <button className={cx('header-search-small-button')}>
              <span className="header-icon-search">
                <ion-icon name="search"></ion-icon>
              </span>
              <div className="header-search-title">
                <span>Bạn sẽ đi đâu?</span>
                <span>Địa điểm bất kỳ . tuần bất kỳ . Thêm khách</span>
              </div>
              <span className="header-icon-options">
                <ion-icon name="options-outline"></ion-icon>
              </span>
            </button>
          </div>
        </div>
        <div
          className={cx({
            overlay: showDetailHeader.isActive,
          })}
          onClick={handleClickOverlay}
        ></div>
      </div>
    </div>
  );
}

export default Header;
