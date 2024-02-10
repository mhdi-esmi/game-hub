import useData from "./usedata";

interface Genre{
    id:number,
    name:string
}

const useGenres = () => useData<Genre>("/genres");
export default useGenres;