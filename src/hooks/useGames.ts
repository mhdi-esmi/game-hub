import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { FaLessThan } from "react-icons/fa";
import useData from "./usedata";

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

const useGames=()=>useData<Game>("/games")
   
export default useGames;