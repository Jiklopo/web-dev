n = int(input())
arr = []
for i in range (0, n):
    x = int(input())
    arr.append(x)
    if(x % 2 == 0):
        print(x)