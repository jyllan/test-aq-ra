import React from 'react'
import { connect } from 'react-redux'
import getCityData from '../getCityData';
import { addCity } from '../actions'
import { Button, Form } from 'react-bootstrap';


class AddCity extends React.Component {
    constructor(props) {
        super()

        const { dispatch } = props;
        this.dispatch = dispatch;
        this.state = {
        }

        this.input = null;
        this.getCityName = this.getCityName.bind(this)
    }

    async getCityName(id) {
        try {
            let result = await this.getData({
                id,
            });
            // console.log('GeolocCity - 31 - result : ', result);
            console.log(result.data.name);
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
    }

    async getData(params) {
        return await getCityData(params);
    }

    // Show a simple form with an input and a submit button
    render() {
        return (
            <div className="addCity">

                <Form
                    className="addCity__form"
                    onSubmit={e => {
                        e.preventDefault()
                        if (!this.input.value.trim()) {
                            return
                        }
                        this.getCityName(parseInt(this.input.value, 10));
                        // On submit, call the addCity action
                        // dispatch(addCity(parseIntthis.(input.value, 10)));
                        this.input.value = ''
                    }}>
                    <Form.Control
                        type="text"
                        className="addCity__input"
                        ref={node => this.input = node}
                        placeholder="OpenWeather City ID" />
                    <Button variant="primary"
                        type="submit"
                        className="addCity__button"
                    >
                        Add City
                    </Button>
                </Form>
            </div>
        );
    }
}

export default connect()(AddCity)
