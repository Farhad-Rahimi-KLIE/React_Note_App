import React, { useEffect, useState } from "react";
import Note from "./Note";

const Notes = () => {

  let initTodo;
  if (localStorage.getItem("Notes")===null) {
    initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem("Notes"))
  }

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [notes,setNotes] = useState(initTodo);
  const [searchitem,setSearchItem] = useState("")
  const [filter,setFilter] = useState(initTodo)
  const submit = (e)=>{
    e.preventDefault()
    if (!title || !desc) {
        alert("Title or Desc not be Empty..")
    }else{
        addNotes(title,desc)
    }
}

const addNotes = (title,desc)=>{
  let nytodos = {
    id : new Date().getTime().toString(),
    title : title,
    desc : desc,
  }
  setNotes([...notes,nytodos])
  setTitle("")
  setDesc("")
}


 const deleted = (index) =>{
  setNotes(notes.filter((e)=>{
    return e!==index;
  }))
  localStorage.setItem("Notes",JSON.stringify(notes));
    }

    useEffect(()=>{
      localStorage.setItem("Notes", JSON.stringify(notes))
    })

    const removeAll = ()=>{
      setNotes([])
    }

    const handleChange = (event)=>{
      setSearchItem(event.target.value)
      const res = filter.filter((curElem)=>{
        if (searchitem === "") {
          return curElem;
        }else if(curElem.title.toLowerCase().includes(searchitem.toLowerCase())){
          return curElem
        }
      })
      setNotes(res)
    }

  return (
    <div>
          <input type="text" name='text' className='rounded-sm ml-2 w-56 h-9 text-center bg-black text-white' value={searchitem} onChange={handleChange} placeholder='Enter for Search'/>

      <form onSubmit={submit}>
        <div className="form-group">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control w-[14rem] ml-4 mt-3 bg-black text-white font-bold"
            placeholder="Enter Title"
            id="title"
          />
        </div>
        <div className="form-group">
          <textarea
            name="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            id=""
            cols="30"
            rows="10"
            className="w-[14rem] h-28 ml-4 mt-2 border bg-gray-950 text-white font-bold"
            placeholder="Enter Description"
          ></textarea>
        </div>
        <button type="submit"className="btn btn-sm btn-primary text-slate-900 mt-1 ml-4 px-[4.5rem] font-bold">Add to Note</button>
        <div>
        <button type="submit"className="btn btn-sm btn-primary text-slate-900 mt-2 px-[4.5rem] font-bold" onClick={removeAll}>Remove All Notes</button>
        </div>
      </form>
      {
        notes.map((curElem)=>{
           return <Note notes={curElem} deleted={deleted}/>
        })
      }

    </div>
  );
};

export default Notes;
