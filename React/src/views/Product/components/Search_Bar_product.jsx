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
          const response = await axios.get(`http://localhost:8000/api/product/search/${searchInput}`);
          setSearchResults(response.data);
        } else {
          // If search input is empty, clear the search results
          setSearchResults([]);
        }
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };
    fetchSearchResults(searchInput);
  }, [searchInput]);

  /*console.log(searchResults)
  console.log(searchInput.length)*/
  return(
    <>
    <div className="w-full m-2">
    <div className="w-full relative flex">
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
    {searchResults.length > 0 && (
    <ul className="absolute w-3/5 mt-2 bg-white border border-gray-200 rounded-md shadow-md">
      {searchResults.map((product) => (
        <>
        <li key={product.id} value={product.id} className="flex items-center hover:bg-gray-100 cursor-pointer">
        <a href={`/product/article/${product.id}`} className="flex items-center w-full">
          <img src={`../src/assets/images/Products/${product.image}`} className="w-1/5 bject-cover" alt="Product Image" />
          <span className="px-4 py-2">{product.name}</span>
        </a>
        </li></>
      ))}
    </ul>
  )}</div>
    </>
  )
}
export default SearchBarProduct;
