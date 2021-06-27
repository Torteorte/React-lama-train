import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { login } from '../../state/auth_reducer'
import { required } from '../../Validators/validators'
import { Input } from '../common/FormControls/FormsControl'
import { Redirect } from "react-router";

const LoginForm = (props) => {
   return (
      <form action="" onSubmit={props.handleSubmit}>
         <div>
            <Field
               component={Input}
               name={"Email"}
               type={"text"}
               placeholder={"Email"}
               validate={[required]} />
         </div>
         <div>
            <Field
               component={Input}
               name={"Password"}
               type={"password"}
               placeholder={"Password"}
               validate={[required]} />
         </div>
         <div>
            <Field
               component={"input"}
               name={"RememberMe"}
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
      props.login(formData.Email, formData.Password, formData.RememberMe);
   }

   if (props.isAuth) {
      return <Redirect to={"/profile"} />
   }

   return <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
   </div>
}

let mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth
   }
}

export default connect(mapStateToProps, { login })(Login)