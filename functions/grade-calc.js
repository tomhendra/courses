const checkScore = function (mark, total) {
    if (typeof mark !== 'number' || typeof total !== 'number') {
        throw Error('The calculator only accepts numbers. Please try again.')
    }
    const percent = (mark / total) * 100
    let grade = ''
    
    if (percent >= 90) {
        grade = 'A'
    } else if (percent >= 80) {
        grade = 'B'
    } else if (percent >= 70) {
        grade = 'C'
    } else if (percent >= 60) {
        grade = 'D'
    } else {
        grade = 'F'
    } 
    return `You got a ${grade} (${percent}%)!`
}

try {
    const score = checkScore(20, 'iced bun')
    console.log(score)
} catch (e) {
    console.log(e.message)
}
