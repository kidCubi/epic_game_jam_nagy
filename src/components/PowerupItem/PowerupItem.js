import React, {Component} from 'react';
import classNames from 'classnames';
import styles from './PowerupItem.module.scss'



class PowerupItem extends Component {

    constructor() {
        super();
        this.state = {
            isVisible: false,
            isActive: false,
            isSold:false,
            triggerVisibility: 1,
            triggerActive: 2,
            price: 1,
            caption: "this is the caption"
        }
    }

    makeVisible() {
        this.setState(state => ({
            isVisible: true
        }));
    }

    makeActive() {
        this.setState(state => ({
            isActive: true
        }));
    }

    makeSold() {
        this.setState(state => ({
            isSold: true
        }));
    }

    componentDidMount() {
        console.log(this.props);
    }

    componentDidUpdate(prevProps) {
        if( prevProps.totalPoints === this.state.triggerActive &&
            !this.state.isActive
        ) {
            this.makeActive();
        }

        if(prevProps.totalPoints === this.state.triggerVisibility &&
            !this.state.isVisible
        ) {
            this.makeVisible();
        }
    }

    render() {

        const stylingClasses = classNames(
            styles.PowerupItem,
            {[styles.isVisible]: this.state.isVisible },
            {[styles.isActive]: this.state.isActive }
        );

        return (
            <div className={stylingClasses} onClick={this.props.modifyParent}>
                {/*<p onClick={this.props.increaseMultiplierValue}>{this.state.test}</p>*/}
                {this.state.caption}
            </div>
        );
    }
}

export default PowerupItem;
