import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./button.css";

const Button = ({ variant, disabled, icon, onClick, children }) => {
  const buttonClasses = classNames("btn", {
    "btn-primary": variant === "primary",
    "btn-secondary": variant === "secondary",
    "btn-create-account": variant === "create-account",
    "btn-disabled": disabled,
    "btn-icon": icon,
  });

  return (
    <button className={buttonClasses} disabled={disabled} onClick={onClick}>
      {children}
      {icon && <span className="icon">{icon}</span>}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  disabled: PropTypes.bool,
  icon: PropTypes.element,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  variant: "primary",
  disabled: false,
  icon: null,
  onClick: () => {},
};

export default Button;
