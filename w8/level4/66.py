n = int(input())
arr = []
cnt = 0
for i in range (0, n):
    x = int(input())
    arr.append(x)
    if(i > 0 and arr[i-1] < x):
        cnt += 1
print(cnt)