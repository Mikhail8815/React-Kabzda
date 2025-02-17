import { log } from "console"
import { useEffect, useState } from "react"
import { DigitalClockView } from "./DigitalClockView"
import { AnalogClockView } from "./AnalogClockView"

type PropsType = {
   mode: 'digital' | 'analog'
}

export const getString = (date: any) => {
       return date < 10 ? '0'+date : date
    }

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

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

    let view

    switch (props.mode) {
        case 'analog':
                view = <AnalogClockView date={date}/>
                break;
        case 'digital':
                default:
          view = <DigitalClockView date={date}/>            
    }
  return <div>
       {view}    
        </div>
} 


export type ClockViewPropsType = {
        date: Date
}

