import React, { useEffect, useState } from 'react';
import PageDefault from '../../componentes/PageDefault';
import BannerMain from '../../componentes/BannerMain';
import Carousel from '../../componentes/Carousel';
import categoriasRepository from '../../repositorio/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    // https://localhost:8080/categorias?_embed=videos
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        /* console.log(categoriasComVideos); */
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.length === 0 && (<div>Loading ...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="O espaço-tempo é um dos conceitos físicos mais famosos. Ele surge como uma consequência da relatividade de Einstein e muda drasticamente a maneira como nós enxergamos o universo. Explicar o conceito não é fácil, mas aqui vai a minha tentativa nesse novo vídeo da série Explicado. Espero que gostem!"
              />

              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

    </PageDefault>
  );
}
export default Home;
