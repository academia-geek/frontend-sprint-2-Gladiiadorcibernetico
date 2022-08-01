import { useState } from "react";


const useForm = (initialState = {}) => {

    const [datosForm,setDatosForm]=useState({initialState})

    

    const handleOnChange = ({target}) => {
            setDatosForm({
                ...datosForm,
                [target.name] : target.value
            })
    }
    const reset = () => {
        setDatosForm({initialState})
    }

    return[ datosForm,handleOnChange,reset]

};

export default useForm;