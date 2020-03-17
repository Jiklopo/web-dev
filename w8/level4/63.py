n = int(input())
arr = []
for i in range (0, n):
    x = int(input())
    arr.append(x)

for i in range(0, n, 2):
    print(arr[i])