import React from 'react'

function MovieList(props) {


/* 
    const titleClicked = (event) => {
        console.log(event);
    } */
    return (

        <div className='row'>

            {props.movies.map((movie) => (

                <div className='col-lg-3'  key={movie.id}>



                    <div className='card shadow-sm' style={{ width: '18rem',height: '50rem' }}>
                        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} className='card-img-top' alt="Ragnaroks" />
                        
                        
                        <div className='card-body'>
                            <h5 className='card-title' onClick={(e)=> console.log(e.pageY)}> {movie.title}</h5>
                            <p className='card-text '>{movie.overview}</p>
                            <div className='d-flex justify-content-between align-items-center '>
                                <button type='button' onClick={(event) => props.deleteMovieProp(movie)} className='btn btn-md btn-outline-danger '>Delete</button>
                                <h2><span className='badge bg-info'  >{movie.vote_average}</span></h2>
                            </div>
                        </div>


                    </div>
                    <br />
                </div>



            ))}




        </div>
    )

}
export default MovieList;