import React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import { useContext } from 'react';
import Context from '../Context/Context';
import CardAnime from "./CardAnime";

const Info = () => {
    const { id } = useParams();
    const anime = useFetch('info/' + id);
    const name = id.length > 15 ? id.slice(0, 10) : id;
    const similar = useFetch(name);
    const similarResults = similar?.results.slice(1, 5);
    const navigate = useNavigate();
    const { endIndex, setEndIndex } = useContext(Context);
    const cut = anime?.episodes.slice(0, endIndex);

    const showMore = () => {
        anime?.totalEpisodes > 300 ?
            setEndIndex(endIndex + 250) :
            setEndIndex(endIndex + 100);
    };

    return (
        <div className='info-container'>
            <div className='info-card mt-2'>
                {anime === undefined}
                <br />
                <div className='p-2 mt-5 text-center'>
                    <div>{anime?.type} - {anime?.status === 'Ongoing' ?
                        <small style={{ color: 'lightgreen' }}>{anime?.status}</small> :
                        <small style={{ color: 'red' }}>{anime?.status}</small>} - {anime?.totalEpisodes} Episodes</div>
                    <hr className='mx-5 mt-1 mb-2' />
                    <div className='p-1'>{anime?.title}</div>
                    <hr className='mx-5 mt-2' />
                    <img className='anime-image' src={anime?.image} alt={anime?.title} />
                    <hr className='mx-5 mt-4' />
                    <div className='p-3'>{anime?.description}</div>
                    <hr className='mx-5 mt-1' />
                    <div>Released in {anime?.releaseDate}</div>
                </div>
            </div>
            <div className='info-card-episodes text-center mt-2'>
                <div className='mb-0'>Episodes</div>
                <div className='p-4'>
                    {cut?.map(ep => (
                        <button key={ep.id} className='episode-button m-1' onClick={() => navigate('/watch/' + ep.id)}>{ep.number}</button>
                    ))}
                    <button className='show-more-button' style={anime?.totalEpisodes < endIndex ? { display: 'none' } : null} onClick={showMore}>show more</button>
                </div>
            </div>
            <div className='related-section text-center py-4 px-3 mt-2'>
                <div className='related-title mb-2 mt-0'>Related</div>
                <div className="row g-3 related-row">
                    {similarResults?.map(obj => (
                        <div key={obj.id} className="col-xs-2 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <CardAnime anime={obj} isRecent={false} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Info;
