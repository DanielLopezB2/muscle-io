

function SearchBar() {
    return (
        <div className="max-w-4xl mb-20">
        
            <div className="mt-10 text-center">
                <h2 className="font-bold text-2xl">Looking for a specific exercise?</h2>
                <p className="mt-3 text-lg">We got you!</p>
            </div>

            
            <form class="min-w-[890px] mt-8">   
                <label for="default-search" class="mb-2 text-sm font-medium text-[#160B34] sr-only">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-[#160B34]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-[#160B34] border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#160B34] focus:border-[#160B34]" placeholder="Search exercises..." required />
                    <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-[#160B34] hover:bg-[#5945b6] focus:ring-4 focus:outline-none focus:ring-[#0b0c34] font-medium rounded-lg text-sm px-4 py-2 transition ease-in-out">Search</button>
                </div>
            </form>

        </div>
    )
}

export default SearchBar