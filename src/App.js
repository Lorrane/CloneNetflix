import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import Movie from "./components/Movies";

function App() {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      const list = await Tmdb.getHomeList();
      setMovieList(list);
    }
    loadAll();
  }, [])

  return (
    <div className="page">
        {/* Header
        Destaque */}
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
