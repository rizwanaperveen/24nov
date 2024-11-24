import React from 'react'

const Child = (props:any) => {
    console.log(props)
  return (
    <div>
       Passing Props Components from Parent to child.
        <h1 className='bg-slate-800 flex justify-center items-center p-5 text-white'>
          
           
            {props.name}
        </h1>
    </div>
  )
}

export default Child