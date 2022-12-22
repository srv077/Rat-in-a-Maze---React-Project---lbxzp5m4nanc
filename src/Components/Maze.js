import React, { useState } from 'react'
import Cell from './Cell'
import '../Style/Maze.css'



export default function Maze() {
    const[arr,setArr]=useState(4)
  return (
    <div id="ques-page">
        <div id="inputs">
    
            <label>Number of rows or columns:  (2-6)</label>
            <input type="number" min={2} max={6} maxLength ="1" value={arr} onChange={(e)=>{
                  e.target.value<7?(e.target.value>=2?setArr(e.target.value):setArr(2)):setArr(6)
              }}></input>
          
        </div>
        <div id="maze-whole" >
            <Cell arr={arr}/>
        </div>
    </div>
   
  )
}
