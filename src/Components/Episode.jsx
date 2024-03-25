import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactPlayer from 'react-player';
import useEpisode from "../Hooks/useEpisode";
import {Button} from 'react-bootstrap'

const Episode = () => {
    const { episodeId } = useParams();
    const episode = useEpisode(episodeId);
    const navigate = useNavigate();
    
    const prev = () => {
        navigate('/watch/'+episode.prev)
        window.location.reload()
    }

    const info = () => {
        navigate('/info/'+localStorage.getItem('current'))
    }


    const next = () => {
        navigate('/watch/'+episode.next)
        window.location.reload()
    }

    
    return (
        <>
        {episode.ep === undefined }
        <br />
        <div className='video-wrapper'>
        <ReactPlayer
                className='video-player'
                url={episode.ep?.url}
                playing
                controls={true}
                volume={0.70}
                width={'100%'}
                height={'700px'}
                config={{
                   
                        playerVars: {
                            autoplay: 1,
                            controls: 1,
                            start: 0,
                            fs: 0,
                            modestbranding: 0,
                            rel: 0,
                            loop: 0,
                            playsinline: 1,
                            origin: window.location.origin,
                        },
                    
                }}
            />
        </div>
        <div className='button-wrapper'>
            <Button variant='light' className='grey-background' style={episode.prev.includes('episode-0') ? { display: 'none' } : null} onClick={prev}>Prev EP</Button>
            <Button variant='light' className='grey-background'onClick={info}>
                <img width={'20px'} src='/list.png' alt='List Icon' />
            </Button>
            <Button variant='light' className='grey-background' style={episode.next.includes(episode.episodes + 1) ? { display: 'none' } : null} onClick={next}>Next EP</Button>
        </div>
        </>

    );
};

export default Episode;
