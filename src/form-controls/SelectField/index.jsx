import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';

SelectField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function SelectField(props) {
  const { form, name, label, disabled } = props;
  const { formState } = form;
  const hasError = formState.errors[name];
  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field: { onChange, onBlur, name, value, ref } }) => (
        <TextField
          value={currencies}
          fullWidth
          select
          label={label}
          variant="outlined"
          margin="normal"
          disabled={disabled}
          onBlur={onBlur}
          onChange={onChange}
          selected={value}
          inputRef={ref}
          error={!!hasError}
          autoComplete="off"
          helperText={formState.errors[name]?.message}
        />
      )}
    />
  );
}

export default SelectField;
