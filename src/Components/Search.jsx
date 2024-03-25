import React from "react";
import useFetch from "../Hooks/useFetch";
import CardAnime from "./CardAnime";
import { useParams } from "react-router-dom";

const Search = () => {

    const {search} = useParams();
    const animes = useFetch(search)

    return(
        <>
        <div className="animes">
          {animes?.results.length > 0 ? (
       
          animes?.results.map((anime) => (
            <CardAnime anime={anime} key={anime.id} isRecent={false}/>
          ))
        
          ) : (
              <div className="empty">
              <h2>Searching...</h2>
              </div>
          )}
        </div>
         
      </>
    )
}

export default Search;