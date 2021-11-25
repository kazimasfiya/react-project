import React from 'react'

import { Formik, Form, validateYupSchema } from 'formik'
import {Textfield} from './Textfield'

import * as Yup from 'yup';

 export const Signup=() => {
    
    const validate=Yup.object({
        firstname:Yup.string()
        .max("must be 15 character or less")
        .required("Required"),
        lastname:Yup.string().max("not more than 15").required("Required"),
        email:Yup.string().email("Invalid mail format").required("Required"),
    })
    

    return (
        <Formik
       initialValues={{
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmpassword:""

    } }
    validationSchema={validate}
    onSubmit={values=>{
        console.log(values)
    }}
     >
       {({ isSubmitting }) => (
         <Form>
         <Textfield label="firstname" name="firstname" type="text"></Textfield>
                <Textfield label="lastname" name="lastname" type="text"></Textfield>
                <Textfield label="email" name="email" type="email"></Textfield>
                <button className="btn btn-danger" name="submit" type="submit">Submit</button>
         </Form>
       )}
     </Formik>
    )
}


