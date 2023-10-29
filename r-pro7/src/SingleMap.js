import { useState } from "react"

export default function SingleMap({name,f,yy,yy2}) {

  return (
    <>
    <div className="d-flex g-3 mt-4">
     <div key={f}>{name}</div>
     <button className="btn bg-info mx-3" onClick={
      ()=> yy2(name,f)
     }>Edit</button>
     <button className="btn bg-danger" 
     onClick={()=> yy(f)}
     >Delete</button>
        
    </div>
    </>
  )
}


