import React, { Component } from 'react'
import axios from 'axios';
import DigimonsCard from './DigimonsCard'
export class Main extends Component {
    constructor(props) {
        super();
        this.state ={
            show:false,
            url:`http://localhost:3001`,
            digimons:[],
        }
    }
//     server.get('/digimon', digimonHandler)
// server.post('/addFav', addToFav)
    componentDidMount = async() =>{ //?
        let digiURL = await axios.get(`${this.state.url}/digimon?level=Rookie`)
        console.log(digiURL.data)
        this.setState ={
            show:true,
            digimons:digiURL.data[0],
        }
    }
    addToFav = async(addedData) =>{
        await axios.post(`${this.state.url}/addFav`,addedData)

    }
    render() {
        return (
            <div>
                
                {this.state.show
                &&
                this.state.digimons.map((val)=>{
                    return(
                    <DigimonsCard
                    digimons={val}
                    addToFav={this.addToFav}
                    />
                    )
                })}
            </div>
        )
    }
}

export default Main
