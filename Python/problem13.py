arr = [1, 3, 3, 5, 7, 2, 6, 71, 16]

def repeatedNumber(arr, num):
    repeated = False
    for i in range(0, len(arr) - 1):
        if (arr[i] == arr[i + 1]):
            repeated = True
            break
    return repeated

print(repeatedNumber(arr, 3))