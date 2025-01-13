import React, {useState, useMemo, useEffect} from "react";

export default {
    title: 'useEffect demo'
}


export const SimpleExample = () => {

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('Example1')

    useEffect(()=> {
       console.log('useEffect')
       document.title = counter.toString()
    })
    
   return <>
        Hello, {counter} {fake}
        <button onClick={()=>setFake(fake + 1)}>+</button> 
    </>
}