import './leftSideBar.css'
function LeftSideBar(props: {movies:string[]}) {
    return( 
    <div id="topFiveMovies">
        <h2>Top 5 Movies</h2>
        <ol>
            <li>{props.movies[0]}</li>
            <li>{props.movies[1]}</li>
            <li>{props.movies[2]}</li>
            <li>{props.movies[3]}</li>
            <li>{props.movies[4]}</li>
        </ol>
        
    </div>
    )
}

export default LeftSideBar