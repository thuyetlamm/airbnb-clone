import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;
  const { formState } = form;
  const hasError = formState.errors[name];
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field: { onChange, onBlur, name, value, ref } }) => (
        <TextField
          fullWidth
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

export default InputField;
