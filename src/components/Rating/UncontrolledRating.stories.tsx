import { UncontrolledRating } from './UncontrolledRating'
import React, {useState} from "react";
import { action } from '@storybook/addon-actions'
import {ratingValueType} from "../../App";

export default {
    title: 'Uncontrolled Rating',
    component: UncontrolledRating
};

const callback = action('onChange')

export const UncontrolledRatingDemo = () => <UncontrolledRating onChange={callback} defaultValue={0}/>
export const UncontrolledRating1 = () => <UncontrolledRating defaultValue={1} onChange={callback}/>
export const UncontrolledRating2 = () => <UncontrolledRating defaultValue={2} onChange={callback}/>
export const UncontrolledRating3 = () => <UncontrolledRating defaultValue={3} onChange={callback}/>
export const UncontrolledRating4 = () => <UncontrolledRating defaultValue={4} onChange={callback}/>
export const UncontrolledRating5 = () => <UncontrolledRating defaultValue={5} onChange={callback}/>

