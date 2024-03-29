import { Link } from "react-router-dom";

function SearchResults({ results }) {
    console.log(results.length)
    return (
        <>
            <h4 className="md:text-xl font-semibold text-center mt-5 text-sm">Results</h4>
            {results && results.length > 0 ? (
                <ul className="lg:w-[890px] text-sm font-medium text-[#160B34] bg-white border border-gray-200 rounded-lg mt-3">
                    {results.map((item, index) => (
                        <li key={index} className="w-full px-4 py-3 border-b rounded-t-lg rounded-b-lg">
                            <Link to={`/muscle/${item.id}`}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)} - {item.target.charAt(0).toUpperCase() + item.target.slice(1)}</Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-center text-sm font-medium text-gray-500">No results found, try again with another term.</p>
            )}
        </>
    );
}

export default SearchResults;