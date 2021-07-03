import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { login } from '../../redux/auth_reducer'
import { required } from '../../Validators/validators'
import { Input } from '../common/FormControls/FormsControl'
import { Redirect } from "react-router";
import styles from './Login.module.css'

const LoginForm = ({ handleSubmit, error }) => {
   return (
      <form action="" onSubmit={handleSubmit}>
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
               type={"checkbox"} /> <span className={styles.checkBox}>Remember Me</span>
         </div>
         {error && <div>
            {error}
         </div>}
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

   return <div className={styles.loginPage}>
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