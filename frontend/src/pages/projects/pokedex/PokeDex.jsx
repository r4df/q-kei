import React, { Component } from "react";
import "./style.css"
import PokemonLogo96 from "./assets/icons8-pokemon-ball-96.png"


const GLPOKEAPIURL = "https://pokeapi.co/api/v2/pokemon/";


export default class PokeDex extends Component {

    constructor() {
        super();
        this.handlerGetUrlData = this.getUrlData.bind(this);
        this.default_state = {
            data: {
                name: "???",
                height: 0.0,
                weight: 0.0,
                sprites: {
                    front_default: PokemonLogo96,
                },
                types: [{ type: { name: "???" } }],
                id: "???",
            }
        }

        this.state = this.default_state
    }

    handleInputSearch = (event) => {
        const search_val = event.target.value ? event.target.value : "test"
        this.setState({
            searchValue: search_val,
        });
    };



    getUrlData() {
        fetch(GLPOKEAPIURL + `${this.state.searchValue}`)
            .then((response) => {
                return response.json();
            })
            .then((jsonData) => {
                this.setState({
                    data: jsonData,
                });
            }).catch((error) => {
                this.setState(this.default_state);
            });
    }

    render() {
        return (
            <div className="container">
                <div className="container my-3 py-3 app-bg-pallette-1 rounded" style={{ color: "var(--pallette-3)" }} >
                    <h1 className="m-0">PokeDex</h1>
                </div>

                <div className="container app-bg-pallette-1 py-3 rounded" style={{ fontFamily: "zx-spectrum" }} >


                    {/* Search Button */}
                    <div className="border border-1 border-dark rounded p-3 mb-3"  style={{backgroundColor:"#8EA3A6"}}>
                        <div className="d-flex flex-column flex-lg-row gap-2">
                            <input type="text" className="form-control" placeholder="Input Pokemon name" onChange={this.handleInputSearch}></input>
                            <button className="btn btn-primary" type="button" id="button-search" onClick={this.handlerGetUrlData}>
                                <span className="d-flex flex-row justify-content-center">Search<i className="bi bi-search ms-1"></i></span>
                            </button>
                        </div>
                    </div>

                    {/* Result */}
                    <div className="d-flex border border-1 border-dark rounded p-3 flex-lg-row flex-column" style={{backgroundColor:"#8EA3A6"}}>

                        <div className="d-flex flex-column flex-lg-row">
                            <div className="d-flex justify-content-center border border-1 border-dark rounded p-3 me-lg-3 mb-lg-0 mb-3" style={{backgroundColor:"#E6E9AF"}}>
                                <img src={this.state.data.sprites.front_default} alt="pokemon"></img>
                            </div>

                            <div className="d-flex flex-column justify-content-center border border-1 border-dark rounded p-3 me-lg-3  mb-lg-0 mb-3" style={{backgroundColor:"#E6E9AF"}}>
                                <p>No. {this.state.data.id}</p>
                                <p>Name: {this.state.data.name.toUpperCase()}</p>
                            </div>
                        </div>

                        <div className="d-flex flex-column flex-lg-row">
                            <div className="border border-1 border-dark rounded p-3 mb-lg-0 mb-3 me-lg-3 me-0" style={{backgroundColor:"#E6E9AF"}}>
                                <p>Type: </p>
                                <div className="d-flex flex-row">
                                    {this.state.data.types.map((item, index) => (
                                        <div  key={index} className={`pokedex-pd-type-${item.type.name}`}>
                                            <p className="m-0 p-0">{item.type.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="border border-1 border-dark rounded p-3 " style={{backgroundColor:"#E6E9AF"}}>
                                <p>Ht: {Number(this.state.data.height) / 10} m</p>
                                <p>Wt: {Number(this.state.data.weight) / 10} kg</p>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        );
    }
}
