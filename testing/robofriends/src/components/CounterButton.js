import React, { PureComponent } from 'react'; 
// PureComponent is built in component which will only re-render when its props change 
// the only caveat is that it does 'shallow comparison' of props, so deeply nested objects may miss some prop updates
// shouldComponentUpdate has more control but is another function to be run - performance penalty. Don't overuse and always test performance!

class CounterButton extends PureComponent {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    // Using Component instead of PureComponent...
    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.state.count !== nextState.count) {
    //         return true;
    //     }
    //     return false;
    // }

    updateCount = () => {
        this.setState(state => {
            return { count: state.count + 1 }
        })
    }
    
    render() {
        return (
            <button 
                id='counter'
                color={this.props.color} 
                onClick={this.updateCount}>
                count: {this.state.count}
            </button>
        );
    }
}

export default CounterButton;