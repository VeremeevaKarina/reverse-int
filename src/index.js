module.exports = function reverse (n) {
   if (n < 0) {
        n *= -1;
    }

    let digit, result = 0
    while (n) {
        digit = n % 10 
        result = (result * 10) + digit 
        n = n / 10 | 0
    }  
    return result
}
