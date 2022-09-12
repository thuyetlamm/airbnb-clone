import React from 'react';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { login } from '../../userSlice';
import { useSnackbar } from 'notistack';
import LoginForm from '../LoginForm/LoginForm';
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
