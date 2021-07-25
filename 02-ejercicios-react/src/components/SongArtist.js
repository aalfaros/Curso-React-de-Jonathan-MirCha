const SongArtist = ({ artist }) => {
  return (
    <section>
      <h3>{artist.strArtist}</h3>
      <img src={artist.strArtistThumb} alt={artist.strArtist} />
      <p>Año de nacimiento: {artist.intBornYear}</p>
      <p>País de nacimiento: {artist.strCountry}</p>
      <p>
        Género y estilo musical: {artist.strGenre} - {artist.strStyle}
      </p>
      <a
        href={`http://${artist.strWebsite}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {artist.strWebsite}
      </a>
      <h4>Biografía</h4>
      <p style={{ whiteSpace: 'pre-wrap' }}>
        {artist.strBiographyES || artist.strBiographyEN}
      </p>
    </section>
  )
}

export default SongArtist
