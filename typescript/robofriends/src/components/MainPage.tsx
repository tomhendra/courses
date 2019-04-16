import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
import Header from './Header';

import './MainPage.css';

class MainPage extends Component {

    componentDidMount() {
        this.props.onRequestRobots()
    }

    filterRobots = () => {
        return this.props.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
        })
    }

    render() {
        const { onSearchChange, isPending } = this.props;

        return isPending ?
        (
            <div className='tc'>
                <Header />
                <h2 className='f2'>Loading...</h2>
            </div>
        ) 
        : 
        (
            <div className='tc'>
                <Header />
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={this.filterRobots()}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    }
}

export default MainPage;
