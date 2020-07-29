import React from 'react';
import ReactDOM from 'react-dom';


//import Clock from "./components/Clock/Clock";
import Greetion from "./components/Greetion/Greetion";

    ReactDOM.render(
        <>
            <Greetion showUser={true} />
            {/*<Clock name="Петя" age={25} plus={10} startData={'Jule 11, 1983 11:37:00'}/>
            <Clock name="Вася" age={25} plus={10} startData={'Jule 20, 1992 11:37:00'}/>
            <Clock name="Коля" age={25} plus={10} startData={'Jule 30, 2000 11:37:00'}/>*/}
        </>,
    document.getElementById('root')
);
