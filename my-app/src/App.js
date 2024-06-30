import './App.css';
import ReviewCom from './Review';
import people from './data';
import { HiArrowCircleRight,HiArrowCircleLeft } from "react-icons/hi";

import {useState} from 'react'

const mod=people.length;



function App() {
     
  const [index,setIndex]=useState(0);

  const increaseIndex=(index)=>{
      let newIndex=(index+1)%mod;
      setIndex(newIndex);
  }

  const decreaseIndex=(index)=>{
    let newIndex=(index-1)
    if(newIndex==-1){
      newIndex=mod-1;
    }
    setIndex(newIndex);
}



  return (
    <>
      <section className="body">

        <h1>Our Reviews</h1>
        <section className="Box">


          <ReviewCom  id="review" Data={people[index]}></ReviewCom>
          <section className="icons">
          <button className='left-btn' onClick={()=>{decreaseIndex(index)}}><HiArrowCircleLeft className="XX"/></button>
          <button  className='right-btn' onClick={()=>{increaseIndex(index)}}> <HiArrowCircleRight className="XX"/> </button>
         
         </section>
        </section>
        



      </section>


    </>
  );
}

export default App;
