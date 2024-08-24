import { Controller } from 'react-hook-form';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const FormSelect= (
    { name, control, label, defaultValue = '', autocomplete, options = [], ...props }) => {
  return (
    <div className='form-control'>
    <FormControl fullWidth>
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <Select 
          label={label} 
          labelId={`${name}-label`}
          id={`${name}`}
          {...field} {...props} autoComplete={autocomplete}>
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl>
    </div>
  );
}

export default FormSelect;
