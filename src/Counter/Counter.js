import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
    state = {
        counter: 0
        if (this.state.counter % 2 == 0) {
            displayCounter.style.background-color = red;
            } else {
            displayCounter.style.background-color = blue;
            }
        }
    };

    addHandler = () => {
        this.setState({counter: this.state.counter+1});
    }

    removeHandler = () => {
        this.setState({counter: this.state.counter-1});
    }

    resetHandler = () => {
        this.setState({counter: this.state.counter = 0});
    }

    render () {
        return (
	        <div>
                <button className="displayCounter"><p>{this.state.counter}</p></button>
                <div className="buttonContainer">
                    <button className="addOne" onClick={this.addHandler}>Add one</button>
                    <button className="removeOne" onClick={this.removeHandler}>Remove one</button>
                    <button className="reset" onClick={this.resetHandler}>Reset</button>
                </div>
            </div>
        )
    }
}

export default Counter;