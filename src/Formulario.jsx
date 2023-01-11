import { useReducer } from "react";
import useData from "./hooks/useData";
import useForm  from "./hooks/useForm";

function Formulario() {

  const { data, isLoading } = useData();

  const onFormSubmit = () => {
    console.log("data values: ", data);
    console.log("isLoading values: ", isLoading);
  };
  console.log("db.json data:", data)

  const initialForm = {
    name:"",
    email:"",
  };

  const validationsForm = (form) => {
    let formErrors = {};
    let formHasErrors = false;
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if (!form.name?.trim()) {
      formErrors.name = "El campo 'Nombre' es requerido";
      formHasErrors = true;
    } else if (!regexName.test(form.name?.trim())) {
      formErrors.name =
        "El campo 'Nombre' sólo acepta letras y espacios en blanco";
      formHasErrors = true;
    }

    if (!form.email?.trim()) {
      formErrors.email = "El campo 'Email' es requerido";
      formHasErrors = true;
    } else if (!regexEmail.test(form.email?.trim())) {
      formErrors.email = "El campo 'Email' es incorrecto";
      formHasErrors = true;
    }
    return { formErrors, formHasErrors };
  
  }; 
let styles = {
  fontWeight: "bold",
  color: "#dc3545",
  fontSize: "10px"
}

  const {form, 
    errors, 
    loading, 
    response, 
    handleChange, 
    handleBlur, 
    handleSubmit} = useForm(initialForm, validationsForm);

    

  return (
  <div className="App">
  <h1>Formulario</h1>
  <form>
            <div>
            <label>Nombre completo</label>
            <input type="text" name="name" required="true" className="text"
            onChange={handleChange} value={form.name}/>
            {errors.name && <p style={styles}>{errors.name}</p>}
            </div><br/>
            <div>
            <label>Correo electrónico</label>
            <input type="email" name="email" required="true" className="email" onChange={handleChange} value={form.email}/>
            {errors.email && <p style={styles}>{errors.email}</p>}
            </div><br/>
            <div>
            <label>Fecha de nacimiento</label>
            <input type="date" name="birth_date" required="true" className="date" onChange={handleChange}/>
            </div><br/>
            <div>
            <label>¿Cuál es tu país de orígen?</label>
            <select name="country_of_origin" required="true" className="country" onChange={handleChange}>
                <option value="argentina">Argentina</option>
                <option value="brasil">Brasil</option>
                <option value="chile">Chile</option>
                <option value="colombia">Colombia</option>
                <option value="mexico">México</option>
                <option value="peru">Perú</option>
                <option value="uruguay">Uruguay</option>
                <option value="venezuela">Venezuela</option>
            </select>
            </div><br/>
            <div>
              <input name="terms_and_conditions" type="checkbox" required="true"/>
                <label className="terminos"><a href="#">¿Acepta los términos y condiciones?</a></label>
            </div><br/>
  <input type="submit" value="enviar" className="button" onClick={handleSubmit}/>
    </form>
    
</div>

    );
    
};





export default Formulario;