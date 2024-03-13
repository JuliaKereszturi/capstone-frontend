import React, { Component } from "react";
import PropTypes from "prop-types";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrows/arrows-down-2.svg";

class DropdownField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      isValid: true,
      errorMessage: "",
    };
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ value });
    this.validate(value);
  };

  validate = (value) => {
    const { required, customValidation } = this.props;

    if (required && value.trim() === "") {
      this.setState({
        isValid: false,
        errorMessage: "This field is required.",
      });
    } else if (customValidation) {
      const { isValid, errorMessage } = customValidation(value);
      this.setState({ isValid, errorMessage });
    } else {
      this.setState({ isValid: true, errorMessage: "" });
    }
  };

  render() {
    const { options, label, style } = this.props;
    const { value, isValid, errorMessage } = this.state;

    return (
      <div className="mb-6 relative">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {label}
        </label>
        <select
          value={value}
          onChange={this.handleChange}
          className={`shadow appearance-none text-primary-600 border z-10 border-gray-300 rounded-lg w-full py-4 px-5 leading-tight focus:outline-none focus:shadow-outline ${
            !isValid ? "border-red-500" : ""
          } focus:bg-gray-100`}
          style={style}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ArrowDown className="w-5 h-5 stroke-primary-600 fill-white absolute top-[3.313rem] right-8 pointer-events-none" />
        {!isValid && (
          <p className="text-red-500 text-xs italic">{errorMessage}</p>
        )}
      </div>
    );
  }
}

DropdownField.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  required: PropTypes.bool,
  customValidation: PropTypes.func,
};

export default DropdownField;
