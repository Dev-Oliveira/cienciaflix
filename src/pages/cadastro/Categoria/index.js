import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault';
import FormField from '../../../componentes/FormField';
import Button from '../../../componentes/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresInicias = {
    titulo: '',
    descricao: '',
    cor: '#000',
  };

  const { hendleChange, values, clearForm } = useForm(valoresInicias);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://cienciaflix.herokuapp.com/categorias';
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });

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

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.titulo}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        clearForm();
      }}
      >

        <FormField
          label="titulo da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
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

      {categorias.length === 0 && (
        <div>
          {/* Cargando... */}
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para a Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
