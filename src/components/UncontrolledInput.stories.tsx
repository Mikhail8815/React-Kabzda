
import React, {MouseEventHandler, useRef, useState} from "react";
import { action } from '@storybook/addon-actions'
import {OnOff} from "./OnOff/OnOff";

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


export const СontrolledInput = () => <input value={'Misha'}/>