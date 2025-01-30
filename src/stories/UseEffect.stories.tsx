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
    }, [counter])
    
   return <>
        Hello, {counter} {fake}
        <button onClick={()=>setFake(fake + 1)}>+fake</button> 
        <button onClick={()=>setCounter(counter + 1)}>+counter</button> 
    </>
}
export const SetTimeoutExample = () => {

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    // console.log('SetTimeout')
    let sek = 1

    useEffect(()=> {

        setInterval(()=>{
            console.log('tick!')
            setCounter((state) => state +1)
        }, 1000)
    //    setTimeout(()=>{
    //     console.log('set timeout')
    //     document.title = 'huy'
    // }, 3000)
    // setInterval(()=>{
    //     sek+=1
    //     document.title = sek.toString()
    // }, 1000)
    }, [])
    
    
   return <>
        counter: {counter} fake: {fake}
        <button onClick={()=>setFake(fake + 1)}>+fake</button> 
        <button onClick={()=>setCounter(counter + 1)}>+counter</button> 
    </>
}