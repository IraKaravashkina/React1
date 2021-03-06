import React, {Component} from "react";

import Film from "../../components/Film/Film";

export default class StarWars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filmsArray: [],
        }
    }

    componentDidMount() {
        fetch('https://swapi.dev/api/films/', {method: 'GET'})
            .then(response => response.json())
            .then(json =>{
                this.setState({
                    filmsArray: json.results,
                })
            })
    }

    render() {
        const {filmsArray}=this.state;
        return filmsArray.map(item => {
            console.log(item);
            return <Film name={item.title} number={item.episode_id} text={item.opening_crawl}/>

        })
}}
           // <>
            //    <Film name={'Name1'} number={'1'} text={'dfghj'}/>
             //   <Film name={'Name2'} number={'1'} text={'dfghj'}/>
             //   <Film name={'Name3'} number={'1'} text={'dfghj'}/>
          //  </>
