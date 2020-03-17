def powerishe(a, power: int):
    if power == 0 or a == 1:
        return 1
    res = 1.0
    s = sign(power)
    for i in range(0, power, s):
        if s < 0:
            res /= a
        else:
            res *= a
    return res

def sign(x: int):
    if(x < 0):
        return -1
    if(x > 0):
        return 1
    return 0

a = int(input())
power = int(input())

print(powerishe(a, power))