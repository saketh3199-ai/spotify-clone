import { formatDuration, formatTimeAgo } from "../utils/utils"

const SongRow = (props) => 
{

    const {index,item,StoreSongDetails} = props

    const track = item.track

    const SendSongDetails = ()=>
    {
            StoreSongDetails(track)
    }

    return (
    <tr className="border-bottom border-dark" onClick={SendSongDetails}>

                                            <td>{index+1}</td>

                                            <td>
                                                {track.name}
                                            </td>

                                            <td>
                                                {track.album.name}
                                            </td>

                                            <td>
                                                {formatDuration(track.duration_ms)}
                                            </td>

                                            <td>
                                               {track.artists.map(a => a.name).join(', ')}
                                            </td>

                                            <td>
                                               {formatTimeAgo(item.added_at)}
                                            </td>

    </tr>


  )
}

export default SongRow