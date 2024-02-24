function solution(elementsWanted) {
    function fibonacci(n) {
        if (n <= 1) {
            return 1
        } 
        return fibonacci(n-1) + fibonacci(n-2)
    }
    
    for (let i = 0; i < elementsWanted; i++) {
        console.log(fibonacci(i))
    }
}

solution(4)