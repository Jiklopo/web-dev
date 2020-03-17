x = int(input())
n = 1
power = 0
while True:
    if(n >= x):
        print(power)
        exit()
    n *= 2
    power += 1