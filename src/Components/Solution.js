import React, { useState } from 'react'
import '../Style/Solution.css'


export default function Solution(props) {
    const[now,setNow]=useState(props.ques)
    const[exist,setExist]=useState(true);
    const[show,setShow]=useState(false);
    const[ans,setAns]=useState([]);
    const handleSubmit=(e)=>{
      e.preventDefault()
      check();
    }
    const check = ()=>{
      const matrix=now;
      let n=now.current.length;
      solve(n,now.current);
      
    }
    const solve = (n,arr)=>{
        let solution=[];
        for(let i=0;i<n;i++){
          let solu=[];
          let a=0;
            for(let j=0;j<n;j++){
                solu.push(a);
          }
         solution.push(solu);
        }
        //the nth element of the nth array is always comming as 1 .i don't  know why
        solveMazeUtil(arr, 0, 0, solution,n)
        
    }
    const isSafe=(arr,  x, y,n)=>{

      // if (x, y outside maze) return false
      return (x >= 0 && x < n && y >= 0
              && y < n && arr[x][y] == 1);
    }
    const solveMazeUtil=(arr,x,y,sol,n)=>{
      {
        let now=sol;
        // if (x, y is in goal goal) return true
        if (x == n - 1 && y == n - 1
            && arr[x][y] == 1) {
            now[x][y] = 1;
            console.log("found");
            setAns(now);
            setExist(true);
            setShow(true);
            return true;
        }else{
            // Check if maze[x][y] is valid
            if (isSafe(arr, x, y,n) == true) {
              // Check if the current block is already part of solution path.   
              if (now[x][y] == 1){
                return false;
              }else{
                // mark x, y as part of solution path
                now[x][y] = 1;
              }
              /* Move forward in x direction */
              if (solveMazeUtil(arr, x + 1, y, now,n)){
                return true;
              }else{ 
                /* If moving in x direction doesn't give
                solution then Move down in y direction */
                if (solveMazeUtil(arr, x, y + 1, now,n)){
                   return true;
                }else if(solveMazeUtil(arr, x-1,y, now,n)){
                   return true;
                }else if(solveMazeUtil(arr, x,y-1,now,n)){
                  return true;
                }

              }
 
            /* If none of the above movements works then
            BACKTRACK: unmark x, y as part of solution
            path */
            sol[x][y] = 0;
            return false;
          }
        }
        setExist(false)
        setAns([]);
        return false;
    }
     
    }
  return (
    <div id="solution-container">
      <form onSubmit={handleSubmit}> 
        <button id="check-btn" type='submit'>Check</button>
        {exist?(<h3> Paths found !</h3>):(<h3>No path found !</h3>)}
      </form>
      <div id="grid-sol">
      {show?(<div id="grid-inside">
        { 
        ans.map(ele=>(
          <div className='row-sol'>
            {
            ele.map(item=>(
              item==1?<div className='cell-sol path'>✔</div>:<div className='cell-sol'>X</div>
            )) 
            }
          </div>
        ))
        }
      </div>):null
      }
      </div>
    </div>
  )
}
