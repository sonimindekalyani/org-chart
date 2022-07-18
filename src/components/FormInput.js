import React from 'react'
import "../styles/index.css"

const FormInput = (props) => {
    const { label, errorMessage, onChange, id, ...inputProps } = props;
  
    return (
      <div className="formInput">
        <label>{label}</label>
        <input className='inputdata'
          {...inputProps}
          onChange={onChange}
        />
       </div>
    );
  };

export default FormInput 