import React from 'react'
import { RadioWrapper } from '../atoms';


const CustomRadio = ({id,name,label,value,state,updateState}) => {
    return ( 

        <RadioWrapper>
            <input type="radio" 
                   id={id} 
                   value={value}
                   name={name}
                   checked={state[name] === value}
                   onChange={(e)=>updateState({...state,[name]:e.target.value})} 
                   />
            <span>{label}</span>
        </RadioWrapper>
     );
}
 
export default CustomRadio;