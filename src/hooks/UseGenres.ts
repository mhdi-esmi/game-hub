import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Game } from "./UseGames";

interface Genre{
    id:number,
    name:string
}
interface FetchGenresresponse{
    count:number,
    results:Genre[]
}

const UseGenres=()=>{
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState('');
    const [isLoading,setLoading] =useState(false);

    useEffect(() => {
      const controller=new AbortController();
      setLoading(true)
      apiClient
        .get<FetchGenresresponse>("/genres",{signal:controller.signal})
        .then((res) => {setGenres(res.data.results)
          setLoading(false)})
        .catch((err) => {
            if (err instanceof CanceledError)  return;
            setError(err.message)
            setLoading(false)
          });
            console.log(genres);
            
        return ()=>controller.abort()
    },[error]);
    // console.log(games);
    
    return {genres,error,isLoading}
}
export default UseGenres;