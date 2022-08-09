import { View, Text } from 'react-native'
import React from 'react'
import ErrorMessage from "../Component/ErrorMessage"
import {useFormikContext} from "formik"
import AppTextInput from "../Component/AppTextInput"

const AppFormField = ({name, ...otherProps}) => {
  const{setFieldTouched, errors, handleChange, touched}= useFormikContext()

  return (
    <>
       <AppTextInput
        {...otherProps}
       onBlur={()=>setFieldTouched(name)}
       onChangeText={handleChange(name)}
       />
        <ErrorMessage error={errors[name]} visible={touched[name]}/>
    </>
  )
}

export default AppFormField