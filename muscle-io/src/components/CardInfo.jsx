import React, { useEffect, useRef, useState } from 'react';

function CardInfo() {

    const [data, setData] = useState([]);

    const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'aefbc55d59msha04102a013d7406p1a1c0bjsn95c4c9de058f',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
    };

    const hasFetchedRef = useRef(false);

    useEffect(() => {
        if (!hasFetchedRef.current) {

            const fetchData = async () => {
                try {
                    const response = await fetch(url, options);
                    if (!response.ok) {
                        throw new Error(`HTTP error: Status ${response.status}`);
                    }
                    const result = await response.json();
                    console.log(result);
                    setData(result);
                } catch (error) {
                    console.error(error);
                }
            };

            fetchData();
            hasFetchedRef.current = true;
        }
    }, []);

    return (
        <div className='grid grid-cols-3 gap-4 mb-10'>
    
            {data.map((item, index) => (
                <div key={index} className="min-w-72 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10 hover:scale-105 transition-all duration-500">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#160B34]">{item.charAt(0).toUpperCase() + item.slice(1)}</h5>
                    </a>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A list of {item} exercises</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#160B34] rounded-lg hover:bg-[#5945b6] focus:ring-4 focus:outline-none transition ease-in-out">
                        Check it out
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            ))}

        </div>
    )
}

export default CardInfo