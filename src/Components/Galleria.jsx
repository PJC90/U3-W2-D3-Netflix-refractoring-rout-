import { Component } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

class Galleria extends Component{
    state = {
        film: [],
        loadPage:true,
    }
    
    componentDidMount = ()=>{
    this.getImg()
    }
    
    getImg = async()=>{
        try{
            const response = await fetch("http://www.omdbapi.com/?apikey=6aaf6af2&s=" + this.props.searchFilm)
            if(response.ok){
                const arrayOfFilm = await response.json()
                console.log(arrayOfFilm)
                //ora con setState salviamo l'array presente in Search di arrayOfFilm nell'array film
                this.setState({
                    film: arrayOfFilm.Search,
                    loadPage:false,
                })
                
            } else{
                throw new Error("errore nel recupero dei film"),
                this.setState({
                    loadPage:false,
                })
            }
        }catch(error){
            console.log("error",error)
            this.setState({
                loadPage:false,
            })
        }
    }  

    
    render(){
        
    const primiSei = this.state.film.slice(0, 6)
    return(
        <div>
            <h4 className="text-white mt-5 ms-4">{this.props.title}</h4>
            {this.state.loadPage && (
              <div className="text-center mb-2">
                <Spinner animation="grow" variant="light" />
              </div>
            )}
            <Row className="ms-3 gy-3 g-md-4 g-xl-3 justify-content-center">
                {primiSei.map((filmSingolo)=>{
                    return (
                        <Col xs={10} sm={6} md={4} xl={2} key={filmSingolo.imdbID}>
                            <Link to={"/movie-details/"+ filmSingolo.imdbID}>
                        <img src={filmSingolo.Poster} alt={"immagine:" + filmSingolo.Title} className="img-fluid h-100 w-100"/>
                        </Link>
                        </Col>
                    )
                })}
            </Row>
            
        </div>
    )
}
}

export default Galleria