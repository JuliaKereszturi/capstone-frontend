// import React, { Component } from "react";
// import PropTypes from "prop-types"; // Import PropTypes for prop validation

// class InputField extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: "",
//       isValid: true,
//       errorMessage: "",
//     };
//     this.handleChange = this.handleChange.bind()
//   }

//   handleChange = (e) => {
//     const { value } = e.target;
//     this.setState({ value });
//     this.validate(value);
//   };

//   validate = (value) => {
//     const { required, minLength, pattern, customValidation } = this.props;

//     if (required && value.trim() === "") {
//       this.setState({
//         isValid: false,
//         errorMessage: "This field is required.",
//       });
//       return;
//     }

//     if (minLength && value.length < minLength) {
//       this.setState({
//         isValid: false,
//         errorMessage: `Minimum length is ${minLength} characters.`,
//       });
//       return;
//     }

//     if (pattern && !pattern.test(value)) {
//       this.setState({
//         isValid: false,
//         errorMessage: "Invalid format.",
//       });
//       return;
//     }

//     if (customValidation && !customValidation(value)) {
//       this.setState({
//         isValid: false,
//         errorMessage: "Custom validation failed.",
//       });
//       return;
//     }

//     this.setState({
//       isValid: true,
//       errorMessage: "",
//     });
//   };

//   render() {
//     const { label, type, placeholder, style } = this.props;
//     const { value, isValid, errorMessage } = this.state;

//     return (
//       <div className="mb-6">
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//           {label}
//         </label>
//         <input
//           type={type}
//           value={value}
//           onChange={this.handleChange}
//           placeholder={placeholder}
//           className={`shadow appearance-none border border-gray-300 rounded-lg w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
//             !isValid ? "border-red-500" : ""
//           } focus:bg-gray-100`}
//           style={style}
//         />
//         {!isValid && (
//           <p className="text-red-500 text-xs italic">{errorMessage}</p>
//         )}
//       </div>
//     );
//   }
// }

// // Add prop type validation
// InputField.propTypes = {
//   label: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   placeholder: PropTypes.string.isRequired,
//   required: PropTypes.bool, // Add validation for 'required' prop
//   minLength: PropTypes.number,
//   pattern: PropTypes.instanceOf(RegExp),
//   customValidation: PropTypes.func,
// };

// export default InputField;


import React from "react";
import PropTypes from "prop-types";

const FormTextArea = ({
  title,
  id,
  value,
  name,
  placeholder,
  invalid,
  disabled,
  required,
  InvalidText,
  onChange,
  className
}) => {
  const defaultTextAreaClasses = `w-full px-5 py-4 rounded-lg font-medium border text-gray-900 placeholder-gray-900 placeholder:font-semibold text-sm focus:outline-none focus:border-gray-400 focus:bg-white ${
    invalid ? "border-red-500" : "border-gray-200"
  }`;
  const textAreaClasses = className
    ? `${defaultTextAreaClasses} ${className}`
    : defaultTextAreaClasses;
  return (
    <div className="relative w-full">
      <label className="bg-white px-1 text-sm duration-100 ease-linear cursor-text">
        {title}
      </label>
      <textarea
        className={textAreaClasses}
        id={id}
        value={value}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        onChange={onChange}
      />
      {invalid && (
        <p className="text-red-500 text-sm mt-1 ml-2">{InvalidText}</p>
      )}
    </div>
  );
};

FormTextArea.propTypes = {
  title: PropTypes.string,
  InvalidText: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  placeholder: PropTypes.string,
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default FormTextArea;


