import {Link} from "react-router-dom"
import PropTypes from "prop-types"

function Movie( {title, summary, coverImg, genres, url, rating}) {
    return(
        <div>
            <h3>
                <Link to="/">
                Back to Home
                </Link>
            </h3>
            <img src={coverImg}/>
            <h1>{title} {rating}</h1>
            <h4>{summary}</h4>
            <h2>Genres</h2>
            <ul>
                {genres.map((g) => <li key={genres}>{g}</li>)}
            </ul>
            <a href={url} target="blank">Watch Now</a>
        </div>
    )
}

Movie.propTypes ={
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    url: PropTypes.string.isRequired,
}

export default Movie;