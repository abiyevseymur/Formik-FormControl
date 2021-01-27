import React from 'react';
import CheckboxGroup from './CheckboxGroup';
import Input from './Input';
import RadioButtons from './RadioButtons';
import Select from './Select';


const FormikControl = props => {
    const { control, ...rest } = props;
    switch (control) {
        case 'input':
            return <Input {...rest} />
        case 'textarea':
        case 'select':
            return <Select {...rest} />
        case 'readio':
            return <RadioButtons {...rest} />
        case 'checkbox':
            return <CheckboxGroup {...rest} />
        case 'date':
        default:
            return null
    }
}
export default FormikControl;