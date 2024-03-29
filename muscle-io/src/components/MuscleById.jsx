import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';
import { fetchData } from '../services/apiService';
import Footer from "./Footer";


function MuscleById() {
    const { id } = useParams();

    const [data, setData] = useState([]);
    const hasFetchedRef = useRef(false);

    const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;
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
                setData([result]);
            };

            fetchDataFromAPI();
            hasFetchedRef.current = true;
        }
    }, []);
    
    return (
        <div className="inset-0 -z-10 w-full flex flex-col items-center justify-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">

            
            {data.map((item, index) => (
                <div key={index} className="mt-20 p-2 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row lg:max-w-6xl md:max-w-2xl md:flex-row max-w-80">

                    <img className="rounded-lg w-full" src={item.gifUrl}></img>

                    <div className="flex flex-col justify-between p-4 leading-normal text-sm">

                        <h4 className="text-lg md:text-3xl font-bold tracking-tight text-[#160B34] mb-8">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h4>
                        <p className="mb-3 font-normal text-[#160B34]"><span className="font-semibold">Body part: </span>{item.bodyPart.charAt(0).toUpperCase() + item.bodyPart.slice(1)}</p>
                        <p className="mb-3 font-normal text-[#160B34]"><span className="font-semibold">Equipment: </span>{item.equipment.charAt(0).toUpperCase() + item.equipment.slice(1)}</p>
                        <p className="mb-3 font-normal text-[#160B34]"><span className="font-semibold">Target: </span>{item.target.charAt(0).toUpperCase() + item.target.slice(1)}</p>

                        <div className="mb-3 font-normal text-[#160B34]">
                            <span className="font-semibold">Secondary muscles: </span>
                            {item.secondaryMuscles.reduce((acc, secondaryMuscle, index) => {
                                if (index > 0) {
                                    acc.push(', ');
                                }
                                acc.push(<span key={index}>{secondaryMuscle.charAt(0).toUpperCase() + secondaryMuscle.slice(1)}</span>);
                                return acc;
                            }, [])}
                            
                        </div>
                        
                        
                        <div className="mb-3 font-normal text-[#160B34]">
                            <span className="font-semibold">Instructions: </span>
                            <ul>
                                {item.instructions.map((instruction, index) => (
                                    <li key={index}>{index + 1}. {instruction}</li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            ))}

            <Footer />

        </div>
    )
}

export default MuscleById