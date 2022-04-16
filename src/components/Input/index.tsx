import React, { useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { toast } from "react-toastify";

interface IInputProps {
  name: string;
  type: string;
  placeholder: string;
}

export function Input({ name, type, placeholder }: IInputProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <input type={type} placeholder={placeholder} {...field} />
      )}
    />
  );
}
