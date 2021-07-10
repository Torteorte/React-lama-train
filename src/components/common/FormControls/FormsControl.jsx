import styles from './FormsControl.module.css'
import { Field } from "redux-form";

const FormControl = ({ input, meta, child, ...props }) => {

   let hasError = meta.touched && meta.error

   return (
      <div className={styles.formControl + " " + (hasError ? styles.error : '')}>
         <div>
            {props.children}
         </div>
         {meta.touched && <span>{meta.error}</span>}
      </div>
   )
}

export const TextArea = (props) => {
   const { input, meta, child, ...restProps } = props;
   return <FormControl {...props}> <textarea {...input} {...restProps} /> </FormControl>
}

export const Input = (props) => {
   const { input, meta, child, ...restProps } = props;
   return <FormControl {...props}> <input {...input} {...restProps} /> </FormControl>
}

export const createField = (component, name, type, placeholder, validators, text = "", props = {}) => (
   <div>
      <Field
         component={component}
         name={name}
         type={type}
         placeholder={placeholder}
         validate={validators}
         {...props}
      /> {text}
   </div>
)