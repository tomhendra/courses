import React from 'react';

interface ISearchBoxProps {
    searchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
}

const SearchBox = ({ searchChange }: ISearchBoxProps) => {
    return (
        <div className='pa2'>
            <input 
                aria-label='Search Robots'
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search robots' 
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;