import LatestMovie from "./LatestMovie";

export default function LatestReleases() {
    // List new movie releases available.
    // TODO: Add more props to this component, such as movieId, movieTitle, etc.

    return (
        <div className="live-now">
            <div className="title-text">
                <h2>Latest movie releases</h2>
            </div>
            <LatestMovie movieId="Movie 1" />
            <LatestMovie movieId="Movie 2" />
            <LatestMovie movieId="Movie 3" />
            <LatestMovie movieId="Movie 4" />
        </div>
    )
}