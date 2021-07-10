import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { login } from '../../redux/auth_reducer'
import { required } from '../../Validators/validators'
import { createField, Input } from '../common/FormControls/FormsControl'
import { Redirect } from "react-router";
import styles from './Login.module.css'

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
   return (
      <form action="" onSubmit={handleSubmit}>
         <div>
            {createField(Input, "Email", "text", "Email", [required])}
         </div>
         <div>
            {createField(Input, "Password", "password", "Password", [required])}
         </div>
         <div>
            <Field
               component={"input"}
               name={"RememberMe"}
               type={"checkbox"} /> <span className={styles.checkBox}>Remember Me</span>
         </div>

         {captchaUrl && <img src={captchaUrl} alt={"captcha"} />}
         {captchaUrl && createField(Input, "captcha", "text", "Enter Symbols", [required])}

         {error && <div className={styles.error} >
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
      props.login(formData.Email, formData.Password, formData.RememberMe, formData.captcha);
   }

   if (props.isAuth) {
      return <Redirect to={"/profile"} />
   }

   return <div className={styles.loginPage}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
   </div>
}

let mapStateToProps = (state) => {
   return {
      captchaUrl: state.auth.captchaUrl,
      isAuth: state.auth.isAuth
   }
}

export default connect(mapStateToProps, { login })(Login)