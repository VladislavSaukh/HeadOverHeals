import React,{useState} from 'react'
import './SearchBar.css'
function SearchBar (props) {
    const [term, setTerm]=useState('')
const search = (event)=>{
        event.preventDefault();
 props.onSearch(term)
}
const handleTermChange =(event) =>{
    setTerm(event.target.value)
}
        return (
            <div className="SearchBar">
                    <input onChange={handleTermChange} placeholder="Enter A Song, Album, or Artist"/>
                    <button type='submit' onClick={search} className="SearchButton">SEARCH</button>
            </div>
        )
}
export default SearchBar;