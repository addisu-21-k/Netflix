import React from 'react'
import Row from '../Row/Row'
import Requests from '../../../Utils/Requests'
function RowList() {
  return (
    <>
      <Row 
        title="Netflix Original"
          fetchUrl={Requests.fetchNetflixOriginals}
      />
       <Row 
        title="Top Rated Movies"
          fetchUrl={Requests.fetchTopRatedMovies}
      />
        <Row 
        title="Action Movies"
          fetchUrl={Requests.fetchActionMovies}
      />
        <Row 
        title="Comedy Movies"
          fetchUrl={Requests.fetchComedyMovies}
      />
        <Row 
        title="Horror Movies"
          fetchUrl={Requests.fetchHorrorMovies}
      />
        <Row 
        title="Romance Movies"
          fetchUrl={Requests.fetchRomanceMovies}
      />
        <Row 
        title="Documentaries"
          fetchUrl={Requests.fetchDocumentaries}
      />
      <Row 
        title="Tv Show"
          fetchUrl={Requests.fetchTvShow}
      />
    </>
  )
}

export default RowList
