import React from 'react';
import Button from "./Button";

function MultipleButton({ buttonsOptions }) {
    return (
        <div className='multiplebutton'>
            {buttonsOptions ? buttonsOptions?.map((option, index) => {
                const {
                    dissapearButton,
                    onClick,
                    theme,
                    disabled,
                    label
                } = option
                return (
                    <div key={index}>
                        {!dissapearButton ?
                            <Button
                                onClick={onClick}
                                theme={theme}
                                disabled={disabled}
                            >
                                {label}
                            </Button> : null
                        }
                    </div>
                )
            }) : null}
        </div>
    );
}

export default MultipleButton;
