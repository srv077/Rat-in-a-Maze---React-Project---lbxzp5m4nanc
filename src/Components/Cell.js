import React, { useCallback, useMemo, useState } from 'react'
import '../Style/Cell.css'
import Solution from './Solution';

export default function Cell(props) {
    const[path,setPath]=useState("Lot of");
    const matrix = React.useRef([])
    const handleSubmit=(e)=>{
        e.preventDefault();
        answers();
    }
    const answers=()=>{
        showAnswers();
    }
    const showAnswers=()=>{
        console.log(array);
    }
    const arr=[];
    for(let i=0;i<props.arr;i++){
        arr.push(i);
    }
    
    const select=((e)=>{
        e.target.classList.toggle("selected");
    })
    const selectind=(ind,id)=>{
        if(array[id][ind]==1){
            array[id][ind]=0;
        }else{
            array[id][ind]=1;
        }
    }
    
    
    const rerender=useCallback(()=>{
        let sel=document.querySelectorAll('.selected')
        if(sel.length>0){
            while(sel.length>0){
            sel[0].classList.toggle('selected');
            sel=document.querySelectorAll('.selected')
            }
        }
    },[props])
    let array=[]
    for(let i=0;i<props.arr;i++){
        rerender();
        let inside=[];
        for(let j=0;j<props.arr;j++){
            inside.push(1);
        }
        array.push(inside);
    }
    return (
        <>
        <div id="grid-whole">
           {
           arr.map((ele,id)=>(
              id==0?<div className='row'>
                {
                arr.map((ele,ind)=>(
                  ind==0?<div className='cell rat'></div>:<div className='cell' onClick={(e)=>{select(e);selectind(ind,id)}}></div>
                ))
                } 
              </div>:(id==arr.length-1?<div className='row'>
                {
                arr.map((ele,ind)=>(
                  ind==arr.length-1?<div className='cell house'></div>:<div className='cell' onClick={(e)=>{select(e);selectind(ind,id)}}></div>
                ))
                } 
              </div>:<div className='row'>
                {
                arr.map((ele,ind)=>(
                  <div className='cell' onClick={(e)=>{select(e);selectind(ind,id)}}></div>
                ))
                } 
              </div>)

            ))
            }
        </div>
        <div id="solution">
            <div id="solution-save">
               <label htmlFor="save-btn">You have to click save and check to get answer!....</label>
               <button type='submit' id="save-btn" name="save-btn" onClick={(e)=>{matrix.current=array}}>Save</button>
            </div>
            <Solution ques={matrix}/>
        </div>
        </>
    )
}
