import { Accordion } from './Accordion'
import React, {useState} from "react";
import { action } from '@storybook/addon-actions'

export default {
    title: 'Accordion',
    component: Accordion,
};

const onChangeHandler = action('onChange')

export const CollapsedAccordion = () => {
  return  <Accordion
        title={'Collapsed'}
        collapsed = {true}
        onChange={onChangeHandler}/>
}
export const OphangeAccordion = () => {
    return  <Accordion
        title={'Opened'}
        collapsed = {false}
        onChange={onChangeHandler}/>
}
export const AccordionDemo = () => {
    let [collapsedValue, setCollapsedValue] = useState(false);
    return  <Accordion
        title={'Opened'}
        collapsed = {collapsedValue}
        onChange={() => {
            setCollapsedValue(!collapsedValue);
        }}/>
}
