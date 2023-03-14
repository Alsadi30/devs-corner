import { TextField } from "@mui/material";
import React, { InputHTMLAttributes } from "react";
import { Controller } from "react-hook-form";
import { DateInStyle, DateInputStyle, FileInputStyle, FileLabelStyle, Filewarp, InputStyle } from './Input.style';
import Error from "./error";


type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  item: {
    name: string;
    type: string;
    isRequired?: boolean;
    fullWidth?: boolean;
    defaultValue?: any
    style?: object;
  };
  other: any;
};

const InputG: React.FC<InputFieldProps> = ({ item, other }) => {
  const { name, type, isRequired, fullWidth = true, defaultValue, style } = item;

  let label = name.charAt(0).toUpperCase() + name.slice(1);


  return (
    <Controller
      name={name}
      control={other}
      defaultValue={defaultValue && defaultValue}
      render={({ field, fieldState: { error }, formState: { isValid } }) => (
        type === 'file' ?
          (<div style={Filewarp}>
            <div style={FileInputStyle} >
              <label
                style={FileLabelStyle}
                htmlFor={name} >
                {label}
              </label>
              <input
                style={{ padding: '13px 0px', }}
                type="file"
                name={name}
                onChange={(e) =>
                  field.onChange({ target: { value: e.target.files ? e.target.files[0] : '', name: field.name } })} />
            </div>
            {error &&
              <div style={{ backgroundColor: '#ffffff' }} >
                <Error message={error.message} />
              </div>}
          </div >
          ) :
          type === 'date' ? (
            <div style={DateInputStyle} >
              <label htmlFor={name} >{label}</label>
              <input
                style={DateInStyle}
                type="date"
                {...field}
              />
              {error && <Error message={error.message} />}
            </div>) :
            <TextField
              color="secondary"
              sx={{ ...style, ...InputStyle }}
              type={type}
              fullWidth={fullWidth}
              required={isRequired}
              {...field}
              defaultValue={defaultValue}
              name={name}
              label={label}
              size={"small"}
              variant="filled"
              error={!!error?.message}
              helperText={isValid ? "" : error?.message}
            />

      )}
    />
  )
};

export default InputG;



