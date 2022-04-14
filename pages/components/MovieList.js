import AvailableMovie from "./AvailableMovie";
import UpcomingMovie from "./UpcomingMovie";

export default function MovieList() {
    // List ALL movies.
    // TODO: Add more props to this component, such as movieId, movieTitle, etc.

    return (
        <div className="movies">
            <div className="title-text">
                <h2>Current at the cinema</h2>
            </div>
            <div className="movie-listing">
                <AvailableMovie movieId="Movie 1" />
                <AvailableMovie movieId="Movie 2" />
                <AvailableMovie movieId="Movie 3" />
                <AvailableMovie movieId="Movie 4" />
                <AvailableMovie movieId="Movie 5" />
                <AvailableMovie movieId="Movie 6" />
            </div>

            <div className="title-text">
                <h2>Upcoming movies</h2>
            </div>
            <div className="movie-listing">
                <UpcomingMovie movieId="Movie 1" />
                <UpcomingMovie movieId="Movie 2" />
                <UpcomingMovie movieId="Movie 3" />
                <UpcomingMovie movieId="Movie 4" />
                <UpcomingMovie movieId="Movie 5" />
                <UpcomingMovie movieId="Movie 6" />
            </div>
        </div>
    )
}