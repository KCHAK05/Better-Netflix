import React,{useRef,useEffect,useState} from 'react'
import './TitleCards.css'
import cards_data from '../../assets/Movie_cards/Movie_cards'
import { Link } from 'react-router-dom'
const TitleCards = ({title,category}) => {
  
  const [apiData, setApiData]=useState([]);
 
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDg1YjI2MjBjNjMwMThhNjYzMmM2OWI0NzdmY2M0ZiIsInN1YiI6IjY2NTczYTk1NWU0ZjJkYmNhZjVjYTlmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K8IlaS1lRFHMFFmaPr3cHktw77eR5AZNZEO9M9QmSjE'
    }
  };
  
  const handlewheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));
    cardsRef.current.addEventListener('wheel',handlewheel);
  },[])



  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className='card-list' ref={cardsRef}>
        {apiData.map((card,index) => {
          return <Link to={`/player/${card.id}`} className='card' key={index}>
            <img src= {'https://image.tmdb.org/t/p/w500' + card.backdrop_path} alt=''/>
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards