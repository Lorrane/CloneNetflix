import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import Movie from "./components/Movies";
import Spotlight from "./components/Spotlight";
import './App.css';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [spotlightInfo, setSpotlightInfo] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      const list = await Tmdb.getHomeList();
      setMovieList(list);

      const originals = list.filter(movie=>movie.slug === 'originals');
      const random = Math.floor(Math.random() * (originals[0].items.results.length -1));
      const movie = originals[0].items.results[random];
      const data = await Tmdb.getMovieInfo(movie.id, 'tv');
      setSpotlightInfo(data);


    }
     loadAll();
  }, []);



  return (
    <div className="page">
        {/* Header */}

        {spotlightInfo && <Spotlight data={spotlightInfo} />}

      <section className="lists">
        {movieList.map((item, key) => (
            <Movie key={key} title={item.title} items={item.items} />
        ))}
      </section>

      {/* Footer */}
    </div>
  );
}

export default App;
