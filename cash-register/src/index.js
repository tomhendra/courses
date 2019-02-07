/*********************************************************

JavaScript Algorithms and Data Structures Projects: Cash Register 

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key. 

********************************************************/

const checkCashRegister = (price, cash, cid) => {
    // Setup currency object
    const currencyObj = {
        'ONE HUNDRED': 100,
        TWENTY: 20,
        TEN: 10,
        FIVE: 5,
        ONE: 1,
        QUARTER: 0.25,
        DIME: 0.1,
        NICKEL: 0.05,
        PENNY: 0.01
    }

    // Get amount of change due
    let changeAmount = (cash - price)

    // Convert cid array to object & reorder highest to lowest
    const cidObj = Object.fromEntries(cid.reverse())

    // Get total value of cid object
    const cidTotal = Object.values(cidObj).reduce((a, b) => a + b).toFixed(2)  

    // Function to output array of key/value pairs to return as change.change value
    const cidArr = (obj) => Object.entries(obj)

    // Iterate over currency object and return new object with notes/coins + Bonus: Deducts cid to reflect notes/coins taken out
    const calculateChange = (currency) => {
        const changeObj = {}
        Object.entries(currency).forEach(([key, value]) => {
            if (changeAmount > currency[key]) {
                let changeCount = 0
                for (let i = 0; changeAmount >= currency[key] && cidObj[key] >= currency[key]; i++) {              
                    changeAmount = changeAmount.toFixed(2)
                    changeAmount -= currency[key]
                    changeCount += currency[key]
                    cidObj[key] -= currency[key]
                }
                changeObj[key] = changeCount
            }
        })
        return changeObj
    }

    // Setup default change object to return
    const change = {}

    // Check if cid is less than change then update status of & return change object
    if (cidTotal < changeAmount) {
        change.status = 'INSUFFICIENT_FUNDS'
        change.change = []
        return change
    } else if (cidTotal === changeAmount.toFixed(2)) {
        change.status = 'CLOSED'
        change.change = cid.reverse()
        console.log(change)
        return change
    } 

    // Call calculateChange and assign to variable
    const changeProp = calculateChange(currencyObj)
    
    // Check if exact change cannot be returned otherwise return change obj converted to array
    if (changeAmount > 0) {
        change.status = 'INSUFFICIENT_FUNDS'
        change.change = []
        return change
    } else {
        change.status = 'OPEN'
        change.change = cidArr(changeProp)
        return change
    }

  }

  // Test cases --->
  
//   checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

//   checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) 

//   checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])