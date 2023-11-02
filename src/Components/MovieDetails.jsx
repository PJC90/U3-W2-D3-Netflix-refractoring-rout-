import { useEffect, useState } from "react"
import { Col, Container, ListGroup, Row } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"

const OMDB_URL ="http://www.omdbapi.com/?apikey=6aaf6af2" 
//&i= 
//&s=
const STRIVE_URL ='https://striveschool-api.herokuapp.com/api/comments/'


const MovieDetails = ()=>{
    const params = useParams()
    console.log('PARAMS', params)
    console.log('film da far vedere ha id', params.movieId)
    //useParams ti da il parametro dopo lo/:
    
    const [movieDetailObj, setMovieDetailObj] = useState(null)
    const [movieComments, setMovieComments] = useState([])

    useEffect(()=>{

        getDetails()
        getComment()
    },[])
        //fetch dettagli film
        const getDetails = () => {
            fetch(OMDB_URL + "&i=" + params.movieId)
            .then(res=>{
                if(res.ok){
                    return res.json()
                }else{
                    throw new Error("Errore recupero dettagli film")
                }
            })
            .then(movieDetail =>{
                console.log("Moviedetail:", movieDetail)
                setMovieDetailObj(movieDetail)
            })
            .catch(err=> console.log("err", err))
        }
        //fetch commenti
        const getComment = () => {
            fetch(STRIVE_URL + params.movieId,
                {
                  headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNWEwYWY2ZTNkZDAwMTQ5NWU0NDAiLCJpYXQiOjE2OTgzMjI5NTUsImV4cCI6MTY5OTUzMjU1NX0.S3XpwGJo4mZ-c_9SYaND43OlA5okJ3bKNQI-4jLShDA',
                  },
                })
            .then(res=>{
                if(res.ok){
                    return res.json()
                }else{
                    throw new Error("Errore recupero commenti")
                }
            })
            .then(movieComments =>{
                console.log("commenti:", movieComments)
                setMovieComments(movieComments)
            })
            .catch(err=> console.log("err", err))
        }
    return(
         <div className="text-light d-flex justify-content-center">
            {
                movieDetailObj && (
                    
                        <Container className="my-5">
                            <Row>
                                <Col>
                                      <img src={movieDetailObj.Poster} alt="cis"/>
                                </Col>
                                <Col >
                                        <h3 className="text-danger">{movieDetailObj.Title}</h3>
                                        <p>{movieDetailObj.Plot}</p>
                                        <h5 className="text-danger">Actors:</h5>
                                        <p>{movieDetailObj.Actors}</p>
                                </Col>
                                <Col>
                                {movieComments && 
                                <ListGroup>
                                    { movieComments.map((comment)=>(
                                        <ListGroup.Item key={comment._id}>
                                            {comment.rate}-{comment.comment}
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>}
                                </Col>
                            </Row>
                        </Container>
                )
            }
         </div>
)
}
export default MovieDetails