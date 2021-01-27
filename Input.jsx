import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from './TextError';


const Input = props => {
    const { label, name, ...rest } = props;
    return (
        <div className='form-control'>
            {label && <label htmlFor={name}>{label}</label>}
            <Field id={name} name={name} {...rest} className={`form-input ${props.className ? props.className : ''}`}/>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Input;