const products = []
const product = products[0]

// EVERYTHING in JavaScript is either truthy or falsy
// Truthy - Values that resolve to true in boolean context
// Falsy - Value that resolve to false in boolean context
// Falsy values: false, 0, empty string, null, undefined, NaN

if (product) {
    console.log('product found')
} else {
    console.log('product not found')
}
