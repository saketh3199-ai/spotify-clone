import { formatDuration } from "../utils/utils"

const AlbumSongRow = (props) => {
  const { index, track, albumImage, StoreSongDetails } = props

  const SendSongDetails = () => {
    // Track objects inside an album's tracks.items have no nested `album` field
    // (since the whole response IS the album), so we attach the cover image
    // manually here to keep the object shape consistent with the playlist screen's
    // currentTrack (which the bottom player reads from).
    StoreSongDetails({
      ...track,
      album: { images: [{ url: albumImage }] }
    })
  }

  return (
    <tr className="border-bottom border-dark" onClick={SendSongDetails} style={{ cursor: 'pointer' }}>
      <td>{index + 1}</td>
      <td>{track.name}</td>
      <td>{formatDuration(track.duration_ms)}</td>
      <td>
        {/* Simple popularity bar using filled/empty block characters */}
        <span className="text-white-50" style={{ letterSpacing: '2px' }}>
          {'▮'.repeat(Math.round(track.popularity / 10))}
          {'▯'.repeat(10 - Math.round(track.popularity / 10))}
        </span>
      </td>
    </tr>
  )
}

export default AlbumSongRow