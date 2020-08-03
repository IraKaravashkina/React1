import React, {Component} from "react";
import Clock from "../../components/Clock/Clock";

export default class ClockWrapper extends Component{
constructor(props) {
    super(props);
    this.state = {
        show: true,
    }
}
componentDidMount() {
    fetch()
}

    toggle(){
    const {show} = this.state;
    this.setState({
    show: !show,
    })
}
render(){
    const {show} = this.state;
    return(
        <>
            {/*<button onClick={() => this.toggle()}>Toggle</button>*/}
            {/*{show === true*/}
       {/*? <Clock key={'hgfdsa'} name="Коля" age={25} plus={1} starData={'Jule 23, 1992 11:37:00'}/>*/}
       {/*: <Clock key={'123654'} name="Петя" age={12} plus={1} starData={'Jule 23, 1992 11:37:00'}/>*/}
            }
            <Clock name="Коля" age={25} plus={1} starData={'Jule 23, 1992 11:37:00'}/>
            <Clock name="Петя" age={25} plus={1} starData={'Jule 23, 1992 11:37:00'}/>
            <Clock name="Вася" age={25} plus={1} starData={'Jule 23, 1992 11:37:00'}/>
        </>

    )
}
}