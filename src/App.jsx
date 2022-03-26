import React, { useState } from 'react'
import ToDoList from './ToDoList';
import './index.css'
const App=()=>{
    const [InList,setLIst]= useState("");
    const [items,setItems]= useState([]);
    const textCall=(event)=>{
        setLIst(event.target.value);

    };
    const listItem=()=>{
        setItems((oldItems)=>{
       return [...oldItems, InList];
        });
        setLIst("");
    };
    
        const deleteItems=(id)=>{
            console.log("DEleted");
            setItems((oldItems)=>{
                return oldItems.filter((arrEle,index)=>{
                    return index !== id;
                })
            })
        }
return(
<> 
<div className='main-div'>
    <div className='div'>

<br/>
<input type='text' placeholder='Add Items' onChange={textCall} value={InList  } className= "takeIn"/>
<button onClick={listItem} className='plus'>  </button>
<ol>

{items.map((valt,index)=>{
    return <ToDoList key={index}
     id={index}
      text={valt}
     onSelect={deleteItems} />
})}  

</ol>

    </div>

</div>
</>
);
}
export default App;
