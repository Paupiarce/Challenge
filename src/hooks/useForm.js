import { useState } from "react";
import { db } from "../utils/firebase"; 

 export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
        ...form,
            [name]:value
        });
    };
      
  const handleSubmit = () => {
    const { formErrors, formHasErrors } = validateForm(form); // --> extraemos los valores que creamos recién
    setErrors(formErrors); // --> guardamos lo que sea que tengamos en errores

    if (!formHasErrors) { // --> chequeamos si hay errores, y si no los hay, hacemos algo (acá vas a mandar a tu backend, a tu Firebase)
      db.ref('form').push(form).then(() => {
        window.alert('✅ El formulario fue enviado con éxito!');
        setForm({});
      }).catch(() => {
        window.alert('❌ Hubo un error al enviar tu formulario, por favor intenta nuevamente');
      });
    
    }
  };
    return{
        form, errors, loading, response, handleChange, handleSubmit
    }
}
export default useForm;