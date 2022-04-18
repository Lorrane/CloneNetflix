import React from "react";
import './styles.css';

function Movie({ title, items }) {

    // const lista = items.results.filter((movie) => {
    //     return movie.original_language !== "ar";
    // })
    
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="movieArea">
                <div className="movieList">
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div className="movie" key={key}>
                            <img src={`https:image.tmdb.org/t/p/w300${item.poster_path}`} alt={`poster do ${item.original_title}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Movie;