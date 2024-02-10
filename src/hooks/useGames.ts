import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { FaLessThan } from "react-icons/fa";
import useData from "./useData";
import { Genre } from "./useGenres";

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

const useGames=(selectedGenre:Genre|null,selectedPlatform:Platform|null)=>
useData<Game>("/games",{params:
  {genres:selectedGenre?.id,
  platforms:selectedPlatform?.id}}
,[selectedGenre?.id,selectedPlatform?.id])
   
export default useGames;