import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';

import { login } from '../../userSlice';
import LoginForm from '../LoginForm/LoginForm';

Login.propTypes = {
  onCloseDialog: PropTypes.func,
};
function Login({ onCloseDialog = null }) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitForm = async (values) => {
    try {
      const resultAction = await dispatch(login(values));
      unwrapResult(resultAction);

      if (onCloseDialog) {
        onCloseDialog();
      }
    } catch (error) {
      enqueueSnackbar(error?.message, { variant: 'error' });
    }
  };
  return (
    <div>
      <LoginForm onSubmit={handleSubmitForm} />
    </div>
  );
}

export default Login;
