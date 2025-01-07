
import React, {ChangeEvent, MouseEventHandler, useRef, useState} from "react";
import { action } from '@storybook/addon-actions'
import {OnOff} from "./OnOff/OnOff";
import { on } from "process";

export default {
    title: 'Input',
    component: 'Input',
};

const onChangeHandler = action('onChange')

export const UncontrolledInput = () => <input />

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    return <><input onChange={(event)=>{setValue(event.currentTarget.value)}}/> - {value}</>
}

export const GetValueTrackValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <><input ref={inputRef}/> <button onClick={save}>save</button> - actual value: {value}</>
}

export const ControlledInput = () => {

    const [parentValue, setParentValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChange}/>
   
}

export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState(true)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return <input type='checkbox' checked={parentValue} onChange={onChange}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>("2")

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={"1"}>Minsk</option>
        <option value={"2"}>Moscow</option>
    </select>
}


export const СontrolledInput = () => <input value={'Misha'}/>