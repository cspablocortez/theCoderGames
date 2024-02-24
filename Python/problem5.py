def fibonacci(n):
    if (n <= 1):
        return 1
    
    return fibonacci(n - 2) + fibonacci(n - 1)

for i in range(4):
    print(fibonacci(i))