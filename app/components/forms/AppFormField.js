import React from 'react';
import {useFormikContext} from 'formik';

import ErrorMessage from './ErrorMessage';
import AppTextInput from '../AppTextInput';

function AppFormField({name,width, ...otherProps}) {
    const {handleChange, errors, setFieldTouched, touched} = useFormikContext();
    return (
        <>
        <AppTextInput
                onBlur={()=>setFieldTouched(name)}
                onChangeText={handleChange(name)}
                width={width}
                {...otherProps}
              />
              <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppFormField;