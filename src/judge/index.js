
import React from 'react';

export default class Judge extends React.Component {
    constructor() {
        super()

        this.state = { stars: 0, available: false }

        this.applaud = this.applaud.bind(this)
        this.provideStars = this.provideStars.bind(this)
    }

    applaud() {
        //Send this applaud status to Kid.js
        this.props.getApplaudStatus(true)
    }

    provideStars() {
        const { stars } = this.state;

        this.setState({ stars: stars + 1 })

        this.props.recieveStars(stars + 1)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.stars <= 5
    }

    render() {
        const { stars, available } = this.state;

        return (
            <div>
    <button type="button" onClick={this.applaud}>Appreciate performance</button>
    <br/><br/>
    <button type="button" onClick={this.provideStars}>Provide stars</button>
                <br /><br />
    Kid is available: {available}
                <br /><br />
    Stars gained: {stars}
            </div>
        );
    }
}
