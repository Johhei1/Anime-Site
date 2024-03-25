import React from "react";
import useFetch from "../Hooks/useFetch";
import CardAnime from "./CardAnime";
import { useState } from "react";

const Main = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const animes = useFetch('recent-episodes'+ '?page=' + currentPage, [currentPage])

    const nextPage = () => {
      setCurrentPage(currentPage + 1);
    };

    const previousPage = () => {
      if(currentPage>1)
        setCurrentPage(currentPage - 1);
      else return null
    };

    return(
        <>
        <div className="animes">
          {animes?.results.length > 0 ? (
       
          animes?.results.map((anime) => (
            <CardAnime anime={anime} key={anime.id} isRecent={true}/>
          ))
        
          ) : (
              <div className="empty">
              <h2>No animes found</h2>
              </div>
          )}
        </div>
         
        <div className="paging">
              <div className="page">
                <button onClick={previousPage} className={currentPage === 1 ? "fade" : ""}>{"<"}</button>
              </div>

              {animes?.hasNextPage && (
                  <div className="page">
                      <button onClick={nextPage}>{">"}</button>
                  </div>
              )}
         </div>
      </>
    )
}

export default Main;