import React from "react";
import useFetch from "../Hooks/useFetch";

const Genres = () => {

    const genres = useFetch("genre/list")

    return(
        <>
        <ul className="genres-list">
            {genres?.length > 0 ? (
                genres?.map((genre) => (
                <li className="genres-item" key={genre.id}>
                    <a className="genres-link" href={`/genres/${genre.id}`}>{genre.title}</a>
                </li>
                ))
            ) : (
                <div className="empty">
                <h2>Searching...</h2>
                </div>
            )}
        </ul>
         
      </>
    )
}

export default Genres;