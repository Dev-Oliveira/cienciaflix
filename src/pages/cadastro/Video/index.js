import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault';
import FormField from '../../../componentes/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../componentes/Button';
import videosRepository from '../../../repositorio/videos';
import categoriasRepository from '../../../repositorio/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { hendleChange, values } = useForm({
    titulo: 'video padrão',
    url: 'https://www.youtube.com/watch?v=Lf5sJm9O42o',
    categoria: 'experimentos',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1> Cadastro de Vídeo </h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // alert('Vídeo Cadastrado com sucesso!');

        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });
          console.log('categoriaEscolhida', categoriaEscolhida);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: 1,
        })
          .then(() => {
            console.log('Cadastro com sucesso!');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Titulo do Vídeo"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={hendleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={hendleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={hendleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
