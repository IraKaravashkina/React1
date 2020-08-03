import React, {Component} from "react";
import UserGreetion from "./UserGreetion"
import GuestGreetion from "./GuestGreetion"
import Button from "./Button"

export default class Greetion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showUser: true,
            color: "orange"
        }
    }

    toggleShowType() {
        const {showUser} = this.state
        this.setState({
            showUser: !showUser,
        })
    }
    render()
    {
        const {showUser} = this.state;
        return (
            <>
                <button onClick={() => this.toggleShowType()}>Toggle</button>
                {showUser
                    ? <GuestGreetion/>
                    : <UserGreetion/>
                }
            </>
        )
    }
}


