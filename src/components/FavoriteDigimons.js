import React, { Component } from 'react'
import axios from 'axios';
import FavCard from './FavCard';
import FavForm from './FavForm';
export class FavoriteDigimons extends Component {
    constructor(props) {
        super();
        this.state = {
            show: false,
            showForm: false,
            updatedName: '',
            updatedImg: '',
            updatedLevel: '',
            url:`http://localhost:3001`,
            digimons: [],
            index: 0,
        }
    }

    // server.get('/update/:id', updateHandler)
    componentDidMount = async () => { //?
        let digiURL = await axios.get(`${this.state.url}/getFav`)
        console.log(digiURL.data)
        this.setState = {
            show: true,
            digimons: digiURL.data,
        }
    }
    deleteFunc = async (idx) => {
        let id = this.state.digimons[idx]._id
        let deleteURL = await axios.delete(`${this.state.url}/delete/${id}`)
        this.setState = {
            show: true,
            digimons: deleteURL.data,
        }
    }
    showForm = (idx) => {
        let mydigimons = this.state.digimons[idx];
        this.setState = {
            updatedName: mydigimons.name,
            updatedImg: mydigimons.img,
            updatedLevel: mydigimons.level,
            index: idx,
            showForm: true,
        }

    }
    updatedMyName = (e) =>  this.setState = { updatedName:e.target.value }
    updatedMyImg = (e) =>  this.setState = { updatedImg:e.target.value }
    updatedMyLevel = (e) =>  this.setState = { updatedLevel:e.target.value }
    updateFunc = async(e) =>{
        e.preventDefault();
        let id = this.state.digimons[this.state.index]._id
        const updatedData={
            updatedName: this.state.updatedName,
            updatedImg: this.state.updatedImg,
            updatedLevel: this.state.updatedLevel,
        }
        let updateURL = await axios.put(`${this.state.url}/update/${id}`,updatedData);
        this.setState= {digimons:updateURL.data}
    }
    render() {
        return (
            <div>
                {this.state.showForm
                    &&
                    <FavForm
                    updatedMyName = {this.updatedMyName}
                    updatedMyImg = {this.updatedMyImg}
                    updatedMyLevel = {this.updatedMyLevel}
                    updateFunc = {this.updateFunc}
                    updatedName={this.state.updatedName}
                    updatedImg={this.state.updatedImg}
                    updatedLevel={this.state.updatedLevel}
                    />
                }
                {this.state.show
                    &&
                    this.state.digimons.map((val) => {
                        return (
                            <FavCard
                                digimons={val}
                                delete={this.deleteFunc}
                                update={this.showForm}
                                index={this.state.index}
                            />
                        )
                    })}

            </div>
        )
    }
}

export default FavoriteDigimons

