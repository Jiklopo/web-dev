def sign(number: int):
    if number == 0:
        return 0
    return -1 if number < 0 else 1


a = int(input())
print(sign(a))
