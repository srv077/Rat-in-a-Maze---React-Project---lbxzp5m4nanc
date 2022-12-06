import React, { useState } from 'react'
import Cell from './Cell'
import '../Style/Maze.css'



export default function Maze() {
    const[arr,setArr]=useState(4)
  return (
    <div id="ques-page">
        <div id="inputs">
          
            <label>Number of rows or columns:</label>
            <input type="number" min={3} max={6} value={arr} onChange={(e)=>setArr(e.target.value)}></input>
          
        </div>
        <div id="maze-whole" >
            <Cell arr={arr}/>
        </div>
    </div>
   
  )
}
