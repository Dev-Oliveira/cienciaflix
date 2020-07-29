import React, {useState} from 'react';
import PageDefault from '../../../componentes/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../componentes/FormField';


function CadastroCategoria(){
  const valoresInicias = {
    nome:'',
    descricao:'',
    cor:'#000'
  }
  const [categorias, setCategorias] = useState([])
  const [values, setValues] = useState(valoresInicias);
  
  

  function setValue(chave, valor){
    setValues(
      {
        ...values,
        [chave]: valor,
      }
    )
  }

  function hendleChange(infosDoEvento){
    setValue( 
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    )
  }
  
  return(
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(infosDoEvento){
          infosDoEvento.preventDefault();
          console.log('VOcê tentou enviar o form')
          setCategorias([
            ...categorias,
            values
          ]);
          
          setValues(valoresInicias)
        }}>


        
          <FormField
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={hendleChange}
          />
      

          <div>
            <label>
                Descrição:
                <textarea
                type="text"
                value={values.descricao}
                name="descricao"
                onChange={hendleChange}
                />
            </label>
          </div>

          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={hendleChange}
          />
        

        <button>
            Cadastrar
        </button>
        </form>

        <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key={`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>

        <Link to="/">
            Ir para a Home
        </Link>
      </PageDefault>
    )
    
  }

  export default CadastroCategoria;