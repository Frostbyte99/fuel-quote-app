import { useState, useEffect } from "react";

// Handles FormSignup() hooks
const useForm = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  // Error handling variables
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // Prevent re-loading when submitting form
  const handleSubmit = (e) => {
    console.log("Form submitted!");
    console.log(values);
    e.preventDefault();
  };

  return { handleChange, values, handleSubmit };
};

export default useForm;
