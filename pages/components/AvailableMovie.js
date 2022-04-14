export default function AvailableMovie(props) {
    // TODO: Add more props to this component, such as movieId, movieTitle, etc.

    return (
        <div className="available-movie">
            <span>{props.movieId}</span>
        </div>
    )
}