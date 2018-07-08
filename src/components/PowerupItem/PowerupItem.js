import React, {Component} from 'react';
import classNames from 'classnames';
import styles from './PowerupItem.module.scss'



class PowerupItem extends Component {

    constructor() {
        super();
        this.state = {
            isChangingBehaviourAfterFirstClick: false,
            stage: 1,
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

            if(this.state.stage === 2) {
                let caption2 = this.state.caption2;
                this.setState(state => ({
                    caption: caption2
                }));
            }

        }

    }

    handleClick() {

        if( this.state.stage === 2 &&
            this.state.isChangingBehaviourAfterFirstClick
        ) {
            this.props.modifyParent2();
        } else {
            this.props.modifyParent();
        }

        this.props.decreaseTotalPoints(-1 * this.state.price);
        this.increasePrice();

        if(this.state.isChangingBehaviourAfterFirstClick) {
            this.setState(state => ({
                stage: 2
            }));
        }

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

        const classes = classNames(
            styles.PowerupItem,
            {[styles.isVisible]: this.state.isVisible },
            {[styles.isActive]: this.state.isActive }
        );

        return (
            <div className={classes} onClick={this.handleClick.bind(this)}>
                {this.state.caption}
                <span className={styles.Price}>{this.state.price}</span>
            </div>
        );
    }
}

export default PowerupItem;
