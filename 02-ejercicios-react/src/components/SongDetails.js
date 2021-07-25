import SongArtist from './SongArtist'
import SongLyrics from './SongLyrics'
import Message from './Message'

const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null

  return (
    <>
      {bio.artists ? (
        <SongArtist artist={bio.artists[0]} />
      ) : (
        <Message
          msg={`Error ${bio.status || ''}: ${
            bio.statusText || 'No se encuentra información '
          } al buscar el artista <em style="color: lightyellow">'${
            search.artist
          }'</em>`}
          bgColor="#dc3545"
        />
      )}
      {lyric.error || lyric.err || lyric.name === 'AbortError' ? (
        <Message
          msg={`Error ${lyric.status}: ${lyric.statusText} al buscar la canción <em style="color: lightyellow">'${search.song}'</em>`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyrics title={search.song} lyrics={lyric.lyrics} />
      )}
    </>
  )
}

export default SongDetails
