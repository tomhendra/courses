// Set up filters default object
const filters = {
    searchText: '',
    hideCompleted: false
}

const getFilters = () => filters

// setFilters
const setFilters = ({ searchText, hideCompleted }) => {
    if (typeof searchText === 'string') {
        filters.searchText = searchText
    }
    if (typeof hideCompleted === 'boolean') {
        filters.hideCompleted = hideCompleted
    }
}

export { getFilters, setFilters }