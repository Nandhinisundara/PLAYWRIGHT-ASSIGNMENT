function factorial(n: number): number {
    if(n < 0) {
        console.log('Factorial not possible for negative numbers')
    }
    let result = 1
    for(let i = 2; i <= n; i++) {
        result = result * i
    }
    return result
}

// normal calls
console.log(factorial(5))   // 120
console.log(factorial(4))   // 24
console.log(factorial(-1))   // 1


