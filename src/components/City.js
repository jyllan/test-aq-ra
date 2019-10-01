import React from 'react'
import Card from "react-bootstrap/Card";
import axios from "axios";
import PropTypes from 'prop-types'
import '../style/weather/style.scss'


class City extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            infos: []
        };
    }

    async componentDidMount() {
        if (this.props.showDetails) {
            try {
                // let result = await this.getData();
                let result = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
                    params: {
                        APPID: 'd772bba149811a24fc8a81b2a52d6b3e',
                        units: 'metric',
                        id: this.props.openweatherCityId,
                        lang: 'fr',
                    }
                });

                if (result) {
                    this.setState({
                        isLoaded: true,
                        infos: result.data,
                    });
                }
            } catch (e) {
                this.setState({
                    isLoaded: true,
                    error: e.message,
                  });
            }
        }
    }

    // async getData() {
    //     return await axios.get('http://api.openweathermap.org/data/2.5/weather', {
    //         params: {
    //             APPID: 'd772bba149811a24fc8a81b2a52d6b3e',
    //             units: 'metric',
    //             id: this.props.openweatherCityId,
    //             lang: 'fr',
    //         }
    //     });
    // }

    fullView () {
        if (this.state.isLoaded) {
            if (this.state.infos.id) {
                console.log(this.state.infos.name);
                return (
                    <Card>
                        {/* <Card.Header>{this.props.openweatherCityId}</Card.Header> */}
                        <Card.Header>
                            <div className="city__name">
                                {this.state.infos.name}
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="city__weather__type">
                                {
                                    this.state.infos.weather &&
                                    this.state.infos.weather.map((dayWeather, i) => {
                                        // Display only the first weather info
                                        if (i === 0) {
                                            return (
                                                <div key={i}>
                                                    <i className={`wi wi-owm-${dayWeather.id}`}></i>
                                                    {dayWeather.description}
                                                </div>
                                            );
                                        }
                                        return false;
                                    })
                                }
                            </div>
                            {
                                (this.state.infos.main) &&
                                (
                                    <div className="city__weather__temperature">
                                        <i className="wi wi-thermometer"></i>
                                        {Math.round(this.state.infos.main.temp)}°C
                                    </div>
                                )
                            }
                            {
                                (this.state.infos.wind) &&
                                (
                                    <div className="city__weather__wind">
                                        <i className={`wi wi-wind towards-${this.state.infos.wind.deg}-deg`}></i>
                                        {/* Convert m/s speed into km/h */}
                                        {Math.round(this.state.infos.wind.speed * 3.6)} km/h
                                    </div>
                                )
                            }
                        </Card.Body>
                    </Card>
                );
            } else {
                return (
                    <Card>
                        <Card.Header>Ville : {this.props.openweatherCityId}</Card.Header>
                        <Card.Body>ERREUR: {this.state.error}</Card.Body>
                    </Card>
                )
            }
        } else {
            console.log('City - 110 - ');
            return (
                <Card>
                    <Card.Body>
                        <div className="city__loading">
                            Chargement...
                        </div>
                    </Card.Body>
                </Card>
            )
        }

    }

    settingView() {
        return (
            <li
                style={{
                    textDecoration: this.props.active ? 'line-through' : 'none'
                }}
                title={this.props.openweatherCityId}
            >
                <span
                    className="city__disable"
                    onClick={this.props.onDisable}
                >
                    &#10004;
                </span>
                <span
                    className="city__openweather-id"
                >
                    {this.props.openweatherCityId}
                </span>
                <span
                    className="city__remove"
                    onClick={this.props.onRemove}
                >
                    &#128465;
                </span>
            </li>
        )
    }

    // Render the requested view
    render () {
        return this.props.showDetails === true ? this.fullView() : this.settingView();
    }
}

City.propTypes = {
    onDisable: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
    showDetails: PropTypes.bool,
    openweatherCityId: PropTypes.string.isRequired,
}

export default City;
