import React from 'react'
import { connect } from 'react-redux'
import getCityData from '../getCityData';
import { addCity } from '../actions'
// import {usePosition} from '../usePosition';

class GeolocCity extends React.Component {
    constructor(props) {
        super()

        const { dispatch } = props;
        this.dispatch = dispatch;
        this.state = {}

        this.getMyLocation = this.getMyLocation.bind(this)
    }

    componentDidMount() {
        //   this.getMyLocation()
    }

    getMyLocation() {
        const location = window.navigator && window.navigator.geolocation

        if (location) {
            location.getCurrentPosition(async (position) => {
                try {
                    let result = await this.getData({
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                    });
                    // console.log('GeolocCity - 31 - result : ', result);
                    if (result) {
                        this.dispatch(addCity(result.data.id, result.data.name));
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
                //   })
            }, (error) => {
                //   this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
            })
        } else {
            console.log('GeolocCity - 35 - no location : ');
        }

    }

    async getData(params) {
        return await getCityData(params);
    }

    render() {
        return (
            <div className="geolocCity">
            <form onSubmit={e => {
                e.preventDefault()
                this.getMyLocation();
            }}>
            <button
                type="submit"
                className="geolocCity__button"
            >
                Geolocate me <span className="ico">&#10148;</span>
            </button>
            </form>
        </div>
        )
    }
}



export default connect()(GeolocCity)
