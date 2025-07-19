// const ValidatedInput = ({
//   type = 'text',
//   name,
//   label,
//   value,
//   error,
//   touched,
//   onChange,
//   onBlur,
//   placeholder,
//   required = true
// }) => (
//   <div className="form-group">
//     <label htmlFor={name}>{label}{required && '*'}</label>
//     <input
//       type={type}
//       id={name}
//       name={name}
//       value={value}
//       onChange={onChange}
//       onBlur={onBlur}
//       placeholder={placeholder}
//       className={`form-control ${error && touched ? 'is-invalid' : ''}`}
//     />
//     {error && touched && (
//       <div className="invalid-feedback">{error}</div>
//     )}
//   </div>
// );

// export default ValidatedInput;