import React from 'react';

const Button = ({
    onClick,
    theme,
    type,
    disabled,
    children
}) => {
    return (
        <button
            className={`start-game__button start-game__button--${theme}`}
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
