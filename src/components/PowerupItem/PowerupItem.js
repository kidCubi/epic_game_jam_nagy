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
            price: 1,
            priceMultiplier: 1.5,
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

    makeInVisible() {
        this.setState(state => ({
            isVisible: false
        }));
    }

    makeInActive() {
        this.setState(state => ({
            isActive: false
        }));
    }

    componentDidMount() {
        console.log(this.props);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.totalPoints !== this.props.totalPoints) {
            if( this.props.totalPoints >= this.state.price && !this.state.isActive) {
                this.makeActive();
            }

            if(this.props.totalPoints === this.state.triggerVisibility && !this.state.isVisible) {
                this.makeVisible();
            }

            if( this.props.totalPoints <= this.state.price && this.state.isActive) {
                this.makeInActive();
            }

        }

    }

    handleClick() {
        this.props.modifyParent();
        this.props.decreaseTotalPoints(this.state.price);
        this.increasePrice();
    }

    increasePrice() {
        let newPrice = this.state.price;
        newPrice *= this.state.priceMultiplier;
        newPrice = Math.ceil(newPrice);
        this.setState(state => ({
            price: newPrice
        }));
    }

    render() {

        const stylingClasses = classNames(
            styles.PowerupItem,
            {[styles.isVisible]: this.state.isVisible },
            {[styles.isActive]: this.state.isActive }
        );

        return (
            <div className={stylingClasses} onClick={this.handleClick.bind(this)}>
                {/*<p onClick={this.props.increaseMultiplierValue}>{this.state.test}</p>*/}
                {this.state.caption}
                <span className={styles.price}>{this.state.price}</span>
            </div>
        );
    }
}

export default PowerupItem;
