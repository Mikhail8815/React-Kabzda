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


export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1)

    console.log('Component rendered' + " " + counter)

    useEffect(()=> {
       console.log('Effect occured' + " " + counter)

       return () => {
        console.log("RESET EFFECT" + " " + counter)
       }
    }, [])

    const increase = () => {setCounter(counter + 1)}
    
   return <>
         Hello counter: {counter} <button onClick={increase}>INC</button>
    </>
}

export const KeysTrackerExample = () => {

    const [text, setTeaxt] = useState("")

    console.log('Component rendered' + " " + text)

    useEffect(()=> {
        const handler = (e: KeyboardEvent) => {
                console.log(e.key)
                setTeaxt(text + e.key)
        }
       window.document.addEventListener('keypress', handler)
       return () => {
        window.document.removeEventListener('keypress', handler)
       } 
    }, [text])

   return <>
         Hello: {text} 
    </>
}