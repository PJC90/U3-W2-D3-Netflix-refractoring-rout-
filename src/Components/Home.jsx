import { Container } from "react-bootstrap"
import Galleria from "./Galleria"

const Home = ()=>{
    return(
        <Container fluid>
          <Galleria title="Trending Now" searchFilm="harry potter" />
          <Galleria title="Watch it Again" searchFilm="boris" />
          <Galleria title="New Releases" searchFilm="breaking bad" />
        </Container>
    )
}
export default Home