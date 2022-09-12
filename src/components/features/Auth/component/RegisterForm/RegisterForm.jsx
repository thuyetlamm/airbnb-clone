import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import InputField from '~/form-controls/InputField';
import PasswordField from '~/form-controls/PasswordField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Avatar, Button, LinearProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './RegisterForm.scss';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    padding: '8px',
    width: '400px',
    maxHeight: '480px',
    overflow: 'hidden',
    position: 'relative',
  },
  avatar: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    padding: '4px',
    alignSelf: 'center',
    margin: '10px 0 10px 0',
  },
  submit: {
    margin: '10px 0',
    height: '40px',
    width: '100%',
    backgroundColor: '#151513',
    fontSize: '12px',
  },
  progress: {
    top: '-4px',
    textAlign: 'center',
  },
}));
RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm({ onSubmit }) {
  const classes = useStyles();
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required('Please Enter Your Full Name')
      .test(
        'Should has at least two word',
        'Please Enter at least two word',
        (value) => {
          return value.split(' ').length >= 2;
        }
      ),
    email: yup
      .string()
      .required('Please Enter Your Email')
      .email('Vui nhap dung dinh dang'),
    password: yup.string().required().min(6, 'At least 6 ky tu'),
    retypePassword: yup
      .string()
      .required('Please Retype Your Password')
      .oneOf([yup.ref('password')], 'Password does not matching'),
  });
  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
    }
  };
  const { isSubmitting } = form.formState;
  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}
      <Avatar className={classes.avatar}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2111/2111320.png"
          alt="logo"
        />
      </Avatar>
      <Typography component="h3" variant="h4">
        Create An Account
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)} autoComplete="off">
        <InputField name="fullName" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="PassWord" form={form} />
        <PasswordField
          name="retypePassword"
          label="Retype PassWord"
          form={form}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          disabled={isSubmitting}
          className={classes.submit}
        >
          Create Account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
