import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default ({ id, options, label, value, disabled, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select
        id={id}
        name={id}
        labelId={`${id}-label`}
        onChange={handleChange}
        value={value}
        label={label}
        disabled={disabled}
      >
        {options.map(({id, name}) => (
          <MenuItem value={id} key={id}>{name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
