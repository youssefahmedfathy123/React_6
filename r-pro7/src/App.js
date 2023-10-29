import './cs.css'
import {useState,useEffect, useReducer} from 'react'
import SingleMap from './SingleMap'
import Alert from './Alert'

const ye = ()=>{
 let oop = localStorage.getItem('list')
 if(oop){
return JSON.parse(oop)
 }else{
  return [{name:'Youssef Zydan' , f : 0 }]
 }
}

function App() {
  let [val,setVal] = useState('')   
  let [count,setCount] = useState(1)          
  const [app,setApp] = useState(null)
  let [arr,setArr] = useState(ye)
  let [state,dispatch] = useReducer(reducer,null)
  const [alert,setAlert] = useState(false)
  const [currentNameEdit,setcurrentNameEdit] = useState()
  const [border,setBorder] = useState(false)
  const [conditions,setConditions] = useState({
  msg:'',type:'',mark:false
  })

function reducer(state,action) {
  switch(action.type){
    case 'delete': return setArr(arr.filter(x=>x.f != action.id)) ;
    case 'edit' : return setVal(action.name)
  }
}


const y = (id) => {
  dispatch({
    type: 'delete',
    id : id
  })
  fun('Delet Successfully',true,'red')
}

const y2 = (name,f) => {
  dispatch({
    type: 'edit',
    name : name 
  })
  setAlert(true)
  setcurrentNameEdit(f)
}


useEffect(()=>{
setApp(
  arr.map((x,index)=> <SingleMap {...x} key={index}  yy={y} yy2={y2} f={x.f} name={x.name} />)
)
},[arr])

useEffect(()=>{
 const y =  setTimeout(()=>{
      setBorder(false)
  },3000)
  return () => clearTimeout(y)
},[border])

const cc = () => {
  if(!val){
setBorder(true)
fun('Please, Enter a value here!',true,'red')
  }else{
    if(alert){

      for(let i = 0;i < arr.length;i++){
      if(arr[i].f == currentNameEdit){
      arr[i].name = val
      
      setArr(x => [...x])
      
      }
      }
      setAlert(false)
      fun('Edit successfully',true,'blue')
      
      }else{
      setArr(x => [...x,{name:val , f : count }])
      setCount(count + 1)
      fun('Added successfully',true,'blue')
      }
      setVal('')
      
  }
}

const clear = () => {
  setArr([])
  fun('Clear All Successfully',true,'bluee')
}
useEffect(()=>{
  localStorage.setItem('list',JSON.stringify(arr))
},[arr])

const fun = (msg="",mark=false,type="") => {
setConditions({msg:msg,mark:mark,type:type})
}

  return (
  <>
  <article className='rounded mt-5'>
    {conditions.mark && <Alert  {...conditions} removeFun={fun} array={arr}/>}
  <h1 className='text-center p-3 '>Grocery Bud</h1>
  <div className ='d-flex justify-content-center align-items-center'>
    <input  className={border ? 'border' : 'none'}
    onChange={(e)=>setVal(e.target.value)} value={val}
    placeholder='e.g. egges' type='text' />
    <button type='submit' className='btn p-2 bg-info' 
    onClick={cc}>{alert?'Edit':'Submit'}</button>
  </div>
{
app 
}

  <h5 className='text-center' style={{
    color:'red',
    letterSpacing:'2px' ,
    cursor:'pointer',
    opacity:'0.8' ,
    marginTop:'10px'
  }}
  onClick={clear}
  >Clear items</h5>
  </article>
  </>
    )};


export default App;

