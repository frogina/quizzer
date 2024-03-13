import React, { ButtonHTMLAttributes } from 'react';
import '../assets/styles/components/Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...rest }) => {
  const buttonClass = `button ${variant}`;

  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  );
};

export default Button;
