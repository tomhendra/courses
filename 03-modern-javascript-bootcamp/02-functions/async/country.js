// Callback method
getCountry('GB', (error, country) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`Country name: ${country.name}`)
    } 
})

// Promise method
getCountryOld('GB').then((country) => {
    console.log(`Country name: ${country.name}`)
    }, (error) => {
    console.log(`Error: ${error}`)
})

// Async function 
getCurrentCountry().then((country) => {
    console.log(country.name)
}).catch((error) => {
    console.log(error)
})
