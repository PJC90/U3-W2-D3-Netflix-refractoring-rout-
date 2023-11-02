import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const MovieDetails = ()=>{
    const params = useParams()
    console.log('PARAMS', params)
    const navigate = useNavigate()
  
    console.log('film da far vedere ha id', params.movieId)

const [filmId, setFilmId] = useState(null)

    useEffect(()=>{
        const movieIndex = params.movieId
        console.log("id film:", movieIndex)
    },[])
    return(
        <>
    <div>ciao</div>
    <div>ciao</div>
    <div>ciao</div>
    <div>ciao</div>
    <div>ciao</div>
    <div>ciao</div>
    <div>ciao</div>
    <div>ciao</div>
    <div>ciao</div>
    <div>ciao</div>
    <div>ciao</div>
    <div>ciao</div>
    </>
)
}
export default MovieDetails