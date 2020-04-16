def sign(x: int):
    if(x < 0):
        return -1
    if(x > 0):
        return 1
    return 0

n = int(input())
arr = []
for i in range (0, n):
    x = sign(int(input()))
    arr.append(x)
    if(i == 0 or i == n-1):
        arr.append(x)

#print(arr)

for i in range (1, n + 1):
    a, b, c = arr[i-1:i+2]
    #print(a, b, c)
    if(a == b == c):
        print('YES')
        exit()

print('NO')