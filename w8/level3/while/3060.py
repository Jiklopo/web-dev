x = int(input())
n = 1
while n <= x:
    if(x == n):
        print('YES')
        exit()
    n *= 2
print('NO')