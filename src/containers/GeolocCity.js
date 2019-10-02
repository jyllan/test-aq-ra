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
                        this.dispatch(addCity(result.data.id));
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

                //   this.setState({
                //     latitude: position.coords.latitude,
                //     longitude: position.coords.longitude,
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
        const { name, coord } = this.state
        console.log(this.state);
        return (
            <div>
            <form onSubmit={e => {
                e.preventDefault()
                this.getMyLocation();
            }}>
            <button type="submit">
            Geoloc me
            </button>
            </form>
            {/* <div className="geolocCity__name">
            {name}
            </div>
            <div className="geolocCity__coordinates">
            <div className="geolocCity__coordinates__latitude">
            {coord.lat}
            </div>
            <div className="geolocCity__coordinates__longitude">
            {coord.lon}
            </div>
        </div> */}
        </div>
        )
    }
}



export default connect()(GeolocCity)
