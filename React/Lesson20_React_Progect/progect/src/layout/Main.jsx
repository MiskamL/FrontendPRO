import React from "react";
import MoviesList from "../components/MoviesList";
import Loader from "../components/Loader";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component {

    state = {
        movies: [],
        loading: false
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=max&page=1`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search }))
    }

    searchMovies = (str, type = 'all') => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str.trim() ? str : 'max'}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search }))
            .then(()=> this.setState({loading: false}))
    }

    render() {
        return (
            <main className="container content">
                <Search searchMovies={this.searchMovies}/>
                {
                this.state.loading ?
                    <Loader /> :
                    <MoviesList movies={this.state.movies}/>
                    
                }
            </main>
        )
    }
}
export default Main