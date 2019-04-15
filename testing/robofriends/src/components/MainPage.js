import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';

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
        const { onSearchChange, robots, isPending } = this.props;

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
