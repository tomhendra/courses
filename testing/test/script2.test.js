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
