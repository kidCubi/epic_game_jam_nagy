import React, {Component} from 'react';

import classNames from 'classnames';

import styles from './ChildComponent.module.scss'

class ChildComponent extends Component {

    constructor() {
        super();
        this.state = {
            test: "kitten",
            isVisible: false
        }
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {

        const myWrapper = classNames(
            styles.Wrapper,
            styles.myContainer,
            {[styles.isVisible]: this.state.isVisible }
        );



        return (
            <div className={myWrapper}>
                {/*<p onClick={this.props.increaseMultiplierValue}>{this.state.test}</p>*/}
                <p onClick={this.props.autoIncrement}> Engage autoincrement </p>
            </div>
        );
    }
}

export default ChildComponent;
