import React from 'react'
import './style.css'

function Form({ term, location, handleInputChange, handleFormSubmit }) {
    return (
        <form>
        <div className="input-group">
 
        <input
            className="form-control"
            id="Name"
            type="text"
            value={term}
            placeholder="Enter store type"
            name="term"
            onChange={handleInputChange}
            required />


        <input
            className="form-control"
            id="Location"
            type="text"
            value={location} 
            placeholder="Enter location"
            name="location"
            onChange={handleInputChange}
            required />
        

        <div className="input-group-append">
            <button
                onClick={handleFormSubmit}
                type="submit"
                className="btn" style={{backgroundColor: "#2196f3", color: "white"}}
            >
            Search
            </button>
        </div>
        </div> 
        </form>
    )
}

export default Form;