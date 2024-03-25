import { useId } from 'react'
import { Button} from 'react-bootstrap'
import { useNavigate } from "react-router-dom"


const CardAnime = ({anime, isRecent}) =>
{
    const navigate = useNavigate()
    const id = useId()
    
    const watch =()=>
    {        
        localStorage.removeItem('current')
        localStorage.setItem('current',anime.id)
        navigate("/watch/"+anime.episodeId)
    }

    const info =()=>
    {
        localStorage.removeItem('current')
        localStorage.setItem('current',anime.id)
        navigate("/info/"+anime.id)
        window.location.reload()
    }

    return (
        <>
        {
            isRecent
                ?
                <div className="card" key={id} onClick={watch} style={{ backgroundColor: 'dark', cursor: 'pointer', padding: '10px', minWidth: '200px', border: '1px solid dark' }}>
                    <div >
                    <Button className='epNumber' value={anime.id} variant='warning'>{anime.episodeNumber || anime.releaseDate}</Button>
                    </div>
                    
                    <div>
                    <img src={anime.image !== "N/A" ? anime.image : "https://via.placeholder.com/400"} alt={anime.title} width={'100px'} />
                    </div>
                
                    <div className='info'>
                    <h3>{anime.title}</h3>
                    </div>
                </div>
                :
                <div className="card" id={id} onClick={info} style={{ backgroundColor: 'dark', cursor: 'pointer', padding: '10px', minWidth: '110px', border: '1px solid dark' }}>
                    <div>
                        <Button className='epNumber' value={anime.id} variant='warning'>{anime.subOrDub || anime.released || 'TOP'}</Button>
                    </div>
                    
                    <div>
                        <img src={anime.image} alt={anime.title} width={'100px'} />
                    </div>

                    <div className='info'>
                        <h3 className='text-center fs-6 text-truncate text-white'>{anime.title}</h3>
                        <p className='release'>{anime.releaseDate}</p>
                    </div>
                 </div>

        }
    </>
    )
}

export default CardAnime