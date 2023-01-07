import React, { forwardRef, InputHTMLAttributes } from "react";
import { Fieldset } from "./style";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  placeholder: string;
  value?: string | number;
}

export const Input = forwardRef<HTMLInputElement, iInputProps>(
  ({ label, type, placeholder, value, ...rest }, ref) => {
    return (
      <Fieldset>
        <label>{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          ref={ref}
          defaultValue={value}
          {...rest}
        />
      </Fieldset>
    );
  }
);
