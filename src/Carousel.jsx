import React,{useState} from 'react'
import "./cstyle.css";

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1042423/pexels-photo-1042423.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1033729/pexels-photo-1033729.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/40896/larch-conifer-cone-branch-tree-40896.jpeg?auto=compress&cs=tinysrgb&w=600"
];
function Carousel() {
    const [current,setCurrent]=useState(0)

    function next(){
        if(current===images.length-1){
            setCurrent(0)
        }
        else{
            setCurrent(current+1)
        }
    }
    function prev(){
        if(current===0){
            setCurrent(images.length-1)
        }
        else{
            setCurrent(current-1)
        }
    }
    
  return (
    <div className='carousel-container'>
      <h1>Carousel</h1>
      <div className='slider'>
        <div className='left-arrow' onClick={prev}>⬅</div>
        <div className='right-arrow' onClick={next}>⮕</div>
        <div className='slides-wrapper' style={{ transform: `translateX(-${current * 100}%)` }}>
          {images.map((image, i) => (
            <div key={i} className={`slide ${current === i ? 'active' : ''}`}>
              <img src={image} alt="carousel" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel