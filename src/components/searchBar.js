import React, { Component } from 'react';

class SearchBar extends Component {
    render() { 
        let { handleChange, handleSearch } = this.props;
        return (
               <div className="d-flex align-items-center gap-4 mb-2 bg-dark p-1 bg-opacity-50 ">
            <img onClick={()=> { const baseSearch='Latest music'; this.props.handleHome(baseSearch)}} style={{ cursor : 'pointer' }} className ="w-25  " src = { require('../images/mlogo.png') } alt="MushfiqVideoTube Logo" /> 
          <input
            onChange={handleChange}
            placeholder="Search for videos..."
            className="p-3 w-75 mx-2 border rounded-5 border-danger fw-semibold fs-5 border-5"      
          />
          <button
            onClick={handleSearch}
            className="btn btn-danger px-5 py-3 border border-3 boarder-light rounded-pill" style={{height:'75%'}}
          >
            Search
          </button>
        </div>
        );
    }
}
 
export default SearchBar;