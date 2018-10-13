import React from 'react';


export default class Kid extends React.Component {

    constructor(props) {
        super(props);
        this.state = { emotion: 'nervous', danceSteps: [], currentStepIndex: 0, startedPerforming: false };
    }

    qualified() {
        this.setState({ startedPerforming: false })
    }


    static getDerivedStateFromProps(props, state) {
        let newDanceSteps = [...state.danceSteps, ...props.furtherSteps]
        return {
            danceSteps: state.danceSteps.length < 5 ? newDanceSteps : state.danceSteps,
            emotion: props.sendApplaudStatus ? 'Happy' : 'nervous',
            startedPerforming: newDanceSteps.length >= 5 ? props.sendStars !== 5 ? true : false : false
        }
    }

    ComponentDidMount(){
        const { danceSteps } = this.state
        this.setState({
            danceSteps:['step1','step2'],
        })

        console.log("danceSteps", danceSteps);
    }

    componentWillUnmount() {
        this.props.renderJudgesComp(false)
    }
    render() {
        const { dressColor } = this.props;
        const { danceSteps, emotion, startedPerforming, currentStepIndex } = this.state;
        //console.log('===>', sendStars, startedPerforming);
        return (
            <div>
                <div>dressColor: {dressColor}</div>
                <div style={{ backgroundColor: dressColor, width: 50, height: 50 }}></div>
                Performing: {startedPerforming ? 'yes' : 'no'}
                <div>Emotion: {emotion}</div>
                {startedPerforming &&
                    <div>
                        <div>Current Step: {danceSteps[currentStepIndex]}</div>
                        <button onClick={() => this.setState({ currentStepIndex: currentStepIndex + 1 })}>Perform Next Step</button>
                    </div>}
            </div>
        );
    }
}
Kid.defaultProps = { dressColor: 'red', applaud: false, furtherSteps: [] };
