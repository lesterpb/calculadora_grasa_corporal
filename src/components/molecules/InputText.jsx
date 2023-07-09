import React from 'react'
import { InputTextWrapper } from '../atoms';

const InputText = ({
                    label,
                    id, 
                    name, 
                    updateState,
                    inputValue="",
                    inputValidation,
                    className="",
                    placeholder="", 
                    autoComplete="off",
                    spellCheck="false",
                    inputRequired=false
                }) => {

    const handleChange = (e) => {
        const value = e.target.value;
        if(inputValidation(value)){
            updateState(actualValue => ({...actualValue,[name]:value}))
        }
    }

    return ( 
        <InputTextWrapper className={className}>
            <span>{label}</span>
            <input type='text'
                   id={id} 
                   name={name}
                   placeholder={placeholder} 
                   value={inputValue}
                   onChange={handleChange}
                   autoComplete={autoComplete}
                   spellCheck={spellCheck} 
                   required={inputRequired}                
                   />
        </InputTextWrapper>
     );
}
 

export default InputText;