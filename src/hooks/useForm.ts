import { useState } from "react";

export interface initialForm {
  email: string;
  displayName: string;
  password: string;
}

export const useForm = (initialForm: initialForm | {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }: { target: any }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
