import React from "react";
import { Button, View,StyleSheet } from "react-native";
import { Form, Formik, useField } from "formik";
import StyledTextInput from "../components/StyledTextInput";
import StyledText from "../components/StyledText";

const initialValues = {
  email: '',
  password: ''
};

const styles = StyleSheet.create({
    error: {
        color:'red',
        fontSize: 13,
        marginBottom: 20,
        marginTop: -5
    },
    form:{
        margin:12
    }
})


const FormikInputValue= ( { name, ...props}) => {
    const[field,meta,helpers] = useField(name)
    return (
        <>
        <StyledTextInput
              value={field.value}
              onChangeText={value=> helpers.setValue(value)}
              error={meta.error}
              {...props}
            />
        {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
        </>
    )
}

const validate= values=>{
    const errors= {}

    if(!values.email){
        errors.email= 'Email is required'
    }else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g. test(values.email)){
        errors.email= 'Invalid Email address'
    }
    console.log(errors)
    return errors
}

export default function LogInPage() {
  return (
    <Formik
    validate={validate}
      initialValues={initialValues}
      onSubmit={values => console.log(values)}
    >
      {({ handleChange, handleSubmit, values }) => {
        return (
          <View style={styles.form}> 
            <FormikInputValue
              name='email'
              placeholder="E-mail"
            />
            <FormikInputValue
              name='password'
              placeholder="Password"
              secureTextEntry
            />
            <Button onPress={handleSubmit} title="Log In"></Button>
          </View>
        );
      }}
    </Formik>
  );
}
