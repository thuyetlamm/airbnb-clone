import React from 'react';
import RegisterForm from '../RegisterForm/RegisterForm';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { register } from '../../userSlice';
import { useSnackbar } from 'notistack';
function Register({ onCloseDialog = null }) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitForm = async (values) => {
    try {
      values.username = values.email;
      const resultAction = await dispatch(register(values));
      unwrapResult(resultAction);

      if (onCloseDialog) {
        onCloseDialog();
      }
      enqueueSnackbar('Register Successfully !!!', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar(error?.message, { variant: 'error' });
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmitForm} />
    </div>
  );
}

export default Register;
