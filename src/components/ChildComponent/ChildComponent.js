import React, {Component} from 'react';

class ChildComponent extends Component {

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
            <div className="ChildComponent">
                {/*<p onClick={this.props.increaseMultiplierValue}>{this.state.test}</p>*/}
                <p onClick={this.props.autoIncrement}> Engage autoincrement </p>
            </div>
        );
    }
}

export default ChildComponent;
