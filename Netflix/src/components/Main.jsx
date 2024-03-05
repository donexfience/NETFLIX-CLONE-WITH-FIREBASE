import axios from "axios"
import { useEffect, useState } from "react"
import requests from "../../request"
const Main=()=>{
    const [movies,setMovies]=useState([])
    const movie=movies[Math.floor(Math.random()*movies.length)]
    useEffect(()=>{
        axios.get(requests.requestPopular).then((response)=>{
            setMovies(response.data.results);
        })
    
    },[])
    const cuteString=(str,num)=>{
        if(str?.length>num){
            return str.slice(0,num)+'....';

        }
        else{
            return str;
        }

    }
    return(
        <div className="w-full h-[550px] text-white">
            <div className="w-full h-full">
                <div className="absolute h-[550px] w-full  bg-gradient-to-t from-black"></div>
                <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}alt={movie?.title}/>
                <div className="absolute w-full top-[20%] p-4 md:p-8">
                    <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
                    <div className="py-4"></div>
                <div>
                    <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">play</button>
                    <button className="border text-white border-gray-300 ml-4 py-2 px-5">Watch Later</button>
                </div>
                <div className="text-gray-400 text-sm mt-2">Realeased {movie?.release_date}</div>
                <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">{cuteString(movie?.overview,150)}</p>

                </div>
            </div>
       
        </div>
    )
}
export default Main;