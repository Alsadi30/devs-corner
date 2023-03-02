import { TextField } from "@mui/material";
import React, { InputHTMLAttributes } from "react";
import { Controller } from "react-hook-form";
import { InputStyle } from "./Input.style";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  item: {
    name: string;
    type: string;
    isRequired?: boolean;
    fullWidth?: boolean;
    value?: string | File | Date | number | null;
    style?: object;
  };
  other: any;
};

const Input: React.FC<InputFieldProps> = ({ item, other }) => {
  const { name, type, isRequired, fullWidth = true, value, style } = item;

  let label = name.charAt(0).toUpperCase() + name.slice(1);




  return (
    <Controller
      name={name}
      control={other}
      defaultValue={value && value}
      render={({ field, fieldState: { error }, formState: { isValid } }) => (
        type === 'file' ?
          (
            <div style={{ width: '100%', color: '#6663a5', textAlign: 'start', display: 'flex', backgroundColor: '#E8E8E8', margin: '5px 0px', borderRadius: '3px' }} >
              <label style={{ padding: '13px 10px', color: '#6663a5', textAlign: 'start' }} htmlFor={name} >{label}</label>
              <input style={{ padding: '13px 0px', }} type="file" name={name} onChange={(e) =>
                field.onChange({ target: { value: e.target.files[0], name: field.name } })} />
            </div>) :
          <TextField
            color="secondary"
            sx={{ ...style, ...InputStyle }}
            type={type}
            fullWidth={fullWidth}
            required={isRequired}
            {...field}
            value={value}
            name={name}
            label={label}
            multiline
            size={"small"}
            variant="filled"
            error={!!error?.message}
            helperText={isValid ? "" : error?.message}
            maxRows={3}
          />

      )}
    />
  );
};

export default Input;
