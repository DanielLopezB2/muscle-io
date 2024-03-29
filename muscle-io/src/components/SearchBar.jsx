import SearchResults from "./SearchResults"
import { useState } from "react"
import { fetchData } from '../services/apiService';

function SearchBar() {

    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const url = `https://exercisedb.p.rapidapi.com/exercises/name/${searchValue}?limit=10`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
                'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST
            }
        };

        const result = await fetchData(url, options);
        setSearchResults(result);
    };

    return (
        <div className="md:max-w-4xl mb-10 max-w-80">
        
            <div className="mt-10 text-center">
                <h2 className="font-bold md:text-2xl text-lg">Looking for a specific exercise?</h2>
                <p className="mt-3 text-sm md:text-lg">We got you!</p>
            </div>

            
            <form className="lg:min-w-[890px] md:min-w-[600px] min-w-full max-w-full mt-8" onSubmit={handleSubmit}>   
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-[#160B34] sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-[#160B34]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input 
                        type="search"
                        className="block w-full p-4 ps-10 text-sm text-[#160B34] border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#160B34] focus:border-[#160B34]" 
                        placeholder="Search exercises..." 
                        required
                        value={searchValue}
                        onChange={handleSearchChange}
                    />
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-[#160B34] hover:bg-[#5945b6] focus:ring-4 focus:outline-none focus:ring-[#0b0c34] font-medium rounded-lg text-sm px-4 py-2 transition ease-in-out">Search</button>
                </div>

            </form>

            {searchResults.length > 0 && <SearchResults results={searchResults} />}

            

        </div>
    )
}

export default SearchBar