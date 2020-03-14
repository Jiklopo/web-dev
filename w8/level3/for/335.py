import math as m

a = int(input())
b = int(input())

for i in range(a, b):
    if m.modf(m.sqrt(i))[0] == 0:
        print(i)