import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { FaLessThan } from "react-icons/fa";

export interface Platform{
  id:number
  name:string
  slug:string
}
 export interface Game {    
    id: number;
    name: string;
    background_image:string
    parent_platforms:{platform:Platform}[]
    metacritic:number
  }
  interface FetchGameresponse {
    count: number;
    results: Game[];
  }
const useGames=()=>{
    const [games, setGame] = useState<Game[]>([]);
    const [error, setError] = useState('');
    const [isLoading,setLoading] =useState(false);

    useEffect(() => {
      const controller=new AbortController();
      setLoading(true)
      apiClient
        .get<FetchGameresponse>("/games",{signal:controller.signal})
        .then((res) => {setGame(res.data.results)
          setLoading(false)})
        .catch((err) => {
            if (err instanceof CanceledError)  return;
            setError(err.message)
            setLoading(false)
          });

        return ()=>controller.abort()
    },[error]);
    // console.log(games);
    
    return {games,error,isLoading}
}
export default useGames;