def min(a: int, b: int, c: int, d: int):
    min1 = a if a < b else b
    min2 = c if c < d else d
    return min1 if min1 < min2 else min2

a = int(input())
b = int(input())
c = int(input())
d = int(input())

print(min(a, b, c, d))