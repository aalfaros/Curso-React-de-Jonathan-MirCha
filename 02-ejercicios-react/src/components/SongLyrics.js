const SongLyrics = ({ title, lyrics }) => {
  return (
    <section>
      <h3>{title}</h3>
      <blockquote style={{ whiteSpace: 'pre-wrap' }}>{lyrics}</blockquote>
    </section>
  )
}

export default SongLyrics
