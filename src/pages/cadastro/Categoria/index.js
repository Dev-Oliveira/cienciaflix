import React from 'react';
import PageDefault from '../../../componentes/PageDefault';
import { Link } from 'react-router-dom';


function CadastroCategoria(){
    return(
      <PageDefault>
        <h1>
            Cadastro de categoria
        </h1>           
        <Link to="/">
            Ir para a Home
        </Link>
      </PageDefault>
    )
    
  }

  export default CadastroCategoria;