
import React, {useState} from "react";
import { action } from '@storybook/addon-actions'
import {ratingValueType} from "../../App";
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: 'UncontrolledOnOff stories',
    component: UncontrolledOnOff
};

const onChangeHandler = action('onChange')

export const OnOffFalse = () => <UncontrolledOnOff on={false} onClick={()=>onChangeHandler()}/>
export const OnOffTrue = () => <UncontrolledOnOff on={true} onClick={()=>onChangeHandler()}/>

export const OnOffDemo = () => {
    const [on, setOn] = useState<boolean>(false)
    return (
        <UncontrolledOnOff on={on} onClick={setOn}/> 
    )    
} 

