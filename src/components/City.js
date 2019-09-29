import React from 'react'
import Card from "react-bootstrap/Card";
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

    componentDidMount() {
        if (this.props.showDetails) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=d772bba149811a24fc8a81b2a52d6b3e&lang=fr&id=${this.props.openweatherCityId}`)
                .then(res => res.json())
                .then(
                    (result) => {
                          this.setState({
                            isLoaded: true,
                            infos: result,
                          });
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                          this.setState({
                            isLoaded: true,
                            error,
                          });
                    }
                )
        }
    }

    fullView () {
        if (this.state.isLoaded) {
            if (this.state.infos.id) {
                return (
                    <Card>
                        {/* <Card.Header>{this.props.openweatherCityId}</Card.Header> */}
                        <Card.Header>{this.state.infos.name}</Card.Header>
                        <Card.Body>
                        {
                            this.state.infos.weather &&
                            this.state.infos.weather.map((dayWeather, i) => {
                                return (
                                    <div key={i}>
                                        <i className={`wi wi-owm-${dayWeather.id}`}></i>
                                        {dayWeather.description}
                                    </div>
                                );
                            })
                        }
                        </Card.Body>
                    </Card>
                );
            } else {
                return <div>Erreur sur la ville d'ID : {this.props.openweatherCityId}</div>
            }
        } else {
            return (
                <Card>
                    <Card.Body>Chargement...</Card.Body>
                </Card>
            )
        }

    }

    settingView() {
        return (
            <li
                onClick={this.props.onClick}
                style={{
                    textDecoration: this.props.active ? 'line-through' : 'none'
                }}
                title={this.props.openweatherCityId}
            >
                {this.props.openweatherCityId}
            </li>
        )
    }

    // Render the requested view
    render () {
        return this.props.showDetails === true ? this.fullView() : this.settingView();
    }
}

City.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  showDetails: PropTypes.bool,
  openweatherCityId: PropTypes.string.isRequired
}

export default City
