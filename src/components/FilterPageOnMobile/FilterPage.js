import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AppBar from '@material-ui/core/AppBar';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { toggleShowFilterPage } from '~/common/globalSlice';
import CalendarOnMobile from './component/CalendarOnMobile/CalendarOnMobile';
import CounterOnMobile from './component/CounterOnMobile/CounterOnMobile';
import SearchPlaceOnMobile from './component/SearchPlaceOnMoblie/SearchPlaceOnMobile';
import './FilterPage.scss';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    height: '100%!important',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  iconButton: {
    backgroundColor: '#fefefe',
    color: '#000',
  },
  root: {
    width: '100%',
    marginTop: '24px',
    marginBottom: '80px',
  },
  item: {
    margin: '10px 0',
  },
  heading: {
    fontSize: theme.typography.pxToRem(30),
    flexShrink: 0,
    fontWeight: '600',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(20),
    color: theme.palette.text.secondary,
  },
  iconSearch: {
    fontSize: '20px',
  },
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
FilterPage.propTypes = {
  handleClickBtnSearch: PropTypes.func,
};

function FilterPage({ handleClickBtnSearch }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const isShowFilterPage = useSelector(
    (state) => state.globalState.isShowFilterPage
  );
  const [expanded, setExpanded] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setShowCalendar(isExpanded);

    setExpanded(isExpanded ? panel : false);
  };
  const handleClose = () => {
    dispatch(toggleShowFilterPage(false));
  };
  console.log('render');
  return (
    <div>
      <Dialog
        fullScreen
        open={isShowFilterPage}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              className={classes.iconButton}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
          <div className={classes.root}>
            <Accordion
              expanded={expanded === 'panel1'}
              className={classes.item}
              onChange={handleChange('panel1')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className={classes.heading}>
                  Bạn sẽ đi đâu?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <SearchPlaceOnMobile />
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'panel2'}
              className={classes.item}
              onChange={handleChange('panel2')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className={classes.heading}>Thời gian</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <CalendarOnMobile
                  openCalendar={showCalendar}
                  placement="bottomLeft"
                />
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'panel3'}
              className={classes.item}
              onChange={handleChange('panel3')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className={classes.heading}>Khách</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <CounterOnMobile />
              </AccordionDetails>
            </Accordion>
          </div>
          <Toolbar>
            <button
              type="submit"
              aria-label="Tìm kiếm"
              className="btn-search-mobile btn-primary"
              onClick={handleClickBtnSearch}
            >
              <SearchIcon className={classes.iconSearch} />{' '}
              <span>Tìm kiếm</span>
            </button>
          </Toolbar>
        </AppBar>
      </Dialog>
    </div>
  );
}

export default FilterPage;
