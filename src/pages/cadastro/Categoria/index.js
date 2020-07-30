import React, {useState, useEffect} from 'react';
import PageDefault from '../../../componentes/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../componentes/FormField';
import Button from '../../../componentes/Button';



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
    );
  }


  useEffect(() => {
    console.log('Tira a cerveja do congelador');
    const URL_TOP = 'http://localhost:8080/categorias';
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias({
          ...resposta,
        });
      })
    
    
    /* setTimeout(() => {
      setCategorias([
        ...categorias,
        {
          "id": 1,
          "nome": "Eletricidade",
          "descricao": "Descubra sobre a mais importante energia do mundo",
          "cor": "#cbd1ff"
        },
        {
          "id": 2,
          "nome": "Movimento",
          "descricao": "Você sabe o que é a velocidade? Acho que não.",
          "cor": "#cbd1ff"
        },
        {
          "id": 3,
          "nome": "Reação",
          "descricao": "Nada se cria tudo se transforma - Lavoisier",
          "cor": "#cbd1ff"
        }
      ])
    }, 4 * 1000); */
  }, []);
  
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
      
      <FormField
            label="Descrição"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={hendleChange}
          />

          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={hendleChange}
          />
        

        <Button>
            Cadastrar
        </Button>
        </form>
        
        {categorias.length === 0 && (<div>
          {/* Cargando... */}
          Loading...
        </div>
        )}

        <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key={`${categoria.nome}`}>
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