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
    value?: string;
    style?: object;
  };
  control: any;
};

const Input: React.FC<InputFieldProps> = ({ item, control }) => {
  const { name, type, isRequired, fullWidth, value, style } = item;

  let label = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={value ? value : ""}
      render={({ field, fieldState: { error }, formState: { isValid } }) => (
        <TextField
          color="secondary"
          sx={{ ...style, ...InputStyle }}
          type={type}
          fullWidth={fullWidth}
          required={isRequired}
          {...field}
          name={name}
          label={label}
          size={"small"}
          variant="filled"
          error={!!error?.message}
          helperText={isValid ? "" : error?.message}
        />
      )}
    />
  );
};

export default Input;
