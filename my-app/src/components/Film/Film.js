import React from "react";

export default function Film(props) {
    const {name, number, text} = props;
    return (
        <div style={{ border: '1px solid red', margin:20}}>
            Название: {name}
            Номером: {number}
            Текстом:{text}
        </div>
    )
}