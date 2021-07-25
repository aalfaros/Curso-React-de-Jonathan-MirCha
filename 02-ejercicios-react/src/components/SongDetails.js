import SongArtist from './SongArtist'
import SongLyrics from './SongLyrics'

const SongDetails = ({ search, lyric, bio }) => {
  return (
    <div>
      <h2>Detalles</h2>
      <SongArtist />
      <SongLyrics />
    </div>
  )
}

export default SongDetails
