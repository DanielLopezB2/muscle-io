import { Link, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';
import { fetchData } from '../services/apiService';
import Footer from "./Footer";


function MuscleGroup() {
    const { id } = useParams();

    const [data, setData] = useState([]);
    const hasFetchedRef = useRef(false);

    const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${id}?limit=150`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
            'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST
            }
    };

    useEffect(() => {
        if (!hasFetchedRef.current) {
            const fetchDataFromAPI = async () => {
                const result = await fetchData(url, options);
                setData(result);
            };

            fetchDataFromAPI();
            hasFetchedRef.current = true;
        }
    }, []);

    return (

        <div className="inset-0 -z-10 w-full flex flex-col items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">

            <h2 className="mt-16 text-lg md:text-3xl font-semibold flex flex-wrap justify-center">{id.charAt(0).toUpperCase() + id.slice(1)} exercises</h2>

            <div className="flex flex-wrap justify-center items-center lg:w-[1400px] md:w[800px] w-96">

                {data.map((item, index) => (

                <div key={index} className="p-4 hover:scale-105 transition ease-in-out">

                    <div className="w-40 md:w-56 lg:w-72 bg-white border border-gray-200 rounded-lg shadow mt-12">
                        <Link to={`/muscle/${item.id}`}>
                            <img className="rounded-t-lg" src={item.gifUrl} alt="" />
                        </Link>

                        <div className="p-5">
                            <Link to={`/muscle/${item.id}`}>
                                <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight text-[#160B34]">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h5>
                            </Link>

                            <p className="mb-3 text-sm md:font-normal text-gray-700"><span className="font-semibold">Equipment: </span>{item.equipment}</p>
                            <Link to={`/muscle/${item.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#160B34] rounded-lg hover:bg-[#5945b6] focus:ring-4 focus:outline-none transition ease-in-out">
                                Details
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                ))}

            </div>

            <Footer />

        </div>

        

    )
}

export default MuscleGroup