import './leftSideBar.css'
function LeftSideBar(props: {movies:string[]}) {
    return( 
    <div id="topFiveMovies">
        <h2>Top 5 Movies</h2>
        <ol>1. {props.movies[0]}</ol>
        <ol>2. {props.movies[1]}</ol>
        <ol>3. {props.movies[2]}</ol>
        <ol>4. {props.movies[3]}</ol>
        <ol>5. {props.movies[4]}</ol>
    </div>
    )
}

export default LeftSideBar