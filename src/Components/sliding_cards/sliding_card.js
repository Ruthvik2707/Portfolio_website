import React from 'react'
import './sliding_cars.css'
// import '@fortawesome/fontawesome-free/css/all.min.css';
// let activeIndex = 0;

// const groups = document.getElementsByClassName("card-group");

// const handleLoveClick = () => {
//   const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
  
//   const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
//         nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
        
//   currentGroup.dataset.status = "after";
  
//   nextGroup.dataset.status = "becoming-active-from-before";
  
//   setTimeout(() => {
//     nextGroup.dataset.status = "active";
//     activeIndex = nextIndex;
//   });
// }

//  const handleHateClick= ()=> {
//   const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;
  
//   const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
//         nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
  
//   currentGroup.dataset.status = "before";
  
//   nextGroup.dataset.status = "becoming-active-from-after";
  
//   setTimeout(() => {
//     nextGroup.dataset.status = "active";
//     activeIndex = nextIndex;
//   });
// }
function sliding_card() {
  return (
  <><div class='skill_text'><h1>My skills</h1></div><div class='mai'>  <div class="card-swiper">
      <div class="card-groups">
        <div class="card-group" data-index="0" data-status="active">
          <div class="little-card card">

          </div>
          <div class="big-card card">

          </div>
          <div class="little-card card">

          </div>
          <div class="big-card card">

          </div>
          <div class="little-card card">

          </div>
          <div class="big-card card">

            {/* <img  class='big' alt='react' src={R}></img> */}
          </div>
          <div class="little-card card">

          </div>
          <div class="big-card card">
            {/* <img  class='big' alt='node' src={N}></img> */}

          </div>
        </div>
        
          </div>
        </div>
      </div>
    </>


)
}

export default sliding_card;