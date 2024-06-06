import React, { useEffect, useState } from "react";
import './Player.css';
import Back_icon from "../../assets/back-icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDg1YjI2MjBjNjMwMThhNjYzMmM2OWI0NzdmY2M0ZiIsInN1YiI6IjY2NTczYTk1NWU0ZjJkYmNhZjVjYTlmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K8IlaS1lRFHMFFmaPr3cHktw77eR5AZNZEO9M9QmSjE'
    }
  };

  const [loading,setLoading] = useState(false);

  useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results[0]))
  .catch(err => console.error(err));
  }, []);

  return (
    <div className="player">
      <img src={Back_icon} alt="Back icon" onClick={()=>{navigate(-1)}}/>
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;


