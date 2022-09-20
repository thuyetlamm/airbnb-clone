import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import InputField from '~/form-controls/InputField';
import PasswordField from '~/form-controls/PasswordField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Avatar, Button, LinearProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './LoginForm.scss';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    padding: '8px',
    width: '400px',
    maxHeight: '4var(--gap-80)',
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
LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm({ onSubmit }) {
  const classes = useStyles();
  const schema = yup.object().shape({
    identifier: yup.string().required('Please Enter Your Email'),
    password: yup.string().required('Please Enter Your Password'),
  });
  const form = useForm({
    defaultValues: {
      identifier: '',
      password: '',
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
        Sign In
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)} autoComplete="off">
        <InputField name="identifier" label="Email" form={form} />
        <PasswordField name="password" label="PassWord" form={form} />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          disabled={isSubmitting}
          className={classes.submit}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
