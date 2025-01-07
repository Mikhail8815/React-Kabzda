import { UncontrolledAccordion } from './UncontrolledAccordion'
import React, {useState} from "react";
import { action } from '@storybook/addon-actions'

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
};


const onChangeHandler = action('onChange')

export const UncontrolledAccordionDemo = () => {
  return  <UncontrolledAccordion
        title={'Menu'}/>
}
