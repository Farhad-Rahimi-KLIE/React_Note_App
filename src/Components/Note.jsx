import React from 'react'
import klaro from '../images/delete.png'
const Note = ({notes, deleted}) => {
    const {id, title,desc} = notes;
  return (
<div className='container grid grid-cols-2 px-[15rem] pb-[5rem] -mt-11'>
<div className='w-[17rem] h-[10rem] bg-black ml-4 rounded-md'>
        <h2 className='text-white font-bold ml-5'>{title}</h2>
        <p className='text-white font-bold ml-5 w-[14rem]'>{desc}</p>
        <button><img src={klaro} alt="" className='w-5 mt-5 ml-4' onClick={()=>deleted(notes)}/></button>
</div>
</div>
  )
}

export default Note