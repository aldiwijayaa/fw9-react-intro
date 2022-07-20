import React from "react"
import {Button} from "react-bootstrap"

const Count = ({number}) =>{
  React.useEffect(()=>{
    console.log(number);
  },[number])
    return(
    <>
    <h1 className="my-auto">{number}</h1>
    </>)
}

const App = () => {
  const [value, increment] =React.useState(0)
  return(
    <div className="parent d-flex justify-content-center alight-items-center">
      <div className="d-flex my-auto">
        <Button className="mx-5 size-btn" onClick={()=>value===0?increment(value+0):increment(value-1)}>Decrement</Button>
        {<Count number={value}></Count>}
        <Button className="mx-5 size-btn" onClick={()=>increment(value+1)}>increment</Button>
      </div>
    </div>
  )
}

export default App