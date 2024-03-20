import React from "react";
import { useFormContext, Controller } from "react-hook-form";

import { OuterContainer, InnerContainer, StyledInputField } from "./styles";

const InputField = ({ name, placeholder, defaultValue, ...rest }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <OuterContainer>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <InnerContainer>
            <StyledInputField {...field} placeholder={placeholder} {...rest} />
            {errors[name] && <span>{errors[name].message}</span>}{" "}
          </InnerContainer>
        )}
      />
    </OuterContainer>
  );
};

export default InputField;
