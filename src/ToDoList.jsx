import React from 'react';
const ToDoList=(props)=>{
   
    return( <>
    <div className='todoStyle'>
    
    <button className='delMe' placeholder='del' onClick={()=>{
        props.onSelect(props.id);
    }}> </button>
    <li>{props.text}</li>
    </div>
    </>
    );

};
export default ToDoList;