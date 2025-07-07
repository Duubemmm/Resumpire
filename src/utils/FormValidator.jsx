import { useState } from 'react';

const useFormValidator = (initialValues) => {
  // Validation functions
  const validateName = (name) => /^[a-zA-Z\-' ]+$/.test(name);
  const validatePhone = (phone) => /^\+?\d+$/.test(phone);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    let error = '';
    
    switch(name) {
      case 'name':
        if (!value) error = 'Name is required';
        else if (!validateName(value)) error = 'Only letters, hyphens and apostrophes allowed';
        break;
      case 'phone':
        if (!value) error = 'Phone is required';
        else if (!validatePhone(value)) error = 'Only numbers and + sign allowed';
        break;
      case 'email':
        if (!value) error = 'Email is required';
        else if (!validateEmail(value)) error = 'Please enter a valid email';
        break;
      default:
        break;
    }
    
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Special handling for phone number to ensure + is only at start
    let processedValue = value;
    if (name === 'phone') {
      if (value.length > 1 && value.includes('+')) {
        processedValue = value.replace(/\+/g, '');
      }
      processedValue = processedValue.replace(/[^\d+]/g, '');
    }
    // Special handling for name to filter invalid characters
    else if (name === 'name') {
      processedValue = value.replace(/[^a-zA-Z\-' ]/g, '');
    }

    setFormData(prev => ({ ...prev, [name]: processedValue }));

    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, processedValue) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach(key => {
      newErrors[key] = validateField(key, formData[key]);
      if (newErrors[key]) isValid = false;
    });

    setErrors(newErrors);
    setTouched(
      Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}
    ))
    return isValid;
  };

  return {
    formData,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateForm,
    setFormData
  };
};

export default useFormValidator;