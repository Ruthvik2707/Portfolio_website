import React from 'react'
import './Navbar.css'
import git from './github.svg'
import linked from './linkedin.png'
import insta from './instagram.png'
import { Link } from 'react-router-dom'

function Navbar() {
  const handleClickScroll=()=>{
    const contacts=document.getElementById('contact');
    if (contacts){
      contacts.scrollIntoView({behavior:'smooth'});
    }
  }
  const handleClickScrollhome=()=>{
    const page=document.getElementById('page');
    if (page){
      page.scrollIntoView({behavior:'smooth'});
    }

  }
  const handleClickScrollabout=()=>{
    const about=document.getElementById('about');
    if (about){
      about.scrollIntoView({behavior:'smooth'});
    }
  }
  const handleClickScrollmy=()=>{
    const my=document.getElementById('my');
    if (my){
      my.scrollIntoView({behavior:'smooth'});
    }
  }
  const handleClickScrollwork=()=>{
    const work=document.getElementById('work');
    if (work){
      work.scrollIntoView({behavior:'smooth'});
    }
  }
  const handleClickScrollblog=()=>{
    const blog=document.getElementById('blog');
    if (blog){
      blog.scrollIntoView({behavior:'smooth'});
    }
  }
  
  ;
  return (
    <div>
      <div class="logo_info">
        <img  class="icon" src="https://img.icons8.com/?id=ucAIGFnVjuzs&size=2x" alt="icon"></img>
        <h1>Ruthvik</h1>
        <p>Web Developer</p>
      </div>
      <div class="nav-buttons-group">
        <Link class="idk" to="/home"><div class="nav_buttons" onClick={handleClickScrollhome}>Home</div></Link>
        <Link class="idk" to="/about"><div class="nav_buttons" onClick={handleClickScrollabout}>About</div></Link>
        <Link class="idk" to="/myskill"><div class="nav_buttons" onClick={handleClickScrollmy}>My skills</div></Link>
        <Link class="idk" to="/work"><div class="nav_buttons" onClick={handleClickScrollwork}>work</div></Link>
        <Link class="idk" to="/blogs"><div class="nav_buttons" onClick={handleClickScrollblog}>Blogs</div></Link>
        <Link class="idk" to="/contact" onClick={handleClickScroll}><div class="nav_buttons">contact</div></Link>
        <div class="nav_buttons"><a class="Link" target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/ruthvik-k-s-720a52232/"><img class="social linkedin" alt='1e'src={linked}></img></a></div>
        <div class="nav_buttons"><a class="Link" target="_blank" rel='noreferrer' href="https://github.com/Ruthvik2707"><img class=" social git_icon" alt='2e' src={git}></img></a></div>
        <div class="nav_buttons"><a class="Link" target="_blank" rel='noreferrer' href="https://instagram.com/sunny.ruthvik?igshid=Mzc0YWU1OWY="><img class=" social insta_icon" alt='3e' src={insta}></img></a></div>
      </div>
    </div>
  )
}

export default Navbar