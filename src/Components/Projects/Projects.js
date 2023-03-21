import React from 'react'
import './Projects.css'
import algo from './algorithms.jpg';
// import kotlin from './Kotlin.jpg';
import mob from './mobile.jpg';
import cs from './csswinner.png';
import w from './wheather.png';
import acc from './acc.jpg';
import beacon from './beacon.jpg';
function Projects() {
  return (
    <div class='ma'>
      <div class='head'><h1>Projects</h1></div>
      <div class="container">
        <div  class="afap one"><img class='image' src={mob} alt="1p"></img></div>
        <div  class="afap two"><img class='image' src={algo} alt="2p"></img></div>
        <div class="afap three"><img class='image' src={cs} alt="3p"></img></div>
        <div class="afap four"><img class='image' src={beacon} alt='4p'></img></div>
        <div class="afap five"><img class='image' src={acc} alt='5p'></img></div>
        <div class="afap six"><img class='image' src={w} alt='6p'></img></div>
        <div class="afap seven"></div>
      </div>
    </div>
  )
}

export default Projects