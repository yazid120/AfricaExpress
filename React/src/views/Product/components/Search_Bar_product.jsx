import React, { useState,useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import axios from "axios";

function SearchBarProduct({HandleFilter}){
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchSearchResults = async (searchInput) => {
      try {
        if (searchInput.trim() !== "") {
          const response = await axios.get('');
          setSearchResults(response.data.products);
        } else {
          // If search input is empty, clear the search results
          setSearchResults([]);
        }
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };
    fetchSearchResults("");
  }, []);

  console.log(searchResults)
  console.log(searchInput)
  return(
    <>
    <div className="w-full max-w-2xl ml-4 relative flex">
      <input type="text" name="search" id="search"
             className="w-full border border-primary border-r-0 pl-8 py-2 pr-3 rounded-l-md rounded
             focus:outline-none hidden md:flex" placeholder="search"
             value={searchInput}
             onChange={(event) => setSearchInput(event.target.value)}/>

        <span className="absolute right-4 top-3 text-lg text-gray-400">
          <BiSearchAlt/>
        </span>
    </div>
    {/* Display search results */}
    <ul>
        {searchResults.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </>
  )
}
export default SearchBarProduct;
