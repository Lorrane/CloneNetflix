import React from "react";
import './styles.css';

function Spotlight({ data }) {

    var date = new Date(data.first_air_date);
    var genres = [];
    for (let i in data.genres) {
        genres.push(data.genres[i].name);
    }

    return (
        <section className="spotlight" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path}`
        }}>
            <div className="verticalTransparent">
                <div className="horizontalTransparent">
                    <div className="spotlightName">{data.original_name}</div>
                    <div className="spotlightInfos">
                        <div className="points">{data.vote_average} pontos</div>
                        <div className="year">{date.getFullYear()}</div>
                        <div className="seasons">{data.number_of_seasons} temporada{data.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="description"> {data.overview} </div>
                    <div className="button">

                    </div>
                    <div className="genres">
                        <strong>Gêneros: </strong>{genres.join(', ')}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Spotlight;