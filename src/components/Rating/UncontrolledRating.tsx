import React, {useState} from "react";
import { ratingValueType } from "../../App";

type UncontrolledRatingProps = {
    defaultValue?: ratingValueType,
    onChange: (value: ratingValueType) => void
}
export function UncontrolledRating({defaultValue, onChange}: UncontrolledRatingProps) {
    const [value, setValue] = useState<ratingValueType>(defaultValue ? defaultValue : 0);

    const onChangeValueHandler = (val: 1 | 2 | 3| 4| 5) => {
        setValue(val);
        onChange(val);
    }

    return (
        <div>
            {/*<WrapperStar val={1} onChangeValue={onChangeValueHandler} selected={value > 0}/>*/}
            {/*<WrapperStar val={2} onChangeValue={onChangeValueHandler} selected={value > 1}/>*/}
            {/*<WrapperStar val={3} onChangeValue={onChangeValueHandler} selected={value > 2}/>*/}
            {/*<WrapperStar val={4} onChangeValue={onChangeValueHandler} selected={value > 3}/>*/}
            {/*<WrapperStar val={5} onChangeValue={onChangeValueHandler} selected={value > 4}/>*/}

            <Star onChangeValue={()=>onChangeValueHandler(1)} selected={value > 0}/>
            <Star onChangeValue={()=>onChangeValueHandler(2)} selected={value > 1}/>
            <Star onChangeValue={()=>onChangeValueHandler(3)} selected={value > 2}/>
            <Star onChangeValue={()=>onChangeValueHandler(4)} selected={value > 3}/>
            <Star onChangeValue={()=>onChangeValueHandler(5)} selected={value > 4}/>
        </div>
    )
}

type StarProps = {
    selected: boolean
    onChangeValue: ()=>void
}
// type WrapperStarProps = {
//     selected: boolean
//     onChangeValue: (val: number) => void
//     val: number
// }

function Star(props: StarProps) {
    return <span onClick={props.onChangeValue}>{props.selected ? <b>Star </b> : "star"}</span>
}

// function WrapperStar(props: WrapperStarProps) {
//     return (
//         <div onClick={()=>props.onChangeValue(props.val)}>
//             <Star selected={props.selected}/>
//         </div>
//     )
// }