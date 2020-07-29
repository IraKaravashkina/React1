import React, {Component} from "react";

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newAge: props.age,
            date: new Date(props.startData)
        }
    }

    componentDidMount() {
        setInterval(() => this.agePlus(), 1000);
        setInterval( ()=> this.tick(), 1000);
        this.tick();
    }

    tick() {
        const {date} = this.state;
        const newDate = +date + 1000;
        this.setState({
            data: new Date(newDate),
        })
        console.log(new Date(newDate));
    }

    agePlus() {
        const {newAge} = this.state;
        const {plus} = this.props;
        this.setState({
            newAge: newAge + plus,
        })
    }
    ;

    render() {
        const {name} = this.props;
        const {newAge} = this.state;
        const {date} = this.state;
        return (
            <div>
                <h1>Hello, {name}!</h1>
                <h2>New age: {newAge}</h2>
                <h2>It is {date.toLocaleString()}</h2>
            </div>)
    }
}
