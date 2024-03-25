import useFetch from "./useFetch"

export default function useEpisode (episodeId)
{
    const list = useFetch('watch/'+episodeId)
    const ep = list?.sources.find(obj=>obj.quality.includes('1080')) ? list?.sources.find(obj=>obj.quality.includes('1080')) : list?.sources.find(obj=>obj.quality.includes('720'))

    const index = episodeId.lastIndexOf('-')
    const findEp = episodeId.substring(index+1)

    const prevEp = Number(findEp)-1
    const prev = episodeId.replace(episodeId,localStorage?.getItem('current')+'-episode-'+prevEp)
    
    const nextEp = Number(findEp)+1
    const next = episodeId.replace(episodeId,localStorage?.getItem('current')+'-episode-'+nextEp)

    const anime = useFetch('info/'+localStorage.getItem('current'))
    const episodes = anime?.totalEpisodes

    return {prev,next,episodes,ep}
}