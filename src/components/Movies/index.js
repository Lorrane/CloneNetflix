import React, { useState } from "react";
import './styles.css';
import { Icon } from '@iconify/react';

function Movie({ title, items }) {

    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let position = scrollX + Math.round(window.innerWidth / 2);
        if (position > 0) {
            position = 0
        }
        setScrollX(position);
    }

    const handleRightArrow = () => {
        let position = scrollX - Math.round(window.innerWidth / 2);
        let list = items.results.length * 150;

        if((window.innerWidth - list) > position) {
            position = (window.innerWidth - list) - 60;
        }
        

        setScrollX(position);
    }

    // const lista = items.results.filter((movie) => {
    //     return movie.original_language !== "ar";
    // })

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="movieArea">
                <div className="movieList" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    <div className="left" onClick={handleLeftArrow} >
                        <Icon icon="ic:baseline-navigate-before" style={{ fontSize: 80 }} />
                    </div>
                    <div className="right" onClick={handleRightArrow}>
                        <Icon icon="ic:baseline-navigate-next" style={{ fontSize: 80 }} />
                    </div>
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