import React, { useState } from 'react'
import Cell from './Cell'
import '../Style/Maze.css'



export default function Maze() {
    const[arr,setArr]=useState(4)
  return (
    <div id="ques-page">
        <div id="inputs">
          
            <label>Number of rows or columns:  (3-7)</label>
            <input type="number" min={3} max={6} maxLength ="1" value={arr} onChange={(e)=>{
              (e.target.value<7)?setArr(e.target.value):setArr(6)
              }}></input>
          
        </div>
        <div id="maze-whole" >
            <Cell arr={arr}/>
        </div>
    </div>
   
  )
}
