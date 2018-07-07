import React, {Component} from 'react';

class ChildComponent2 extends Component {

    constructor() {
        super();
        this.state = {
            test: "kitten"
        }
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <div className="ChildComponent2">
                {/*<p onClick={this.props.increaseMultiplierValue}>{this.state.test}</p>*/}
                <p onClick={this.props.decreaseAutoincrementDuration}> Increase multiplier speed. </p>
            </div>
        );
    }
}

export default ChildComponent2;
