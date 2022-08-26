import React from 'react'
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import axios from 'axios';
require('dotenv').config()

//console.log(process.env.REACT_APP_API_KEY);

class App extends React.Component {

    state = {
        movies:[],
        searchQuery: ""
        
        }


async componentDidMount(){
    const response =await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
 // const response =await axios.get(`https://api.themoviedb.org/3/list/8214886?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)

   // console.log(response.data.items)
    this.setState({movies: response.data.results})   //movies stateini response'dan gelen movie ile değiştir.
  }

        
deleteMovie = (movie) =>{
   const newMovieList = this.state.movies.filter(
    m=>m.id !== movie.id
   );
   this.setState({
    movies: newMovieList
   })
}
 
searchMovie= (event) =>{
  this.setState({searchQuery: event.target.value})
}

  render() {

     let filteredMovies = this.state.movies.filter(
      (movie) =>{
        return movie.title.toLowerCase().indexOf(this.state.searchQuery.toLowerCase() ) !== -1 
    }
    ) 

    return (
      <div className='container'>
        <div className='row'>
            <div className='col-lg-12'>
               <SearchBar searchMovieProp={this.searchMovie}></SearchBar> 
            </div>
        </div>
        <MovieList movies={filteredMovies} deleteMovieProp={this.deleteMovie}></MovieList>
      </div>
    )
  }
}

export default App;