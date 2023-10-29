import { useEffect } from 'react'
import './cs.css'
export default function Alert({msg,type,removeFun,array}) {
    useEffect(()=>{
    const r =  setTimeout(()=>{
    removeFun()
        },3000)
       return ()  => clearTimeout(r)
    },[array])
  return (
    <div className={`col color-${type}`}>
    <p>{msg}</p>
    </div>
  )
}

