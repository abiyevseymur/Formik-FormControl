import React from 'react';
import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';


const Select = props => {
    const { label, name, options, ...rest } = props;
    return (
        <div className='form-control'>
            {label && <label htmlFor={name}>{label}</label>}
            <Field as='select' id={name} name={name} {...rest} 
            className={`form-input ${props.className ? props.className : ''}`}>
                {
                    options.map(option => {
                        return (
                            <option key={option.value} value={option.value}>
                                {option.key}
                            </option>
                        )
                    })
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Select;