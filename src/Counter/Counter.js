import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
    state = {
        counter: 0,
        backgroundColor: "grey"
    };

    addHandler = () => {
        this.setState({
            counter: this.state.counter+1,
            backgroundColor: 
                (this.state.counter+1) % 10 === 0 ? "orange"
                : (this.state.counter+1) % 2 === 0 ? "red" 
                : "blue"
        });
    }

    removeHandler = () => {
        if (this.state.counter > 0) {
        this.setState({
            counter: this.state.counter-1,
            backgroundColor: 
            (this.state.counter-1) % 10 === 0 ? "orange"
            : (this.state.counter-1) % 2 === 0 ? "red" 
            : "blue"
        });
    }
    }

    resetHandler = () => {
        this.setState({counter: 0});
    }

    render () {
        return (
	        <div>
                <button className={"displayCounter " + this.state.backgroundColor}><p>{this.state.counter}</p></button>
                <div className="buttonContainer">
                    <button className="buttons addOne" onClick={this.addHandler}>Add one</button>
                    <button className="buttons removeOne" onClick={this.removeHandler}>Remove one</button>
                    <button className="buttons reset" onClick={this.resetHandler}>Reset</button>
                </div>
            </div>
        )
    }
}

export default Counter;