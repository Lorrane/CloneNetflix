import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import Movie from "./components/Movies";
import Spotlight from "./components/Spotlight";
import './App.css';
import Header from "./components/Header";

function App() {

  const [movieList, setMovieList] = useState([]);
  const [spotlightInfo, setSpotlightInfo] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      const list = await Tmdb.getHomeList();
      setMovieList(list);

      const originals = list.filter(movie => movie.slug === 'originals');
      const random = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      const movie = originals[0].items.results[random];
      const data = await Tmdb.getMovieInfo(movie.id, 'tv');
      setSpotlightInfo(data);


    }
    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])


  return (
    <div className="page">
      <Header fundo={blackHeader} />

      {spotlightInfo && <Spotlight data={spotlightInfo} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <Movie key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Feito com <span role="img" aria-label="coração">❤️</span> pelo Lorrane <br />
        Direitos de imagem para Netflix <br />
        Dados extraídos da API do The Movie DB
      </footer>

      {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif" alt="Carregando..." />
        </div>
      }

    </div>
  );
}

export default App;
