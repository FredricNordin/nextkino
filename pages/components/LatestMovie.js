export default function LatestMovie(props) {
    // TODO: Add more props to this component, such as movieId, movieTitle, etc.

    return (
        <div className="latest-movie">
            <span>{props.movieId}</span>
        </div>
    )
}