import { useContext, useEffect, useState } from "react";
import Context from "../Context/Context";

export default function useFetch (link)
{
    const {baseURL} = useContext(Context)
    const [list,setList] = useState()

    const animeFetch = async () => {
        const response = await fetch(baseURL+link);
        const data = await response.json();
    
        setList(data);
      };
    

    useEffect(() => {
        animeFetch();
    }, [link])
    

    return list
}