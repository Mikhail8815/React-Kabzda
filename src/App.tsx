import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";

export type ratingValueType = 0|1|2|3|4|5

function App() {
    let [ratingValue, setRatingValue] = useState<ratingValueType>(0);
    let [collapsedValue, setCollapsedValue] = useState<boolean>(false);
    const [on, setOn] = useState<boolean>(false)

    return (
        <div>
            {/*<Accordion1 title={'Zagolovok'} collapsed/>*/}
            <Accordion title={'Zagolovok'} collapsed ={collapsedValue} onChange={() => {setCollapsedValue(!collapsedValue)}}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<UncontrolledAccordion title={'Zagolovok'}/>*/}
            <OnOff />
            {/*<UncontrolledOnOff on={on} onClick={setOn}/>*/}
            {/*<UncontrolledRating />*/}
        </div>
    );
}






export default App;
