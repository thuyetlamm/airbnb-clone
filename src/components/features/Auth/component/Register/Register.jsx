import React from 'react';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

import RegisterForm from '../RegisterForm/RegisterForm';
import { register } from '../../userSlice';

Register.propTypes = {
  onCloseDialog: PropTypes.func,
};
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
