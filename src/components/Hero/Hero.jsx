import React from 'react'
import Hero_banner from "../../assets/Monster_Banner.jpg";
import Play_button from "../../assets/play-button.png";
import Info_button from "../../assets/info-button.png";
import './Hero.css'
import TitleCards from '../TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';
const Hero = () => {
  return (
    <div className="Hero">
        <img src={Hero_banner} alt="" className="Hero_banner" />
        <div className="Hero_caption">
          <img
            src="https://occ-0-2610-3647.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABej7QwW4jFaixPFYk98693LIbeSt9WLs6gRLOkpfqkIrlbsMM_ROWk6rL4YF_WprfsTdSD_H_Vu-mzZJn8I1EaiF6-ibCTncjslALLh9a6m9CVgg7HcTwm0J1LcWmR3yoYxiZxueSDMuFjLGStHHU5okqDOe2ddUAAf0Nf1gRGb8iXT2ziD7.webp?r=5e8"
            alt=""
            className="Hero_caption_image"
          />
          <p>
            The story about a woman who joins an organized crime ring and
            infiltrates the police as an undercover agent in order to find out
            the truth about her father's death.
          </p>
          <div className="hero-btns">
            <button className="btn"><img src={Play_button} alt=""/>Play</button>
            <button className="btn dark-btn"><img src={Info_button} alt=""/>More Info</button>
          </div>
          <TitleCards/>
          <div className="more-cards">
          <TitleCards title={"Only on Netflix"} category={"popular"}/>
          <TitleCards title={"Top Rated movies"} category={"top_rated"}/>
          <TitleCards title={"Upcoming"} category={"upcoming"}/>
        </div>
        <Footer/>
        </div>
      </div>
        
      
  )
}

export default Hero