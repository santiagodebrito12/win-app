import React, { useEffect } from 'react'
import './Mision.scss';
import Aos from 'aos';
import 'aos/dist/aos.css'
import soccer from '../../../assets/soccer.svg';
import atletas from '../../../assets/atleta.svg';
import Money from '../../../assets/money.svg';
import Clubs from '../../../assets/clubs.svg';
import Agents from '../../../assets/agents.svg';


const Mision = () => {
    
    useEffect(()=>{
       Aos.init({duration:'2000'});
    },[])
    return (
    <div className="container contenedor-mision "  id="mision">
        <div className="contenedor-goal" >
            <div className="contenedor-text " data-aos="fade-up">

            <h2 className="titulo-seccion"  >THE GOAL</h2>
            <p >Our mission is to democratise investments in the sports industry, by providing an ecosystem in which everyone can participate in sports transactions while financing the career of young athletes.</p>
            </div>
            <div className="contenedor-img">
            <img src={soccer} alt="atleta"/>
            </div>
        </div>
      
        <div className="contenedor-goals">
            <div className="contenedor-goals-first-columns">
            <div className="contenedor-investors" data-aos="fade-rigth">
                <img src={Money} alt="money"/>
                <h3>For Investors</h3>
                <p>WIN will provide the wider global community with new ways to invest in sport, giving both fans and potential investors the tools to directly participate in one of the biggest and fastest growing industries.</p>
            </div>
            <div className="contenedor-athletes" data-aos="fade-left">
                <img src={atletas} alt="atletas"/>
                <h3>For Athletes</h3>
                <p>At WIN, we believe that every promising athlete should focus only on improving his skills and  becoming the best version of themselves.  Win Development Program acts as a scholarship or trust fund that provides the support and resources the player needs to thrive in their professional career. </p>
            </div>
            </div>
            <div className="contenedor-goals-first-columns">
            <div className="contenedor-clubs" data-aos="fade-rigth">
                <img src={Clubs} alt="atletas"/>
                <h3>For Clubs</h3>
                <p>Win provides Sport institutions a new financial system that allows them to engage with they’re fans and investors, who now will be able to support and take part in the growth of the clubs´ formation endeavour.</p>
            </div>
            <div className="contenedor-agents"  data-aos="fade-left">
                <img src={Agents} alt="atletas"/>
                <h3>For Agents</h3>
                <p>Agents can now focus on representing and promoting their clients, while the Win ecosystem provides everything the player needs to thrive.</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Mision