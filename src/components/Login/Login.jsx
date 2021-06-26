import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../Validators/validators'
import { Input } from '../common/FormControls/FormsControl'

const LoginForm = (props) => {
   return (
      <form action="" onSubmit={props.handleSubmit}>
         <div>
            <Field
               component={Input}
               name={"Login"}
               type={"text"}
               placeholder={"Name"}
               validate={[required]} />
         </div>
         <div>
            <Field
               component={Input}
               name={"Password"}
               type={"text"}
               placeholder={"Password"}
               validate={[required]} />
         </div>
         <div>
            <Field
               component={"input"}
               name={"Remember Me"}
               type={"checkbox"} /> Remember Me
         </div>
         <div>
            <button>Login</button>
         </div>
      </form>
   )
}

const LoginReduxForm = reduxForm({
   form: 'login'
})(LoginForm)

const Login = (props) => {

   const onSubmit = (formData) => {
      console.log(formData)
   }

   return <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
   </div>
}

export default Login