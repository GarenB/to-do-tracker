import React from "react";
import { useFormContext, Controller } from "react-hook-form";

const InputField = ({ name, placeholder, defaultValue, ...rest }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <>
            <input {...field} placeholder={placeholder} {...rest} />
            {errors[name] && <span>{errors[name].message}</span>}{" "}
          </>
        )}
      />
    </div>
  );
};

export default InputField;
