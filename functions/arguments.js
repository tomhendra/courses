// Multiple arguments
let add = function (a, b, c) {
  return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
  return `Name: ${name} - Score: ${score}` // Template strings
  // return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText('Tom')
console.log(scoreText)

// Challenge area
// E.g. A 25% tip on $40 would be $10
let getTip = function (total, tipPercent = 0.2) {
  let percent = tipPercent * 100
  let result = total * tipPercent
  return `A ${percent}% tip on $${total} would be $${result}` 
}

let tip = getTip(100, 0.25)
console.log(tip)

