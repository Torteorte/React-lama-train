import React from 'react'
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
   return (
      <form action="" onSubmit={props.handleSubmit}>
         <div>
            <Field component={"input"} name={"Login"} type={"text"} placeholder={"Name"} />
         </div>
         <div>
            <Field component={"input"} name={"Password"} type={"text"} placeholder={"Password"} />
         </div>
         <div>
            <Field component={"input"} name={"Remember Me"} type={"checkbox"} /> Remember Me
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