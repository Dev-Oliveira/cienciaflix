/* eslint-disable linebreak-style */
import { useState } from 'react';

function useForm(valoresInicias) {
  const [values, setValues] = useState(valoresInicias);

  function setValue(chave, valor) {
    setValues(
      {
        ...values,
        [chave]: valor,
      },
    );
  }

  function hendleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  function clearForm() {
    setValues()(valoresInicias);
  }

  return {
    values,
    hendleChange,
    clearForm,
  };
}

export default useForm;
