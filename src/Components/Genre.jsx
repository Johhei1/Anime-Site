import React, { useState } from "react";
import useFetch from "../Hooks/useFetch";
import CardAnime from "./CardAnime";
import { useParams } from "react-router-dom";

const Genre = () => {
    const { genre } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const animes = useFetch('genre/' + genre + '?page=' + currentPage, [currentPage]);

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const previousPage = () => {
      if(currentPage>1)
        setCurrentPage(currentPage - 1);
      else return null
  };

    return (
        <>
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
            <div className="animes">
                {animes?.results.length > 0 ? (
                    animes?.results.map((anime) => (
                        <CardAnime anime={anime} key={anime.id} isRecent={false} />
                    ))
                ) : (
                    <div className="empty">
                        <h2>Searching...</h2>
                    </div>
                )}
            </div>

            
            
        </>
    );
}

export default Genre;
