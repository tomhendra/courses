let name = ' Tom Hendra '

// Length property
console.log(name.length)

// Convert to uppercase
console.log(name.toUpperCase())

// Convert to lowercase
console.log(name.toLowerCase())

// Includes method
let password = 'abc123sdf083'
console.log(password.includes('password'))

// Trim method
console.log(name.trim())

// Challenge area

let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('sadfp'))
console.log(isValidPassword('sadfp!@£$%'))
console.log(isValidPassword('sadfpjkhfwiojpassword'))