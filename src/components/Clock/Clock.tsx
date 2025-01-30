import { log } from "console"
import { useEffect, useState } from "react"

type PropsType = {

}

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    function getString(date: any) {
       return date < 10 ? '0'+date : date
    }

    const secondString = getString(date.getSeconds())
    const minuteString = getString(date.getMinutes())
    const hourString = getString(date.getHours())

    useEffect(()=>{
       const intId = setInterval(()=>{
            setDate(new Date()) 
            console.log('Tick')
        }, 1000)
        return ()=>{
                clearInterval(intId)
        }
    }, [])
    
  return <div>
                <span>{hourString}</span>:
                <span>{minuteString}</span>:
                <span>{secondString}</span>
        </div>
} 