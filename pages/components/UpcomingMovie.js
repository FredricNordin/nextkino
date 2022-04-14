export default function UpcomingMovie(props) {
    // TODO: Add more props to this component, such as movieId, movieTitle, etc.

    return (
        <div className="upcoming-movie">
            <span>{props.movieId}</span>
        </div>
    )
}