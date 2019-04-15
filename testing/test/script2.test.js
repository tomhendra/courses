const fetch = require('node-fetch');
const swapi = require('./script2');

it('calls swapi to get people', () => {
    // always use expect.assertions when dealing with async
    expect.assertions(1);
    // using return ensures api call has finished before test evaluates
    return swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(87)
    })
})

it('calls swapi to get people with a promise', () => {
    expect.assertions(2);
    return swapi.getPeoplePromise(fetch).then(data => {
        expect(data.count).toEqual(87);
        expect(data.results.length).toBeGreaterThan(5);
    })
})

// Using mock functions AKA spies
it('getPeople returns count and results', () => {
    const mockFetch = jest.fn()
    .mockReturnValue(Promise.resolve({
        json: () => Promise.resolve({
            count: 87,
            results: [0,1,2,3,4,5]
        })
    }))

    expect.assertions(4);
    return swapi.getPeoplePromise(mockFetch).then(data => {
        expect(mockFetch.mock.calls.length).toBe(1);
        expect(mockFetch).toBeCalledWith('https://swapi.co/api/people/');
        expect(data.count).toEqual(87);
        expect(data.results.length).toBeGreaterThan(5);
    })
})
