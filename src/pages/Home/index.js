import React, { useEffect, useState } from 'react';
import Menu from '../../componentes/menu';
/* import dadosIniciais from '../../data/dados_iniciais.json'; */
import PageDefault from '../../componentes/PageDefault';
import BannerMain from '../../componentes/BannerMain';
import Carousel from '../../componentes/Carousel';
import Footer from '../../componentes/Footer';
import categoriasRepository from '../../repositorio/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos);
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.length === 0 && (<div>Loading ...</div>)}

      {dadosIniciais.length > 1 && (
        <>
          <BannerMain
            videoTitle={dadosIniciais[0].videos[0].titulo}
            url={dadosIniciais[0].videos[0].url}
            videoDescription="O espaço-tempo é um dos conceitos físicos mais famosos. Ele surge como uma consequência da relatividade de Einstein e muda drasticamente a maneira como nós enxergamos o universo. Explicar o conceito não é fácil, mas aqui vai a minha tentativa nesse novo vídeo da série Explicado. Espero que gostem!"
          />

          <Carousel
            ignoreFirstVideo
            category={dadosIniciais[0]}
          />
        </>
      )}

      {/* <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="O espaço-tempo é um dos conceitos físicos mais famosos. Ele surge como uma consequência da relatividade de Einstein e muda drasticamente a maneira como nós enxergamos o universo. Explicar o conceito não é fácil, mas aqui vai a minha tentativa nesse novo vídeo da série Explicado. Espero que gostem!"
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        category={dadosIniciais.categorias[5]}
      /> */}

    </PageDefault>
  );
}
export default Home;
