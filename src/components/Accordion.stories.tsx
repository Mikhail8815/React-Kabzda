
import { Accordion } from './Accordion'
import React, {useState} from "react";
import { action } from '@storybook/addon-actions'

export default {
    title: 'Accordion',
    component: Accordion,
};


const onChangeHandler = action('onChange')

const onClickCallBack = action('Some item was clicked')

export const CollapsedAccordion = () => {
  return  <Accordion
        title={'Collapsed'}
        collapsed = {true}
        onChange={onChangeHandler}
        items={[]}
        onClick={onClickCallBack}
        />
}
export const OphangeAccordion = () => {
    return  <Accordion
        title={'Opened'}
        collapsed = {false}
        onChange={onChangeHandler}
        items={[{title: 'Misha', value: '1'}, {title: 'Lena', value: '2'}, {title: 'Vanya', value: '3'}]}
        onClick={onClickCallBack}
        />
}
export const AccordionDemo = () => {
    let [collapsedValue, setCollapsedValue] = useState(false);
    return  <Accordion
        title={'Opened'}
        collapsed = {collapsedValue}
        onChange={() => {
            setCollapsedValue(!collapsedValue);
        }}
        items={[{title: 'Misha', value: '1'}, {title: 'Lena', value: '2'}, {title: 'Vanya', value: '3'}]}
        onClick={onClickCallBack}
        />
}
