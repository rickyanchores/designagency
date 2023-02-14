import React from 'react'
import Card from '../../Components/Card/Card';

const About = (props) => {

  const team = [
    {
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F682365781030626159%2F&psig=AOvVaw1eViH_BeNzdvEpPv_zHsEz&ust=1676500134716000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNjow-mHlv0CFQAAAAAdAAAAABAE",
      name: "Deku",
      role: "Vigilante"
    },
    {
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnaruto.fandom.com%2Fwiki%2FNaruto_Uzumaki&psig=AOvVaw0sMRzICPC9cZMOMu8koSgU&ust=1676500149701000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMjDx_GHlv0CFQAAAAAdAAAAABAD",
      name: "Naruto",
      role: "Hokage"
    },
    {
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3De8U8PwrvDIk&psig=AOvVaw035qQFiC4Ys_Csin6tVaJS&ust=1676500162834000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPi73PeHlv0CFQAAAAAdAAAAABAJ",
      name: "Vash",
      role: "Outlaw"
    }
  ]

  return (
    <div className='About'>
        <h3>About</h3>
        <p>this is about</p>
        <div className="team">
          <Card image={team[0].image} name={team[0].name} role={team[0].role}/>
          <Card image={team[1].image} name={team[1].name} role={team[1].role}/>
          <Card image={team[2].image} name={team[2].name} role={team[2].role}/>
        </div>
    </div>
  )
}

export default About;