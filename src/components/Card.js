import React, { Component } from 'react';
import axios from 'axios';
import '../style.scss';
import { Spinner } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planet: {
                name: 'Nome do Planeta',
                population: '0000000',
                terrain: '0000000',
                climate: '0000000',
                films: [],
                loading: false,
            },
        };

        this.loadPlanet = this.loadPlanet.bind(this);

    }

    componentDidMount() {
        this.loadPlanet();
    }

    loadPlanet() {
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        this.setState({ loading: true })

        axios.get("https://swapi.dev/api/planets/" + getRandomInt(1, 10))
            .then((response) => {
                var { data } = response;
                this.setState({
                    planet: data,
                    loading: false,
                    done: false
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        const { loading } = this.state;
        return (
            <div className = "container">
                <div className = "card">
                    <div className = "bg">

                        <div>
                            <h1>{this.state.planet.name}</h1>

                            <p><b>População:</b> {this.state.planet.population}</p>

                            <p><b>Clima:</b> {this.state.planet.climate}</p>

                            <p><b>Terreno:</b> {this.state.planet.terrain}</p>

                            <p><b>Apareceu em:</b> {this.state.planet.films.length} filme(s)</p>
                        </div>
                    </div>
                </div>

                <Button className = "btn" variant = "danger" onClick = {this.loadPlanet} disabled = {loading}>
                    {loading && <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />}
                    {loading && <span> Carregando</span>}
                    {!loading && <span>Próximo</span>}
                </Button>
            </div>
        );

    }
}

export default Card;