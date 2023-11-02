import Galleria from "./Galleria"

const Home = ()=>{
    return(
        <>
          <Galleria title="Trending Now" searchFilm="lupin" />
          <Galleria title="Watch it Again" searchFilm="boris" />
          <Galleria title="New Releases" searchFilm="breaking bad" />
        </>
    )
}
export default Home