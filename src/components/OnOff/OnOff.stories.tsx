
import { OnOff } from './OnOff'
import React, {useState} from "react";
import { action } from '@storybook/addon-actions'
import {ratingValueType} from "../../App";

export default {
    title: 'OnOff stories',
    component: OnOff
};

const onChangeHandler = action('onChange')

export const OnOffControlled = () => <OnOff />


