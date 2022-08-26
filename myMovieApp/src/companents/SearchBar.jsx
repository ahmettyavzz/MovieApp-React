import React, { Component } from 'react'

class SearchBar extends Component {
  
 /*  state={     //app.jsx'e alındı
    searchQuery:""
  }
 */



  render() {
    return (
      <form onSubmit={(event) =>event.preventDefault()  }>
        <div className='form-row mb-5'>
          <div className='col-12'>
          <input onChange={this.props.searchMovieProp} 
          type="text" className="form-control" 
          placeholder="Search a movie"/>
          </div>
        </div>
      </form>
    )
  }
}

export default SearchBar;
